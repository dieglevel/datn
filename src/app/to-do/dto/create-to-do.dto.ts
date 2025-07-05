import { ApiProperty } from "@nestjs/swagger";

export class CreateToDoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  isCompleted: boolean;
}
