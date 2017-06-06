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
        var qp = !!args ? args : this.queryParams;
        var action = this.resource.instance.storageLoad;
        if (!!action) {
            action.bind(this.resource.instance)(qp);
        }
        else {
            throw "Storage LOAD action is not defined";
        }
    };
    ResourceStorage.prototype.forceRefresh = function () {
        Object.assign(this.result, this.resultData);
        this.result.$resolved = true;
        this._resultSubject.next(this.result);
    };
    return ResourceStorage;
}());
export { ResourceStorage };
