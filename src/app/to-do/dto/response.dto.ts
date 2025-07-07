import { ApiProperty } from "@nestjs/swagger";

export class CreateToDo_ResponseDto {
  @ApiProperty({})
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  isCompleted: boolean;
}
