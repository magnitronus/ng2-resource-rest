import { BehaviorSubject } from "rxjs/BehaviorSubject";
var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        var _this = this;
        this.resource = resource;
        this.queryParams = {};
        this.loadImmediately = true;
        this.resultData = [];
        this.updateParams(params);
        this.result = Object.assign({ $load: this.load.bind(this), $resolved: false }, this.resultData);
        this.result[Symbol.iterator] = function () {
            var pointer = 0;
            var items = _this.resultData;
            return {
                next: function () {
                    if (pointer < items.length) {
                        return {
                            done: false,
                            value: items[pointer++]
                        };
                    }
                    else {
                        return {
                            done: true,
                            value: null
                        };
                    }
                }
            };
        };
        this._resultSubject = new BehaviorSubject(this.result);
        this.result.$observable = this._resultSubject.asObservable();
        resource.init.subscribe(function () {
            _this.resource.instance.storage = _this;
            if (_this.loadImmediately) {
                _this.load();
            }
            _this.result.$resource = _this.resource.instance;
        });
    }
    ResourceStorage.prototype.updateParams = function (params) {
        if (params === void 0) { params = {}; }
        this.queryParams = params.queryParams || {};
        this.loadImmediately = params.loadImmediately === false ? false : true;
    };
    ResourceStorage.prototype.load = function (args) {
        var _this = this;
        var qp = !!args ? args : this.queryParams;
        this.queryActionName = this.resource.instance.storageLoadRA;
        var action = this.resource.instance[this.queryActionName].bind(this.resource.instance);
        action(qp).$observable.subscribe(function (result) {
            _this.resultData = result.filter(function (item) { return !!item; });
            _this.forceRefresh();
        });
    };
    ResourceStorage.prototype.forceRefresh = function () {
        Object.assign(this.result, this.resultData);
        this.result.$resolved = true;
        this._resultSubject.next(this.result);
    };
    return ResourceStorage;
}());
export { ResourceStorage };
