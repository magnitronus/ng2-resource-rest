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
        this.result = Object.assign({ $load: this.load.bind(this), $resolved: false }, []);
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
            Object.assign(_this.result, result.filter(function (item) { return !!item; }));
            _this._resultSubject.next(_this.result);
        });
    };
    return ResourceStorage;
}());
export { ResourceStorage };
