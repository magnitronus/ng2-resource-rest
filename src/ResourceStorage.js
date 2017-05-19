var ResourceStorage = (function () {
    function ResourceStorage(_resource, _params) {
        var _this = this;
        this._resource = _resource;
        this._params = _params;
        this._storage = [];
        ResourceStorage.instances[_resource.constructor.name] = this;
        var resourceStores = ResourceStorage.stores[_resource.constructor.name] || [];
        resourceStores.forEach(function (store) { return store.target[store.propertyKey] = _this.data; });
    }
    Object.defineProperty(ResourceStorage.prototype, "data", {
        get: function () {
            var _this = this;
            if (!this._initialized) {
                this._initialized = true;
                var action = this._resource[this._params.action];
                action(this._params.actionParams)
                    .bind(this._resource)
                    .subscribe(function (models) { return _this._storage = models; });
            }
            return this._storage;
        },
        enumerable: true,
        configurable: true
    });
    return ResourceStorage;
}());
export { ResourceStorage };
ResourceStorage.instances = {};
ResourceStorage.stores = {};
