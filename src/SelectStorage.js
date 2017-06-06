export function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = resource.getStorage(params);
        target[propertyKey] = storage.result;
        storage._resultSubject.subscribe(function (result) {
            target[propertyKey] = result;
        });
    };
}
