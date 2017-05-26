import { Type } from '@angular/core';
import { Resource } from './Resource';
import { ResourceStorages } from './ResourceStorages';
import { ResourceStorageParams } from "./Interfaces";

export function SelectStorage(resource: Type<Resource>, params?: ResourceStorageParams) {

  return function (target: any, propertyKey: string) {
    const storage = ResourceStorages.getOrCreate(resource, params);

    (<any>target)[propertyKey] = storage.result;
  };

}
