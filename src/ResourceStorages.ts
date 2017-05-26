import { ResourceStorage } from './ResourceStorage';
import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorageParams } from './Interfaces';


export class ResourceStorages {

  static storages: {[resourceName: string]: ResourceStorage} = {};

  static create(resource: Type<Resource>, params?: ResourceStorageParams): ResourceStorage {
    this.storages[(<any>resource).name] = new ResourceStorage((<any>resource).instance, params);
    return this.storages[(<any>resource).name];
  }

  static get(resource: Type<Resource>, params?: ResourceStorageParams): ResourceStorage {
    const storage = this.storages[(<any>resource).name];
    if (!!storage) {
      storage.updateParams(params);
    }
    return storage;
  }

  static getOrCreate(resource: Type<Resource>, params?: ResourceStorageParams): ResourceStorage {
    const storage = ResourceStorages.get(resource, params);
    return !!storage ? storage : ResourceStorages.create(resource, params);
  }
}
