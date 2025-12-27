import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: Model<BlogDocument>);
    create(title: string, content: string): Promise<import("mongoose").Document<unknown, {}, BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, content: string): Promise<(import("mongoose").Document<unknown, {}, BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}
