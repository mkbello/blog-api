import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) { }

    create(title: string, content: string) {
        const blog = new this.blogModel({ title, content });
        return blog.save();
    }

    findAll() {
        return this.blogModel.find().exec();
    }

    findOne(id: string) {
        return this.blogModel.findById(id).exec();
    }

    update(id: string, content: string) {
        return this.blogModel.findByIdAndUpdate(id, { content }, { new: true }).exec();
    }

    delete(id: string) {
        return this.blogModel.findByIdAndDelete(id).exec();
    }
}
