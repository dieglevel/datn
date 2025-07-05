import { applyDecorators } from "@nestjs/common";
import { ApiResponse, ApiExtraModels, getSchemaPath } from "@nestjs/swagger";
import { ErrorResponseDto } from "../dto/class/error-response.dto";

interface ErrorResponseOption {
  status: number;
  description: string;
}

export function ApiErrorResponses(
  responses: ErrorResponseOption[] = [],
): ReturnType<typeof applyDecorators> {
  const default500 = {
    status: 500,
    description: "Internal Server Error",
  };

  const allResponses = [...responses, default500];

  return applyDecorators(
    ApiExtraModels(ErrorResponseDto),
    ...allResponses.map((res) =>
      ApiResponse({
        status: res.status,
        description: res.description,
        schema: { $ref: getSchemaPath(ErrorResponseDto) },
      }),
    ),
  );
}
