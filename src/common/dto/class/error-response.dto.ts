// common/dto/error-response.dto.ts
import { ApiProperty } from "@nestjs/swagger";

export class ErrorResponseDto {
  @ApiProperty()
  path: string;

  @ApiProperty()
  timeStamp: Date;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}
