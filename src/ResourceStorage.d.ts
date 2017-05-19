import { ResourceStorageParamsBase } from "./Interfaces";
import { Resource } from "./Resource";
export declare class ResourceStorage<ModelType> {
    private _resource;
    private _params;
    private _storage;
    private _initialized;
    static instances: {
        [key: string]: ResourceStorage<any>;
    };
    static stores: {
        [key: string]: {
            target: any;
            propertyKey: string;
        }[];
    };
    constructor(_resource: Resource, _params: ResourceStorageParamsBase);
    readonly data: ModelType[];
}
