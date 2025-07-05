import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
} from "@nestjs/common";
import { ToDoService } from "./to-do.service";
import { CreateToDoDto } from "./dto/create-to-do.dto";
import { UpdateToDoDto } from "./dto/update-to-do.dto";
import { ApiErrorResponses } from "src/common/decorator/api-error-response.decorator";
import { ApiBaseResponse } from "src/common/decorator/api-base-response.decorator";

@Controller("to-do")
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  @ApiBaseResponse(CreateToDoDto)
  @ApiErrorResponses()
  create(@Body() createToDoDto: CreateToDoDto) {
    throw new ForbiddenException({
      message: "You are not allowed to create a new ToDo item.",
    });
  }

  @Get()
  findAll() {
    return this.toDoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.toDoService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return this.toDoService.update(+id, updateToDoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.toDoService.remove(+id);
  }
}
