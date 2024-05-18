import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';
export class UpdateBoardDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: '이름',
    example: '홍길동',
  })
  name?: string;
  @IsOptional()
  @MinLength(10)
  @MaxLength(100)
  @ApiProperty({
    description: '내용',
    example: '게시글 게시글 게시글',
  })
  contents?: string;
};
