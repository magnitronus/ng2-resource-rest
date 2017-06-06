import { BehaviorSubject } from "rxjs/BehaviorSubject";
var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        var _this = this;
        this.resource = resource;
        this.queryActionName = 'query';
        this.queryParams = {};
        this.loadImmediately = true;
        this._resultData = [];
        this.updateParams(params);
        this.result = Object.assign({ $load: this.load.bind(this), $resolved: false }, this._resultData);
        this.result[Symbol.iterator] = function () {
            var pointer = 0;
            var items = _this._resultData;
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
            if (_this.loadImmediately) {
                _this.load();
            }
            _this.result.$resource = _this.resource.instance;
        });
    }
    ResourceStorage.prototype.updateParams = function (params) {
        if (params === void 0) { params = {}; }
        this.queryActionName = params.queryActionName || 'query';
        this.queryParams = params.queryParams || {};
        this.loadImmediately = params.loadImmediately === false ? false : true;
    };
    ResourceStorage.prototype.load = function (args) {
        var _this = this;
        var qp = !!args ? args : this.queryParams;
        var action = this.resource.instance[this.queryActionName].bind(this.resource.instance);
        action(qp).$observable.subscribe(function (result) {
            _this._resultData = result.filter(function (item) { return !!item; });
            Object.assign(_this.result, _this._resultData);
            _this.result.$resolved = true;
            _this._resultSubject.next(_this.result);
        });
    };
    return ResourceStorage;
}());
export { ResourceStorage };
