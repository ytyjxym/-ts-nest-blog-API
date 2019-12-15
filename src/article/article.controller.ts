import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ArticleDTO } from '../DTO/ArticleDTO';
import { InjectModel } from 'nestjs-typegoose';
import { Article } from './article.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
@Controller('posts')
@ApiTags('帖子')
export class ArticleController {
    // 依赖注入
    constructor(@InjectModel(Article)  private readonly ArticleModel: ModelType<Article>) { }
    // 接口
    @Get()
    @ApiOperation({summary: '帖子列表'})
    async index() {
        let item = await this.ArticleModel.find();
        if(item.length > 0) return item;
        return {
            code: '404',
            message: '数据未找到'
        }
    }
    @Post()
    @ApiOperation({summary: '创建帖子'})
    async create(@Body() createPostDTO: ArticleDTO) {
        let data = await this.ArticleModel.create(createPostDTO);
        if ( !!data._id ) return { 
            code: 200,
            message: '帖子创建成功',
            data,
         };
        return {
            code: '404',
            message: '帖子创建失败'
        }
    }
    @Get(':id')
    @ApiOperation({summary: '获取详情'})
    async detail(@Param('id') id: string) {
        let data = await this.ArticleModel.findById(id);
        if ( !!data._id ) return {
            code: 200,
            data,
            message: '获取帖子详情成功'
        };
        return { 
            code: 400,
            message: '请求数据有误'
         };

    }
    @Put(':id')
    @ApiOperation({summary: '编辑帖子'})
    async update(@Param('id') id: string, @Body() updatePostDTO: ArticleDTO) {
        let data = await this.ArticleModel.findByIdAndUpdate(id, updatePostDTO);
        if ( !!data._id ) return {
            code: 200,
            data,
            message: '编辑帖子成功'
        };
        return { 
            code: 400,
            message: '请求数据有误'
         };
    }
    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    async del(@Param('id') id: string) {
        let data = await this.ArticleModel.findByIdAndDelete(id);
        if ( !!data._id ) return {
            code: 200,
            data,
            message: '删除帖子成功'
        };
        return { 
            code: 400,
            message: '请求数据有误'
         };
    }
}
