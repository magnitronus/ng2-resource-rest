
import {ResourceStorageParamsBase} from "./Interfaces";
import {Resource} from "./Resource";
import {ResourceStorage} from "./ResourceStorage";


export function ResourceStorageParams(storageOptions?: ResourceStorageParamsBase) {

  storageOptions = storageOptions || {};

  if (storageOptions.action === undefined) {
    storageOptions.action = 'query';
  }

  if (storageOptions.actionParams === undefined) {
    storageOptions.actionParams = {};
  }

  return function (target: Resource, propertyKey: string) {
    (<any>target)[propertyKey] = new ResourceStorage(target, storageOptions);
    (<any>target)._storage = (<any>target)[propertyKey];
  };

}
