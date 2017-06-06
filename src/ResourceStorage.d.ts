import { ResourceStorageParams, SelectedStorage } from "./Interfaces";
import { Resource } from "./Resource";
import { EventEmitter, Type } from "@angular/core";
export declare class ResourceStorage {
    private resource;
    private queryActionName;
    private queryParams;
    private loadImmediately;
    onResultChange: EventEmitter<SelectedStorage<any>>;
    private _result;
    private _resultSubject;
    constructor(resource: Type<Resource>, params: ResourceStorageParams);
    updateParams(params?: ResourceStorageParams): void;
    load(args?: any): void;
    result: any;
}
