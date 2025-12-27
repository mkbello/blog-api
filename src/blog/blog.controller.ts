import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Post()
    create(@Body() body: { title: string; content: string }) {
        return this.blogService.create(body.title, body.content);
    }

    @Get()
    findAll() {
        return this.blogService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.blogService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { content: string }) {
        return this.blogService.update(id, body.content);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.blogService.delete(id);
    }
}
