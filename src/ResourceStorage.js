import { EventEmitter } from "@angular/core";
var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        var _this = this;
        this.resource = resource;
        this.queryActionName = 'query';
        this.queryParams = {};
        this.loadImmediately = true;
        this.onResultChange = new EventEmitter();
        this.updateParams(params);
        this.result = { $load: this.load.bind(this) };
        if (this.loadImmediately) {
            resource.init.subscribe(function () {
                _this.load();
            });
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
        this.result = Object.assign({ $load: this.load.bind(this) }, action(qp));
    };
    Object.defineProperty(ResourceStorage.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (val) {
            this._result = val;
            this.onResultChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    return ResourceStorage;
}());
export { ResourceStorage };
