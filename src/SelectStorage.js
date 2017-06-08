"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = resource.getStorage(params);
        storage._resultSubject.subscribe(function (result) {
            target[propertyKey] = result;
        });
    };
}
exports.SelectStorage = SelectStorage;
