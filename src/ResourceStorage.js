var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        this.resource = resource;
        this.queryActionName = 'query';
        this.queryParams = {};
        this.loadImmediately = true;
        this._data = {};
        this.updateParams(params);
        if (this.loadImmediately) {
            this.load();
        }
    }
    ResourceStorage.prototype.updateParams = function (params) {
        if (params === void 0) { params = {}; }
        this.queryActionName = params.queryActionName || 'query';
        this.queryParams = params.queryParams || {};
        this.loadImmediately = params.loadImmediately === false ? false : true;
    };
    ResourceStorage.prototype.load = function (args) {
        var qp = !!args ? args : this.queryParams;
        var action = this.resource.instance[this.queryActionName].bind(this.resource.instance);
        this._data = action(qp);
    };
    Object.defineProperty(ResourceStorage.prototype, "result", {
        get: function () {
            return Object.assign({}, this._data, { $load: this.load.bind(this) });
        },
        enumerable: true,
        configurable: true
    });
    return ResourceStorage;
}());
export { ResourceStorage };
