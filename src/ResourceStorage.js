var ResourceStorage = (function () {
    function ResourceStorage(_resource, _params) {
        this._resource = _resource;
        this._params = _params;
        this._storage = [];
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
