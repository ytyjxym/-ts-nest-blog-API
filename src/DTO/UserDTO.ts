import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class UserDTO {
    @ApiProperty({description: '用户名'})
    @IsNotEmpty({message: '用户名或密码错误'})
    username: string;
    @ApiProperty({description: '密码'})
    @IsNotEmpty({message: '用户名或密码错误'})
    password: string;
    @ApiProperty({description: '昵称', example: 'yourDaddy'})
    nickname: string;
    @ApiProperty({description: '图标路径', example: 'yourDaddy'})
    icon: string;
}
