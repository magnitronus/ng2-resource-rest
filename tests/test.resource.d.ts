import { Resource, ResourceMethod } from '../ngx-resource';
export interface IQueryInput {
    page?: number;
    perPage?: number;
    dateFrom?: string;
    dateTo?: string;
    isRead?: string;
}
export interface INewsShort {
    id: number;
    title: string;
    text: string;
}
export interface INews extends INewsShort {
    image?: string;
    fullText: string;
}
export interface IComment {
    id: number;
    news_id: number;
    text: string;
}
export declare class NewsRes extends Resource {
    query: ResourceMethod<IQueryInput, INews[]>;
    get: ResourceMethod<{
        id: any;
    }, INews>;
    comments: ResourceMethod<{
        id: any;
    }, IComment[]>;
    something: ResourceMethod<{
        id: any;
    }, any>;
    save: ResourceMethod<INews, INews>;
    update: ResourceMethod<INews, INews>;
    remove: ResourceMethod<{
        id: any;
    }, any>;
}
