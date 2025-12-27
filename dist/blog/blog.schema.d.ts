import { Document } from 'mongoose';
export type BlogDocument = Blog & Document;
export declare class Blog {
    title: string;
    content: string;
    createdAt: Date;
}
export declare const BlogSchema: import("mongoose").Schema<Blog, import("mongoose").Model<Blog, any, any, any, Document<unknown, any, Blog, any, import("mongoose").DefaultSchemaOptions> & Blog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Blog>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Blog, Document<unknown, {}, Blog, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Blog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Blog, Document<unknown, {}, Blog, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, Blog, Document<unknown, {}, Blog, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Blog, Document<unknown, {}, Blog, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Blog>;
