import { Injectable } from "@nestjs/common";
import { CreateToDo_RequestDto } from "./dto/request.dto";
import { CreateToDo_ResponseDto } from "./dto/response.dto";

@Injectable()
export class ToDoService {
  constructor() {}

  async create(data: CreateToDo_RequestDto): Promise<CreateToDo_ResponseDto> {
    const response: CreateToDo_ResponseDto = {
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
    };
    return response;
  }
}
