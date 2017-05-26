"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceStorages_1 = require("./ResourceStorages");
function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = ResourceStorages_1.ResourceStorages.getOrCreate(resource, params);
        target[propertyKey] = storage.result;
    };
}
exports.SelectStorage = SelectStorage;
