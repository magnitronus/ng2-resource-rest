import { ResourceStorages } from './ResourceStorages';
export function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = ResourceStorages.getOrCreate(resource, params);
        target[propertyKey] = storage.result;
        storage.onResultChange.subscribe(function (_result) { return target[propertyKey] = _result; });
    };
}
