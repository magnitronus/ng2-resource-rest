import { ResourceStorageParamsBase } from "./Interfaces";
import { Resource } from "./Resource";
export declare class Stores {
    private _stores;
    private _storage;
    constructor(store?: {
        target: any;
        propertyKey: string;
    });
    push(val: {
        target: any;
        propertyKey: string;
    }): void;
    setData(storage: ResourceStorage<any>): void;
    readonly stores: {
        target: any;
        propertyKey: string;
    }[];
}
export declare class StoresHash {
    private _storesHash;
    addStore(resourceName: string, store?: {
        target: any;
        propertyKey: string;
    }): Stores;
}
export declare class ResourceStorage<ModelType> {
    private _resource;
    private _params;
    private _storage;
    private _initialized;
    static instances: {
        [key: string]: ResourceStorage<any>;
    };
    static stores: StoresHash;
    constructor(_resource: Resource, _params: ResourceStorageParamsBase);
    readonly data: ModelType[];
}
