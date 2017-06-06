export function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = resource.getStorage(params);
        target[propertyKey] = storage.result;
    };
}
