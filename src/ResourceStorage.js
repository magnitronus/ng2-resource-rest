import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        var _this = this;
        this.resource = resource;
        this.queryActionName = 'query';
        this.queryParams = {};
        this.loadImmediately = true;
        this.onResultChange = new EventEmitter();
        this.updateParams(params);
        resource.init.subscribe(function () {
            if (_this.loadImmediately) {
                _this.load();
            }
            _this._result = Object.assign({ $load: _this.load.bind(_this), $resource: _this.resource.instance, $resolved: false }, []);
            _this._resultSubject = new BehaviorSubject(_this._result);
            _this._result.$observable = _this._resultSubject.asObservable();
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
            _this._result = Object.assign(_this._result, result.filter(function (item) { return !!item; }));
            _this._resultSubject.next(_this._result);
        });
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
