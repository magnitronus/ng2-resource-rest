import { ResourceStorageParams, SelectedStorage } from "./Interfaces";
import { Resource } from "./Resource";
import { Type } from "@angular/core";
export declare class ResourceStorage {
    private resource;
    private queryActionName;
    private queryParams;
    private loadImmediately;
    private _resultSubject;
    private _resultData;
    result: SelectedStorage<any>;
    constructor(resource: Type<Resource>, params: ResourceStorageParams);
    updateParams(params?: ResourceStorageParams): void;
    load(args?: any): void;
}
