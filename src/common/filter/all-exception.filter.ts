import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { ErrorResponse } from "../dto/interface/error-response.interface";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";

    if (exception instanceof HttpException) {
      // Ưu tiên xử lý lỗi HTTP trước
      status = exception.getStatus();
      const responseBody = exception.getResponse();
      if (typeof responseBody === "string") {
        message = responseBody;
      } else if (
        responseBody &&
        typeof responseBody === "object" &&
        "message" in responseBody
      ) {
        message = (responseBody as { message?: string }).message ?? message;
      }
    } else if (exception instanceof Error) {
      // Xử lý lỗi JavaScript thông thường
      message = exception.message;
    } else {
      // Lỗi unknown khác
      message = String(exception);
    }

    const responseBody: ErrorResponse = {
      path: request.url,
      timeStamp: new Date(),
      statusCode: status,
      message,
    };

    response.status(status).json(responseBody);
  }
}
