import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: '이름',
    required: true,
    example: '홍길동',
  })
  name: string;
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(100)
  @ApiProperty({
    description: '내용',
    required: true,
    example: '게시글 게시글 게시글',
  })
  contents: string;
}
