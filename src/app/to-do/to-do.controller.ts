import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ApiBaseResponse } from "src/common/decorator/api-base-response.decorator";
import { ApiErrorResponses } from "src/common/decorator/api-error-response.decorator";
import { CreateToDo_RequestDto } from "./dto/request.dto";
import { CreateToDo_ResponseDto } from "./dto/response.dto";
import { ToDoService } from "./to-do.service";

@Controller("to-do")
@ApiBearerAuth("access-token")
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  @HttpCode(200)
  @ApiBaseResponse(CreateToDo_ResponseDto)
  @ApiErrorResponses()
  async test(@Body() data: CreateToDo_RequestDto) {
    return await this.toDoService.create(data);
  }
}
