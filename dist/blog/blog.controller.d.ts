import { BlogService } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    create(body: {
        title: string;
        content: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./blog.schema").BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./blog.schema").Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./blog.schema").BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./blog.schema").Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./blog.schema").BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./blog.schema").Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, body: {
        content: string;
    }): Promise<(import("mongoose").Document<unknown, {}, import("./blog.schema").BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./blog.schema").Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./blog.schema").BlogDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./blog.schema").Blog & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}
