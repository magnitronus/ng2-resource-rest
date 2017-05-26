import { ResourceStorage } from './ResourceStorage';
import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorageParams } from './Interfaces';
export declare class ResourceStorages {
    static storages: {
        [resourceName: string]: ResourceStorage;
    };
    static create(resource: Type<Resource>, params?: ResourceStorageParams): ResourceStorage;
    static get(resource: Type<Resource>, params?: ResourceStorageParams): ResourceStorage;
    static getOrCreate(resource: Type<Resource>, params?: ResourceStorageParams): ResourceStorage;
}
