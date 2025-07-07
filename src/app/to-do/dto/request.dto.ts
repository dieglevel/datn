import { ApiProperty } from "@nestjs/swagger";

export class CreateToDo_RequestDto {
  @ApiProperty({})
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  isCompleted: boolean;
}
