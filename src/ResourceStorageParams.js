import { ResourceStorage } from "./ResourceStorage";
export function ResourceStorageParams(storageOptions) {
    storageOptions = storageOptions || {};
    if (storageOptions.action === undefined) {
        storageOptions.action = 'query';
    }
    if (storageOptions.actionParams === undefined) {
        storageOptions.actionParams = {};
    }
    return function (target, propertyKey) {
        target[propertyKey] = new ResourceStorage(target, storageOptions);
        target._storage = target[propertyKey];
    };
}
