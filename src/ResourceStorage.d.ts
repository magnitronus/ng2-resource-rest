import { ResourceStorageParams } from "./Interfaces";
import { Resource } from "./Resource";
export declare class ResourceStorage {
    private resource;
    private queryActionName;
    private queryParams;
    private loadImmediately;
    private _data;
    constructor(resource: Resource, params: ResourceStorageParams);
    updateParams(params?: ResourceStorageParams): void;
    load(args?: any): void;
    readonly result: any;
}
