import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserDTO } from '../DTO/UserDTO';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
// import path from "path";
// import fs from 'fs';
import key from '../key/key';
import jwt = require('jsonwebtoken');
import bcrypt = require('bcrypt');
@Controller('user')
@ApiTags('用户')
export class UserController {
    // 依赖注入
    constructor(@InjectModel(User)  private readonly UserModel: ModelType<User>) { }
    // 接口
    @Post('login')
    @ApiOperation({summary: '用户注册'})
    async reg(@Body() userInfo: UserDTO) {
        let { password } = userInfo;
        password = bcrypt.hashSync(password, 10);
        // let token = jwt.sign()
        const data = await this.UserModel.create({...userInfo, password});
        return data;
    }
    @Post('reg')
    @ApiOperation({summary: '用户登录'})
    async login(@Body() userInfo ) {
        await this.UserModel.find(userInfo);
        return userInfo;
    }
}
