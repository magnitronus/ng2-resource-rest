"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceStorage_1 = require("./ResourceStorage");
var ResourceStorages = (function () {
    function ResourceStorages() {
    }
    ResourceStorages.create = function (resource, params) {
        this.storages[resource.name] = new ResourceStorage_1.ResourceStorage(resource.instance, params);
        return this.storages[resource.name];
    };
    ResourceStorages.get = function (resource, params) {
        var storage = this.storages[resource.name];
        storage.updateParams(params);
        return storage;
    };
    ResourceStorages.getOrCreate = function (resource, params) {
        var storage = ResourceStorages.get(resource, params);
        return !!storage ? storage : ResourceStorages.create(resource, params);
    };
    return ResourceStorages;
}());
ResourceStorages.storages = {};
exports.ResourceStorages = ResourceStorages;
