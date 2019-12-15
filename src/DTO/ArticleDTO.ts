import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class ArticleDTO {
    @ApiProperty({description: '帖子标题', example: '标题'})
    @IsNotEmpty({ message: '请填写标题' })
    title: string;
    @ApiProperty({description: '帖子内容', example: '内容'})
    content: string;
    @ApiProperty({description: '帖子时间', example: Date.now()})
    time: number;
    @ApiProperty({description: '帖子作者', example: '作者'})
    auth: string;
}
