(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "@angular/common", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["ngx-resource"] = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else
		root["ngx-resource"] = factory(root["@angular/http"], root["@angular/core"], root["@angular/common"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });

var Resource = (function () {
    function Resource(http, injector) {
        this.http = http;
        this.injector = injector;
        this._url = null;
        this._path = null;
        this._headers = null;
        this._params = null;
        this._data = null;
    }
    /**
     * Get main url of the resource
     * @returns {string|Promise<string>}
     */
    Resource.prototype.getUrl = function (methodOptions) {
        return this._url || this._getUrl(methodOptions) || __WEBPACK_IMPORTED_MODULE_0__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].url || '';
    };
    /**
     * Set resource url
     * @param url
     */
    Resource.prototype.setUrl = function (url) {
        this._url = url;
    };
    /**
     * Get path of the resource
     * @returns {string|Promise<string>}
     */
    Resource.prototype.getPath = function (methodOptions) {
        return this._path || this._getPath(methodOptions) || __WEBPACK_IMPORTED_MODULE_0__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].path || '';
    };
    /**
     * Set resource path
     * @param path
     */
    Resource.prototype.setPath = function (path) {
        this._path = path;
    };
    /**
     * Get headers
     * @returns {any|Promise<any>}
     */
    Resource.prototype.getHeaders = function (methodOptions) {
        return this._headers || this._getHeaders(methodOptions) || __WEBPACK_IMPORTED_MODULE_0__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].headers || {};
    };
    /**
     * Set resource headers
     * @param headers
     */
    Resource.prototype.setHeaders = function (headers) {
        this._headers = headers;
    };
    /**
     * Get default params
     * @returns {any|Promise<any>|{}}
     */
    Resource.prototype.getParams = function (methodOptions) {
        return this._params || this._getParams(methodOptions) || __WEBPACK_IMPORTED_MODULE_0__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].params || {};
    };
    /**
     * Set default resource params
     * @param params
     */
    Resource.prototype.setParams = function (params) {
        this._params = params;
    };
    /**
     * Get default data
     * @returns {any|Promise<any>|{}}
     */
    Resource.prototype.getData = function (methodOptions) {
        return this._data || this._getData(methodOptions) || __WEBPACK_IMPORTED_MODULE_0__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].data || {};
    };
    /**
     * Set default resource params
     * @param data
     */
    Resource.prototype.setData = function (data) {
        this._data = data;
    };
    /**
     * That is called before executing request
     * @param req
     */
    Resource.prototype.requestInterceptor = function (req, methodOptions) {
        return req;
    };
    /**
     * Request observable interceptor
     * @param observable
     * @returns {Observable<any>}
     */
    Resource.prototype.responseInterceptor = function (observable, req, methodOptions) {
        return observable.map(function (res) { return res._body ? res.json() : null; });
    };
    Resource.prototype.removeTrailingSlash = function () {
        return true;
    };
    Resource.prototype.initResultObject = function () {
        return {};
    };
    Resource.prototype.map = function (item) {
        return item;
    };
    Resource.prototype.filter = function (item) {
        return true;
    };
    Resource.prototype.getResourceOptions = function () {
        return null;
    };
    Resource.prototype.createModel = function () {
        var ret = this.initResultObject();
        ret.$resource = this;
        return ret;
    };
    Resource.prototype._request = function (req, methodOptions) {
        if (methodOptions === void 0) { methodOptions = {}; }
        var requestObservable = this.http.request(req);
        // noinspection TypeScriptValidateTypes
        return methodOptions.responseInterceptor ?
            methodOptions.responseInterceptor.bind(this)(requestObservable, req, methodOptions) :
            this.responseInterceptor(requestObservable, req, methodOptions);
    };
    Resource.prototype._getUrl = function (methodOptions) {
        return null;
    };
    Resource.prototype._getPath = function (methodOptions) {
        return null;
    };
    Resource.prototype._getHeaders = function (methodOptions) {
        return null;
    };
    Resource.prototype._getParams = function (methodOptions) {
        return null;
    };
    Resource.prototype._getData = function (methodOptions) {
        return null;
    };
    return Resource;
}());

Resource.instance = undefined;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceAction;
/* harmony export (immutable) */ __webpack_exports__["b"] = setDataToObject;
/* harmony export (immutable) */ __webpack_exports__["c"] = appendSearchParams;



function ResourceAction(methodOptions) {
    methodOptions = methodOptions || {};
    if (methodOptions.method === undefined) {
        methodOptions.method = __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get;
    }
    return function (target, propertyKey) {
        target[propertyKey] = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var data = args.length ? args[0] : null;
            var params = args.length > 1 ? args[1] : null;
            var callback = args.length > 2 ? args[2] : null;
            if (typeof data === 'function') {
                callback = data;
                data = null;
            }
            else if (typeof params === 'function') {
                callback = params;
                params = null;
            }
            var resourceOptions = this.getResourceOptions();
            var isGetRequest = methodOptions.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get;
            var ret = null;
            var map = methodOptions.map ? methodOptions.map.bind(this) : this.map;
            var filter = methodOptions.filter ? methodOptions.filter : this.filter;
            var initObject = methodOptions.initResultObject ?
                methodOptions.initResultObject : this.initResultObject;
            if (methodOptions.isLazy) {
                ret = {};
            }
            else {
                if (methodOptions.isArray) {
                    ret = [];
                }
                else {
                    if (data && data.$resource === this) {
                        // Setting data to ret
                        ret = data;
                        data = data.toJSON ? data.toJSON() : toJSON(data);
                    }
                    else {
                        ret = initObject.bind(this)();
                    }
                }
            }
            var mainDeferredSubscriber = null;
            var mainObservable = null;
            ret.$resolved = false;
            ret.$observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (subscriber) {
                mainDeferredSubscriber = subscriber;
            }).flatMap(function () { return mainObservable; });
            ret.$abortRequest = function () {
                ret.$resolved = true;
            };
            ret.$resource = this;
            function releaseMainDeferredSubscriber() {
                if (mainDeferredSubscriber) {
                    mainDeferredSubscriber.next();
                    mainDeferredSubscriber.complete();
                    mainDeferredSubscriber = null;
                }
            }
            if (!methodOptions.isLazy) {
                ret.$observable = ret.$observable.publish();
                ret.$observable.connect();
            }
            Promise.all([
                Promise.resolve(methodOptions.url || this.getUrl(methodOptions)),
                Promise.resolve(methodOptions.path || this.getPath(methodOptions)),
                Promise.resolve(methodOptions.headers || this.getHeaders(methodOptions)),
                Promise.resolve(methodOptions.params || this.getParams(methodOptions)),
                Promise.resolve(methodOptions.data || this.getData(methodOptions))
            ])
                .then(function (dataAll) {
                if (ret.$resolved) {
                    mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                        observer.next(null);
                    });
                    releaseMainDeferredSubscriber();
                }
                var url = dataAll[0] + dataAll[1];
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"](dataAll[2]);
                var defPathParams = dataAll[3];
                var usedPathParams = {};
                var usedPathParamsValues = {};
                if (!Array.isArray(data) || params) {
                    if (!Array.isArray(data)) {
                        data = Object.assign({}, dataAll[4], data);
                    }
                    var pathParams = url.match(/{([^}]*)}/g) || [];
                    var _loop_1 = function (i) {
                        var pathParam = pathParams[i];
                        var pathKey = pathParam.substr(1, pathParam.length - 2);
                        var isMandatory = pathKey[0] === '!';
                        if (isMandatory) {
                            pathKey = pathKey.substr(1);
                        }
                        var isGetOnly = pathKey[0] === ':';
                        if (isGetOnly) {
                            pathKey = pathKey.substr(1);
                        }
                        var value = getValueForPath(pathKey, defPathParams, params || data, usedPathParams);
                        if (isGetOnly && !params) {
                            delete data[pathKey];
                        }
                        if (isNullOrUndefined(value)) {
                            if (isMandatory) {
                                var consoleMsg_1 = "Mandatory " + pathParam + " path parameter is missing";
                                mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                                    observer.error(new Error(consoleMsg_1));
                                });
                                console.warn(consoleMsg_1);
                                releaseMainDeferredSubscriber();
                                return { value: void 0 };
                            }
                            url = url.substr(0, url.indexOf(pathParam));
                            return "break";
                        }
                        else {
                            usedPathParamsValues[pathKey] = value;
                        }
                        ;
                        // Replacing in the url
                        url = url.replace(pathParam, value);
                    };
                    for (var i = 0; i < pathParams.length; i++) {
                        var state_1 = _loop_1(i);
                        if (typeof state_1 === "object")
                            return state_1.value;
                        if (state_1 === "break")
                            break;
                    }
                }
                // Removing double slashed from final url
                url = url.replace(/\/\/+/g, '/');
                if (url.startsWith('http')) {
                    url = url.replace(':/', '://');
                }
                // Remove trailing slash
                if (typeof methodOptions.removeTrailingSlash === 'undefined') {
                    methodOptions.removeTrailingSlash = _this.removeTrailingSlash();
                }
                if (methodOptions.removeTrailingSlash) {
                    while (url[url.length - 1] === '/') {
                        url = url.substr(0, url.length - 1);
                    }
                }
                // Remove mapped params
                for (var key in defPathParams) {
                    if (defPathParams[key][0] === '@') {
                        delete defPathParams[key];
                    }
                }
                // Default search params or data
                var body = null;
                var searchParams;
                if (isGetRequest) {
                    // GET
                    searchParams = Object.assign({}, defPathParams, data);
                }
                else {
                    // NON GET
                    if (data) {
                        var _body = {};
                        if (methodOptions.rootNode) {
                            _body["" + methodOptions.rootNode] = data;
                        }
                        else {
                            _body = data;
                        }
                        body = JSON.stringify(_body);
                    }
                    searchParams = defPathParams;
                }
                // Setting search params
                var search = !!methodOptions.queryEncoder ? new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]('', new methodOptions.queryEncoder()) : new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
                if (!params) {
                    for (var key in searchParams) {
                        if (searchParams.hasOwnProperty(key) && !usedPathParams[key]) {
                            var value = searchParams[key];
                            appendSearchParams(search, key, value);
                        }
                    }
                }
                // Adding TS if needed
                var tsName = methodOptions.addTimestamp || resourceOptions.addTimestamp;
                if (tsName) {
                    if (tsName === true) {
                        tsName = 'ts';
                    }
                    search.append(tsName, '' + new Date().getTime());
                }
                // Removing Content-Type header if no body
                if (!body) {
                    headers.delete('content-type');
                }
                // Creating request options
                var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({
                    method: methodOptions.method,
                    headers: headers,
                    body: body,
                    url: url,
                    search: search,
                    withCredentials: methodOptions.withCredentials || resourceOptions.withCredentials
                });
                // Creating request object
                var req = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Request"](requestOptions);
                req = methodOptions.requestInterceptor ?
                    methodOptions.requestInterceptor(req, methodOptions) :
                    _this.requestInterceptor(req, methodOptions);
                if (!req) {
                    mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                        observer.error(new Error('Request is null'));
                    });
                    console.warn('Request is null');
                    releaseMainDeferredSubscriber();
                    return;
                }
                var requestObservable;
                if (__WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].mockResponses && resourceOptions.mock !== false && methodOptions.mock !== false && (!!methodOptions.mockCollection || !!resourceOptions.mockCollection)) {
                    var mockCollection = !!methodOptions.mockCollection ? methodOptions.mockCollection : { collection: resourceOptions.mockCollection };
                    var resp = null;
                    if (typeof mockCollection === 'function') {
                        resp = mockCollection(propertyKey, usedPathParamsValues, JSON.parse(body), methodOptions.method);
                    }
                    else {
                        resp = getMockedResponse(mockCollection, usedPathParamsValues, JSON.parse(body), methodOptions.method);
                    }
                    resp = new FakeResponse(resp);
                    requestObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from([resp]);
                    // noinspection TypeScriptValidateTypes
                    requestObservable = methodOptions.responseInterceptor ?
                        methodOptions.responseInterceptor.bind(_this)(requestObservable, req, methodOptions) :
                        _this.responseInterceptor(requestObservable, req, methodOptions);
                }
                else {
                    // Doing the request
                    requestObservable = _this._request(req, methodOptions);
                }
                if (methodOptions.isLazy) {
                    mainObservable = requestObservable;
                }
                else {
                    mainObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (subscriber) {
                        var reqSubscr = requestObservable.subscribe(function (resp) {
                            if (resp !== null) {
                                if (methodOptions.isArray) {
                                    // Expecting array
                                    if (!Array.isArray(resp)) {
                                        console.error('Returned data should be an array. Received', resp);
                                    }
                                    else {
                                        ret.push.apply(ret, resp
                                            .filter(filter)
                                            .map(map)
                                            .map(function (respItem) {
                                            respItem.$resource = _this;
                                            return setDataToObject(initObject.bind(respItem.$resource)(), respItem);
                                        }));
                                    }
                                }
                                else {
                                    // Expecting object
                                    if (Array.isArray(resp)) {
                                        console.error('Returned data should be an object. Received', resp);
                                    }
                                    else {
                                        if (filter(resp)) {
                                            setDataToObject(ret, map(resp));
                                        }
                                    }
                                }
                            }
                            ret.$resolved = true;
                            subscriber.next(ret);
                        }, function (err) { return subscriber.error(err); }, function () {
                            ret.$resolved = true;
                            subscriber.complete();
                            if (callback) {
                                callback(ret);
                            }
                        });
                        ret.$abortRequest = function () {
                            if (ret.$resolved) {
                                return;
                            }
                            reqSubscr.unsubscribe();
                            ret.$resolved = true;
                        };
                    });
                }
                releaseMainDeferredSubscriber();
            });
            return ret;
        };
    };
}
function setDataToObject(ret, resp) {
    if (ret.$setData) {
        ret.$setData(resp);
    }
    else {
        Object.assign(ret, resp);
    }
    return ret;
}
function appendSearchParams(search, key, value) {
    /// Convert dates to ISO format string
    if (value instanceof Date) {
        search.append(key, value.toISOString());
        return;
    }
    if (typeof value === 'object') {
        switch (__WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].getParamsMappingType) {
            case __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["a" /* TGetParamsMappingType */].Plain:
                if (Array.isArray(value)) {
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var arr_value = value_1[_i];
                        search.append(key, arr_value);
                    }
                }
                else {
                    if (value && typeof value === 'object') {
                        /// Convert dates to ISO format string
                        if (value instanceof Date) {
                            value = value.toISOString();
                        }
                        else {
                            value = JSON.stringify(value);
                        }
                    }
                    search.append(key, value);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["a" /* TGetParamsMappingType */].Bracket:
                /// Convert object and arrays to query params
                for (var k in value) {
                    if (value.hasOwnProperty(k)) {
                        appendSearchParams(search, key + '[' + k + ']', value[k]);
                    }
                }
                break;
        }
        return;
    }
    search.append(key, value);
}
function getValueForPath(key, params, data, usedPathParams) {
    if (!isNullOrUndefined(data[key]) && typeof data[key] !== 'object') {
        usedPathParams[key] = true;
        return data[key];
    }
    if (isNullOrUndefined(params[key])) {
        return null;
    }
    if (params[key][0] === '@') {
        return getValueForPath(params[key].substr(1), params, data, usedPathParams);
    }
    usedPathParams[key] = true;
    return params[key];
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function toJSON(obj) {
    var retObj = {};
    for (var propName in obj) {
        if (!(obj[propName] instanceof Function) && !(propName.charAt(0) === '$')) {
            retObj[propName] = obj[propName];
        }
    }
    return retObj;
}
var FakeResponse = (function () {
    function FakeResponse(resp) {
        var _this = this;
        this.json = function () { return _this._resp; };
        this._resp = resp;
    }
    Object.defineProperty(FakeResponse.prototype, "_body", {
        get: function () {
            return JSON.stringify(this._resp);
        },
        enumerable: true,
        configurable: true
    });
    return FakeResponse;
}());
function getMockedResponse(collection, params, data, requestMethod) {
    if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
        if (Object.keys(params).length === 0) {
            return collection.collection;
        }
        else {
            if (!collection.lookupParams || Object.keys(collection.lookupParams).length === 0) {
                var result = collection.collection;
                var _loop_2 = function (key) {
                    if (params.hasOwnProperty(key)) {
                        result = result.filter(function (item) { return item[key] === params[key]; });
                    }
                };
                for (var key in params) {
                    _loop_2(key);
                }
                return !!result.length ? result[0] : null;
            }
            else {
                return collection.collection.filter(function (itm) {
                    var result = true;
                    for (var key in collection.lookupParams) {
                        if (collection.lookupParams.hasOwnProperty(key)) {
                            result = result && params[key] === itm[collection.lookupParams[key]];
                        }
                    }
                    return result;
                });
            }
        }
    }
    else if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
        collection.collection.push(data);
        return data;
    }
    else if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put || requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Patch) {
        var result = collection.collection.find(function (item) {
            for (var key in params) {
                if (item[key] !== params[key]) {
                    return false;
                }
            }
            return true;
        });
        if (!!result) {
            Object.assign(result, data);
            return result;
        }
    }
    else if (requestMethod === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete) {
        var resultIdx = collection.collection.findIndex(function (item) {
            for (var key in params) {
                if (item[key] !== params[key]) {
                    return false;
                }
            }
            return true;
        });
        collection.collection.splice(resultIdx, 1);
    }
    return null;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TGetParamsMappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResourceGlobalConfig; });
var TGetParamsMappingType;
(function (TGetParamsMappingType) {
    TGetParamsMappingType[TGetParamsMappingType["Plain"] = 0] = "Plain";
    TGetParamsMappingType[TGetParamsMappingType["Bracket"] = 1] = "Bracket";
})(TGetParamsMappingType || (TGetParamsMappingType = {}));
var ResourceGlobalConfig = (function () {
    function ResourceGlobalConfig() {
    }
    return ResourceGlobalConfig;
}());

ResourceGlobalConfig.url = null;
ResourceGlobalConfig.path = null;
ResourceGlobalConfig.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
ResourceGlobalConfig.params = null;
ResourceGlobalConfig.data = null;
ResourceGlobalConfig.getParamsMappingType = TGetParamsMappingType.Plain;
ResourceGlobalConfig.mockResponses = false;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceProviders; });


var ResourceProviders = (function () {
    function ResourceProviders() {
    }
    ResourceProviders.add = function (resource, subSet) {
        if (subSet === void 0) { subSet = null; }
        if (!subSet) {
            subSet = this.mainProvidersName;
        }
        if (!this.providers[subSet]) {
            this.providers[subSet] = [];
        }
        var deps = Reflect.getMetadata('design:paramtypes', resource);
        if (!deps || deps.length === 0) {
            deps = [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]];
        }
        this.providers[subSet].push({
            provide: resource,
            useFactory: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return new (resource.bind.apply(resource, [void 0].concat(args)))();
            },
            deps: deps
        });
    };
    ResourceProviders.get = function (subSet) {
        if (subSet === void 0) { subSet = null; }
        if (!subSet) {
            subSet = this.mainProvidersName;
        }
        return this.providers[subSet] || [];
    };
    return ResourceProviders;
}());

ResourceProviders.mainProvidersName = '__mainProviders';
ResourceProviders.providers = {
    __mainProviders: []
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceStorage; });
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



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceStorage__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceStorages; });

var ResourceStorages = (function () {
    function ResourceStorages() {
    }
    ResourceStorages.create = function (resource, params) {
        this.storages[resource.name] = new __WEBPACK_IMPORTED_MODULE_0__ResourceStorage__["a" /* ResourceStorage */](resource, params);
        return this.storages[resource.name];
    };
    ResourceStorages.get = function (resource, params) {
        var storage = this.storages[resource.name];
        if (!!storage) {
            storage.updateParams(params);
        }
        return storage;
    };
    ResourceStorages.getOrCreate = function (resource, params) {
        var storage = ResourceStorages.get(resource, params);
        return !!storage ? storage : ResourceStorages.create(resource, params);
    };
    return ResourceStorages;
}());

ResourceStorages.storages = {};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Resource__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_Resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_ResourceStorages__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__src_ResourceStorages__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_SelectStorage__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__src_SelectStorage__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ResourceModule = ResourceModule_1 = (function () {
    function ResourceModule(_injector) {
        var _this = this;
        this._injector = _injector;
        var providers = __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[__WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].mainProvidersName];
        providers.forEach(function (provider) {
            var ResourceType = provider.provide;
            ResourceType.instance = _this._injector.get(ResourceType);
        });
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[__WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[subSet] ? __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[subSet] : []
        };
    };
    return ResourceModule;
}());
ResourceModule = ResourceModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], ResourceModule);

var ResourceModule_1;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceAction", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setDataToObject", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "appendSearchParams", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceCRUD", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceCRUDBase", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TGetParamsMappingType", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceGlobalConfig", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceModel", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceParams", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceProviders", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceStorages", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["o"]; });



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceAction__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceCRUD; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUD = (function (_super) {
    __extends(ResourceCRUD, _super);
    function ResourceCRUD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUD.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    return ResourceCRUD;
}(__WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        isArray: true
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "get", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put,
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete,
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ResourceCRUD.prototype, "remove", void 0);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceAction__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceCRUDBase; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUDBase = (function (_super) {
    __extends(ResourceCRUDBase, _super);
    function ResourceCRUDBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUDBase.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    return ResourceCRUDBase;
}(__WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        isArray: true
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])(),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "get", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete
    }),
    __metadata("design:type", Function)
], ResourceCRUDBase.prototype, "remove", void 0);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceModel; });
var ResourceModel = (function () {
    function ResourceModel() {
    }
    ResourceModel.create = function (data, commit) {
        if (data === void 0) { data = {}; }
        if (commit === void 0) { commit = true; }
        console.error('Model static create is not availbale anymore. Please use resource.createModel() method');
    };
    ResourceModel.prototype.$setData = function (data) {
        Object.assign(this, data);
        return this;
    };
    ResourceModel.prototype.$save = function () {
        if (this.isNew()) {
            return this.$create();
        }
        else {
            return this.$update();
        }
    };
    ResourceModel.prototype.$create = function () {
        return this.$resource_method('create');
    };
    ResourceModel.prototype.$update = function () {
        return this.$resource_method('update');
    };
    ResourceModel.prototype.$remove = function () {
        return this.$resource_method('remove');
    };
    ResourceModel.prototype.toJSON = function () {
        var retObj = {};
        for (var propName in this) {
            if (!(this[propName] instanceof Function) && !(propName.charAt(0) === '$')) {
                retObj[propName] = this[propName];
            }
        }
        return retObj;
    };
    ResourceModel.prototype.isNew = function () {
        return !this['id'];
    };
    ResourceModel.prototype.$resource_method = function (methodName) {
        if (!this.$resource) {
            console.error("Your Resource is not set. Please use resource.createModel() method to create model.");
            return this;
        }
        if (!this.$resource[methodName]) {
            console.error("Your Resource has no implemented " + methodName + " method.");
            return this;
        }
        this.$resource[methodName](this);
        return this;
    };
    return ResourceModel;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceParams;

function ResourceParams(params) {
    if (params === void 0) { params = {}; }
    return function (target) {
        target.prototype.getResourceOptions = function () {
            return params;
        };
        if (params.add2Provides !== false) {
            __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__["a" /* ResourceProviders */].add(target, params.providersSubSet);
        }
        if (typeof params.removeTrailingSlash !== 'undefined') {
            target.prototype.removeTrailingSlash = function () {
                return !!params.removeTrailingSlash;
            };
        }
        if (params.url) {
            target.prototype._getUrl = function () {
                return params.url;
            };
        }
        if (params.path) {
            target.prototype._getPath = function () {
                return params.path;
            };
        }
        if (params.headers) {
            target.prototype._getHeaders = function () {
                return params.headers;
            };
        }
        if (params.params) {
            target.prototype._getParams = function () {
                return params.params;
            };
        }
        if (params.data) {
            target.prototype._getData = function () {
                return params.data;
            };
        }
    };
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceStorages__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectStorage;

function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = __WEBPACK_IMPORTED_MODULE_0__ResourceStorages__["a" /* ResourceStorages */].getOrCreate(resource, params);
        target[propertyKey] = storage.result;
    };
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwM2QzM2UwZGUxNTI0NTM0NjI1ZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlU3RvcmFnZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VsZWN0U3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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R0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUMsQ0FBQztBQUVKLENBQUM7Ozs7Ozs7QUNiRCxnRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoibmd4LXJlc291cmNlLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2NvbW1vblwiLCBcInJ4anMvUnhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmd4LXJlc291cmNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJyeGpzL1J4XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ3gtcmVzb3VyY2VcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9odHRwXCJdLCByb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcInJ4anMvUnhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDNkMzNlMGRlMTUyNDUzNDYyNWQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEh0dHAsIFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSZXNvdXJjZUdsb2JhbENvbmZpZyB9IGZyb20gJy4vUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuaW1wb3J0IHsgUmVzb3VyY2VQYXJhbXNCYXNlIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uQmFzZSB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi9SZXNvdXJjZU1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlIHtcblxuICBzdGF0aWMgaW5zdGFuY2U6IGFueSA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF91cmw6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX2hlYWRlcnM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3BhcmFtczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfZGF0YTogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cCwgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge1xuXG4gIH1cblxuICAvKipcbiAgICogR2V0IG1haW4gdXJsIG9mIHRoZSByZXNvdXJjZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfFByb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldFVybChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fdXJsIHx8IHRoaXMuX2dldFVybChtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy51cmwgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIHVybFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBzZXRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cmwgPSB1cmw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhdGggb2YgdGhlIHJlc291cmNlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0UGF0aChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aCB8fCB0aGlzLl9nZXRQYXRoKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnBhdGggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIHBhdGhcbiAgICogQHBhcmFtIHBhdGhcbiAgICovXG4gIHNldFBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhlYWRlcnNcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT59XG4gICAqL1xuICBnZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzIHx8IHRoaXMuX2dldEhlYWRlcnMobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcuaGVhZGVycyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgaGVhZGVyc1xuICAgKiBAcGFyYW0gaGVhZGVyc1xuICAgKi9cbiAgc2V0SGVhZGVycyhoZWFkZXJzOiBhbnkpIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBwYXJhbXNcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT58e319XG4gICAqL1xuICBnZXRQYXJhbXMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtcyB8fCB0aGlzLl9nZXRQYXJhbXMobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IHJlc291cmNlIHBhcmFtc1xuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuICBzZXRQYXJhbXMocGFyYW1zOiBhbnkpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZGF0YVxuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pnx7fX1cbiAgICovXG4gIGdldERhdGEobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgfHwgdGhpcy5fZ2V0RGF0YShtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5kYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IHJlc291cmNlIHBhcmFtc1xuICAgKiBAcGFyYW0gZGF0YVxuICAgKi9cbiAgc2V0RGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFRoYXQgaXMgY2FsbGVkIGJlZm9yZSBleGVjdXRpbmcgcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVxXG4gICAqL1xuICByZXF1ZXN0SW50ZXJjZXB0b3IocmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogUmVxdWVzdCB7XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IG9ic2VydmFibGUgaW50ZXJjZXB0b3JcbiAgICogQHBhcmFtIG9ic2VydmFibGVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIHJlc3BvbnNlSW50ZXJjZXB0b3Iob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+LCByZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcChyZXMgPT4gcmVzLl9ib2R5ID8gcmVzLmpzb24oKSA6IG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlVHJhaWxpbmdTbGFzaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXRSZXN1bHRPYmplY3QoKTogYW55IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBtYXAoaXRlbTogYW55KTogYW55IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGZpbHRlcihpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFJlc291cmNlT3B0aW9ucygpOiBSZXNvdXJjZVBhcmFtc0Jhc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cblxuICBjcmVhdGVNb2RlbCgpOiBSZXNvdXJjZU1vZGVsPGFueT4ge1xuICAgIGxldCByZXQgPSB0aGlzLmluaXRSZXN1bHRPYmplY3QoKTtcbiAgICByZXQuJHJlc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cblxuXG5cbiAgcHJvdGVjdGVkIF9yZXF1ZXN0KHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9uczogUmVzb3VyY2VBY3Rpb25CYXNlID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgbGV0IHJlcXVlc3RPYnNlcnZhYmxlID0gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuICAgIHJldHVybiBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IgP1xuICAgICAgbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yLmJpbmQodGhpcykocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgdGhpcy5yZXNwb25zZUludGVyY2VwdG9yKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpO1xuXG4gIH1cblxuXG4gIHByaXZhdGUgX2dldFVybChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nfFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXRoKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmd8UHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhlYWRlcnMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJhbXMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXREYXRhKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlLnRzIiwiaW1wb3J0IHsgSGVhZGVycywgUmVxdWVzdCwgUmVxdWVzdE1ldGhvZCwgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7XG4gIFJlc291cmNlQWN0aW9uQmFzZSwgUmVzb3VyY2VSZXNwb25zZUZpbHRlciwgUmVzb3VyY2VSZXNwb25zZUluaXRSZXN1bHQsIFJlc291cmNlUmVzcG9uc2VNYXAsXG4gIFJlc291cmNlUmVzdWx0XG59IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNb2RlbCB9IGZyb20gJy4vUmVzb3VyY2VNb2RlbCc7XG5pbXBvcnQgeyBDb25uZWN0YWJsZU9ic2VydmFibGUsIE9ic2VydmFibGUsIFN1YnNjcmliZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUmVzb3VyY2VHbG9iYWxDb25maWcsIFRHZXRQYXJhbXNNYXBwaW5nVHlwZSB9IGZyb20gJy4vUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlQWN0aW9uKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpIHtcblxuICBtZXRob2RPcHRpb25zID0gbWV0aG9kT3B0aW9ucyB8fCB7fTtcblxuICBpZiAobWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgIG1ldGhvZE9wdGlvbnMubWV0aG9kID0gUmVxdWVzdE1ldGhvZC5HZXQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogUmVzb3VyY2UsIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcblxuICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogUmVzb3VyY2VSZXN1bHQ8YW55PiB8IFJlc291cmNlTW9kZWw8UmVzb3VyY2U+IHtcblxuICAgICAgbGV0IGRhdGEgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBudWxsO1xuICAgICAgbGV0IHBhcmFtcyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBudWxsO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IG51bGw7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgICAgIGRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcGFyYW1zO1xuICAgICAgICBwYXJhbXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzb3VyY2VPcHRpb25zID0gdGhpcy5nZXRSZXNvdXJjZU9wdGlvbnMoKTtcblxuICAgICAgbGV0IGlzR2V0UmVxdWVzdCA9IG1ldGhvZE9wdGlvbnMubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldDtcblxuICAgICAgbGV0IHJldDogUmVzb3VyY2VSZXN1bHQ8YW55PiB8IFJlc291cmNlTW9kZWw8UmVzb3VyY2U+ID0gbnVsbDtcblxuICAgICAgbGV0IG1hcDogUmVzb3VyY2VSZXNwb25zZU1hcCA9IG1ldGhvZE9wdGlvbnMubWFwID8gbWV0aG9kT3B0aW9ucy5tYXAuYmluZCh0aGlzKSA6IHRoaXMubWFwO1xuICAgICAgbGV0IGZpbHRlcjogUmVzb3VyY2VSZXNwb25zZUZpbHRlciA9IG1ldGhvZE9wdGlvbnMuZmlsdGVyID8gbWV0aG9kT3B0aW9ucy5maWx0ZXIgOiB0aGlzLmZpbHRlcjtcbiAgICAgIGxldCBpbml0T2JqZWN0OiBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCA9IG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA/XG4gICAgICAgIG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA6IHRoaXMuaW5pdFJlc3VsdE9iamVjdDtcblxuICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldCA9IHt9O1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG4gICAgICAgICAgcmV0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLiRyZXNvdXJjZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2V0dGluZyBkYXRhIHRvIHJldFxuICAgICAgICAgICAgcmV0ID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvSlNPTiA/IGRhdGEudG9KU09OKCkgOiB0b0pTT04oZGF0YSk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gaW5pdE9iamVjdC5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBsZXQgbWFpbkRlZmVycmVkU3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+ID0gbnVsbDtcbiAgICAgIGxldCBtYWluT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4gPSBudWxsO1xuXG4gICAgICByZXQuJHJlc29sdmVkID0gZmFsc2U7XG4gICAgICByZXQuJG9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgfSkuZmxhdE1hcCgoKSA9PiBtYWluT2JzZXJ2YWJsZSk7XG4gICAgICByZXQuJGFib3J0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICB9O1xuICAgICAgcmV0LiRyZXNvdXJjZSA9IHRoaXM7XG5cblxuICAgICAgZnVuY3Rpb24gcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKSB7XG4gICAgICAgIGlmIChtYWluRGVmZXJyZWRTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlci5uZXh0KCk7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcbiAgICAgICAgcmV0LiRvYnNlcnZhYmxlID0gcmV0LiRvYnNlcnZhYmxlLnB1Ymxpc2goKTtcbiAgICAgICAgKDxDb25uZWN0YWJsZU9ic2VydmFibGU8YW55Pj5yZXQuJG9ic2VydmFibGUpLmNvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy51cmwgfHwgdGhpcy5nZXRVcmwobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5wYXRoIHx8IHRoaXMuZ2V0UGF0aChtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLmhlYWRlcnMgfHwgdGhpcy5nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMucGFyYW1zIHx8IHRoaXMuZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMuZGF0YSB8fCB0aGlzLmdldERhdGEobWV0aG9kT3B0aW9ucykpXG4gICAgICBdKVxuICAgICAgICAudGhlbigoZGF0YUFsbDogYW55W10pID0+IHtcblxuICAgICAgICAgIGlmIChyZXQuJHJlc29sdmVkKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBkYXRhQWxsWzBdICsgZGF0YUFsbFsxXTtcbiAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGRhdGFBbGxbMl0pO1xuICAgICAgICAgIGxldCBkZWZQYXRoUGFyYW1zID0gZGF0YUFsbFszXTtcblxuICAgICAgICAgIGxldCB1c2VkUGF0aFBhcmFtczogYW55ID0ge307XG4gICAgICAgICAgbGV0IHVzZWRQYXRoUGFyYW1zVmFsdWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSB8fCBwYXJhbXMpIHtcblxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhQWxsWzRdLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhdGhQYXJhbXMgPSB1cmwubWF0Y2goL3soW159XSopfS9nKSB8fCBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBhdGhQYXJhbSA9IHBhdGhQYXJhbXNbaV07XG5cbiAgICAgICAgICAgICAgbGV0IHBhdGhLZXkgPSBwYXRoUGFyYW0uc3Vic3RyKDEsIHBhdGhQYXJhbS5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgICAgbGV0IGlzTWFuZGF0b3J5ID0gcGF0aEtleVswXSA9PT0gJyEnO1xuICAgICAgICAgICAgICBpZiAoaXNNYW5kYXRvcnkpIHtcbiAgICAgICAgICAgICAgICBwYXRoS2V5ID0gcGF0aEtleS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgaXNHZXRPbmx5ID0gcGF0aEtleVswXSA9PT0gJzonO1xuICAgICAgICAgICAgICBpZiAoaXNHZXRPbmx5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEtleSA9IHBhdGhLZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWVGb3JQYXRoKHBhdGhLZXksIGRlZlBhdGhQYXJhbXMsIHBhcmFtcyB8fCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gICAgICAgICAgICAgIGlmIChpc0dldE9ubHkgJiYgIXBhcmFtcykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW3BhdGhLZXldO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01hbmRhdG9yeSkge1xuXG4gICAgICAgICAgICAgICAgICBsZXQgY29uc29sZU1zZyA9IGBNYW5kYXRvcnkgJHtwYXRoUGFyYW19IHBhdGggcGFyYW1ldGVyIGlzIG1pc3NpbmdgO1xuXG4gICAgICAgICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcihjb25zb2xlTXNnKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGNvbnNvbGVNc2cpO1xuXG4gICAgICAgICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmluZGV4T2YocGF0aFBhcmFtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXNlZFBhdGhQYXJhbXNWYWx1ZXNbcGF0aEtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAvLyBSZXBsYWNpbmcgaW4gdGhlIHVybFxuICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShwYXRoUGFyYW0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92aW5nIGRvdWJsZSBzbGFzaGVkIGZyb20gZmluYWwgdXJsXG4gICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKTtcbiAgICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJzovJywgJzovLycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoID0gdGhpcy5yZW1vdmVUcmFpbGluZ1NsYXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2gpIHtcbiAgICAgICAgICAgIHdoaWxlICh1cmxbdXJsLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBSZW1vdmUgbWFwcGVkIHBhcmFtc1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZQYXRoUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoZGVmUGF0aFBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGRlZlBhdGhQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIERlZmF1bHQgc2VhcmNoIHBhcmFtcyBvciBkYXRhXG4gICAgICAgICAgbGV0IGJvZHk6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgICBsZXQgc2VhcmNoUGFyYW1zOiBhbnk7XG4gICAgICAgICAgaWYgKGlzR2V0UmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gR0VUXG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZQYXRoUGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTk9OIEdFVFxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IF9ib2R5OiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMucm9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBfYm9keVtgJHttZXRob2RPcHRpb25zLnJvb3ROb2RlfWBdID0gZGF0YTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYm9keSA9IGRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KF9ib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IGRlZlBhdGhQYXJhbXM7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBTZXR0aW5nIHNlYXJjaCBwYXJhbXNcbiAgICAgICAgICBsZXQgc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXMgPSAhIW1ldGhvZE9wdGlvbnMucXVlcnlFbmNvZGVyID8gbmV3IFVSTFNlYXJjaFBhcmFtcygnJywgbmV3IG1ldGhvZE9wdGlvbnMucXVlcnlFbmNvZGVyKCkpIDogbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4gICAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1c2VkUGF0aFBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSBzZWFyY2hQYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZGluZyBUUyBpZiBuZWVkZWRcbiAgICAgICAgICBsZXQgdHNOYW1lID0gbWV0aG9kT3B0aW9ucy5hZGRUaW1lc3RhbXAgfHwgcmVzb3VyY2VPcHRpb25zLmFkZFRpbWVzdGFtcDtcbiAgICAgICAgICBpZiAodHNOYW1lKSB7XG4gICAgICAgICAgICBpZiAodHNOYW1lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRzTmFtZSA9ICd0cyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWFyY2guYXBwZW5kKHRzTmFtZSwgJycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZpbmcgQ29udGVudC1UeXBlIGhlYWRlciBpZiBubyBib2R5XG4gICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICBoZWFkZXJzLmRlbGV0ZSgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBDcmVhdGluZyByZXF1ZXN0IG9wdGlvbnNcbiAgICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2RPcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogbWV0aG9kT3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgfHwgcmVzb3VyY2VPcHRpb25zLndpdGhDcmVkZW50aWFsc1xuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAvLyBDcmVhdGluZyByZXF1ZXN0IG9iamVjdFxuICAgICAgICAgIGxldCByZXEgPSBuZXcgUmVxdWVzdChyZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgICByZXEgPSBtZXRob2RPcHRpb25zLnJlcXVlc3RJbnRlcmNlcHRvciA/XG4gICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlcXVlc3RJbnRlcmNlcHRvcihyZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEludGVyY2VwdG9yKHJlcSwgbWV0aG9kT3B0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoIXJlcSkge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoJ1JlcXVlc3QgaXMgbnVsbCcpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlcXVlc3QgaXMgbnVsbCcpO1xuXG4gICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByZXF1ZXN0T2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgICAgICAgaWYgKFJlc291cmNlR2xvYmFsQ29uZmlnLm1vY2tSZXNwb25zZXMgJiYgcmVzb3VyY2VPcHRpb25zLm1vY2sgIT09IGZhbHNlICYmIG1ldGhvZE9wdGlvbnMubW9jayAhPT0gZmFsc2UgJiYgKCEhbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiB8fCAhIXJlc291cmNlT3B0aW9ucy5tb2NrQ29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIGxldCBtb2NrQ29sbGVjdGlvbiA9ICEhbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiA/IG1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gOiB7Y29sbGVjdGlvbjogcmVzb3VyY2VPcHRpb25zLm1vY2tDb2xsZWN0aW9ufTtcbiAgICAgICAgICAgIGxldCByZXNwOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2NrQ29sbGVjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXNwID0gbW9ja0NvbGxlY3Rpb24ocHJvcGVydHlLZXksIHVzZWRQYXRoUGFyYW1zVmFsdWVzLCBKU09OLnBhcnNlKGJvZHkpLCBtZXRob2RPcHRpb25zLm1ldGhvZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNwID0gZ2V0TW9ja2VkUmVzcG9uc2UobW9ja0NvbGxlY3Rpb24sIHVzZWRQYXRoUGFyYW1zVmFsdWVzLCBKU09OLnBhcnNlKGJvZHkpLCBtZXRob2RPcHRpb25zLm1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwID0gbmV3IEZha2VSZXNwb25zZShyZXNwKTtcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5mcm9tKFtyZXNwXSk7XG5cbiAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuICAgICAgICAgICAgcmVxdWVzdE9ic2VydmFibGUgPSBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IgP1xuICAgICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IuYmluZCh0aGlzKShyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcihyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRG9pbmcgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gdGhpcy5fcmVxdWVzdChyZXEsIG1ldGhvZE9wdGlvbnMpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG5cbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gcmVxdWVzdE9ic2VydmFibGU7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcblxuICAgICAgICAgICAgICBsZXQgcmVxU3Vic2NyOiBTdWJzY3JpcHRpb24gPSByZXF1ZXN0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBpZiAocmVzcCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzQXJyYXkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGluZyBhcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdSZXR1cm5lZCBkYXRhIHNob3VsZCBiZSBhbiBhcnJheS4gUmVjZWl2ZWQnLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlc3BJdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BJdGVtLiRyZXNvdXJjZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0RGF0YVRvT2JqZWN0KGluaXRPYmplY3QuYmluZChyZXNwSXRlbS4kcmVzb3VyY2UpKCksIHJlc3BJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIG9iamVjdFxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JldHVybmVkIGRhdGEgc2hvdWxkIGJlIGFuIG9iamVjdC4gUmVjZWl2ZWQnLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKHJlc3ApKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVRvT2JqZWN0KHJldCwgbWFwKHJlc3ApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJldCk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnI6IGFueSkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJldCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldC4kYWJvcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXQuJHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcVN1YnNjci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG5cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmV0O1xuXG4gICAgfTtcblxuICB9O1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb09iamVjdChyZXQ6IGFueSwgcmVzcDogYW55KTogYW55IHtcblxuICBpZiAocmV0LiRzZXREYXRhKSB7XG4gICAgcmV0LiRzZXREYXRhKHJlc3ApO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5hc3NpZ24ocmV0LCByZXNwKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2g6IFVSTFNlYXJjaFBhcmFtcywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgLy8vIENvbnZlcnQgZGF0ZXMgdG8gSVNPIGZvcm1hdCBzdHJpbmdcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG4gICAgc3dpdGNoIChSZXNvdXJjZUdsb2JhbENvbmZpZy5nZXRQYXJhbXNNYXBwaW5nVHlwZSkge1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjpcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBhcnJfdmFsdWUgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHNlYXJjaC5hcHBlbmQoa2V5LCBhcnJfdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlKTtcblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5CcmFja2V0OlxuICAgICAgICAvLy8gQ29udmVydCBvYmplY3QgYW5kIGFycmF5cyB0byBxdWVyeSBwYXJhbXNcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5ICsgJ1snICsgayArICddJywgdmFsdWVba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGb3JQYXRoKGtleTogc3RyaW5nLCBwYXJhbXM6IGFueSwgZGF0YTogYW55LCB1c2VkUGF0aFBhcmFtczogYW55KTogc3RyaW5nIHtcblxuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGRhdGFba2V5XSkgJiYgdHlwZW9mIGRhdGFba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgICByZXR1cm4gZGF0YVtrZXldO1xuICB9XG5cbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtc1trZXldKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JQYXRoKHBhcmFtc1trZXldLnN1YnN0cigxKSwgcGFyYW1zLCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gIH1cblxuICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgcmV0dXJuIHBhcmFtc1trZXldO1xuXG59XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvSlNPTihvYmo6IGFueSk6YW55IHtcbiAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgZm9yIChsZXQgcHJvcE5hbWUgaW4gb2JqKSB7XG5cbiAgICBpZiAoIShvYmpbcHJvcE5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEocHJvcE5hbWUuY2hhckF0KDApID09PSAnJCcpKSB7XG4gICAgICByZXRPYmpbcHJvcE5hbWVdID0gb2JqW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gcmV0T2JqO1xufVxuXG5cbmNsYXNzIEZha2VSZXNwb25zZSB7XG4gIHByaXZhdGUgX3Jlc3A6IGFueTtcblxuICBjb25zdHJ1Y3RvcihyZXNwOiBhbnkpIHtcbiAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgfVxuXG4gIGdldCBfYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9yZXNwKTtcbiAgfVxuXG4gIGpzb24gPSAoKSA9PiB0aGlzLl9yZXNwO1xufVxuXG5cbmZ1bmN0aW9uIGdldE1vY2tlZFJlc3BvbnNlKGNvbGxlY3Rpb246IHtjb2xsZWN0aW9uOiBhbnksIGxvb2t1cFBhcmFtcz86IGFueX0sIHBhcmFtczogYW55LCBkYXRhOiBhbnksIHJlcXVlc3RNZXRob2Q6IFJlcXVlc3RNZXRob2QpIHtcbiAgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5jb2xsZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNvbGxlY3Rpb24ubG9va3VwUGFyYW1zIHx8IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtW2tleV0gPT09IHBhcmFtc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbHRlcigoaXRtOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29sbGVjdGlvbi5sb29rdXBQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBwYXJhbXNba2V5XSA9PT0gaXRtW2NvbGxlY3Rpb24ubG9va3VwUGFyYW1zW2tleV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5Qb3N0KSB7XG4gICAgY29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5QdXQgfHwgcmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5QYXRjaCApIHtcbiAgICAgIGxldCByZXN1bHQgPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBwYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSkge1xuICAgICAgbGV0IHJlc3VsdElkeCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5zcGxpY2UocmVzdWx0SWR4LCAxKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsImV4cG9ydCBlbnVtIFRHZXRQYXJhbXNNYXBwaW5nVHlwZSB7XG4gIFBsYWluLFxuICBCcmFja2V0XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUdsb2JhbENvbmZpZyB7XG4gIHN0YXRpYyB1cmw6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IG51bGw7XG4gIHN0YXRpYyBwYXRoOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgaGVhZGVyczogYW55IHwgUHJvbWlzZTxhbnk+ID0ge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9O1xuICBzdGF0aWMgcGFyYW1zOiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuICBzdGF0aWMgZGF0YTogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuICBzdGF0aWMgZ2V0UGFyYW1zTWFwcGluZ1R5cGU6IGFueSA9IFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjtcbiAgc3RhdGljIG1vY2tSZXNwb25zZXM6IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUdsb2JhbENvbmZpZy50cyIsImltcG9ydCB7IEluamVjdG9yLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlUHJvdmlkZXJzIHtcblxuICBzdGF0aWMgbWFpblByb3ZpZGVyc05hbWU6IHN0cmluZyA9ICdfX21haW5Qcm92aWRlcnMnO1xuICBzdGF0aWMgcHJvdmlkZXJzOiB7IFtpZDogc3RyaW5nXTogUHJvdmlkZXJbXSB9ID0ge1xuICAgIF9fbWFpblByb3ZpZGVyczogW11cbiAgfTtcblxuICBzdGF0aWMgYWRkKHJlc291cmNlOiBUeXBlPFJlc291cmNlPiwgc3ViU2V0OiBzdHJpbmcgPSBudWxsKSB7XG5cbiAgICBpZiAoIXN1YlNldCkge1xuICAgICAgc3ViU2V0ID0gdGhpcy5tYWluUHJvdmlkZXJzTmFtZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW3N1YlNldF0pIHtcbiAgICAgIHRoaXMucHJvdmlkZXJzW3N1YlNldF0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGVwczogYW55W10gPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCByZXNvdXJjZSk7XG5cbiAgICBpZiAoIWRlcHMgfHwgZGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlcHMgPSBbSHR0cCwgSW5qZWN0b3JdO1xuICAgIH1cblxuICAgIHRoaXMucHJvdmlkZXJzW3N1YlNldF0ucHVzaChcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogcmVzb3VyY2UsXG4gICAgICAgIHVzZUZhY3Rvcnk6ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgcmVzb3VyY2UoLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlcHM6IGRlcHNcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0KHN1YlNldDogc3RyaW5nID0gbnVsbCk6IFByb3ZpZGVyW10ge1xuXG4gICAgaWYgKCFzdWJTZXQpIHtcbiAgICAgIHN1YlNldCA9IHRoaXMubWFpblByb3ZpZGVyc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW3N1YlNldF0gfHwgW107XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMudHMiLCJpbXBvcnQge1Jlc291cmNlU3RvcmFnZVBhcmFtc30gZnJvbSBcIi4vSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtSZXNvdXJjZX0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcbmltcG9ydCB7VHlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VTdG9yYWdlIHtcbiAgcHJpdmF0ZSBxdWVyeUFjdGlvbk5hbWUgPSAncXVlcnknO1xuICBwcml2YXRlIHF1ZXJ5UGFyYW1zID0ge307XG4gIHByaXZhdGUgbG9hZEltbWVkaWF0ZWx5ID0gdHJ1ZTtcblxuICBwcml2YXRlIF9kYXRhID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHBhcmFtczogUmVzb3VyY2VTdG9yYWdlUGFyYW1zKSB7XG4gICAgdGhpcy51cGRhdGVQYXJhbXMocGFyYW1zKTtcbiAgICBpZiAodGhpcy5sb2FkSW1tZWRpYXRlbHkpIHtcbiAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhcmFtcyhwYXJhbXM6IFJlc291cmNlU3RvcmFnZVBhcmFtcyA9IDxhbnk+e30pIHtcbiAgICB0aGlzLnF1ZXJ5QWN0aW9uTmFtZSA9IHBhcmFtcy5xdWVyeUFjdGlvbk5hbWUgfHwgJ3F1ZXJ5JztcbiAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gcGFyYW1zLnF1ZXJ5UGFyYW1zIHx8IHt9O1xuICAgIHRoaXMubG9hZEltbWVkaWF0ZWx5ID0gcGFyYW1zLmxvYWRJbW1lZGlhdGVseSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICBsb2FkKGFyZ3M/OiBhbnkpIHtcbiAgICBjb25zdCBxcCA9ICEhYXJncyA/IGFyZ3MgOiB0aGlzLnF1ZXJ5UGFyYW1zO1xuICAgIGNvbnN0IGFjdGlvbiA9ICg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlW3RoaXMucXVlcnlBY3Rpb25OYW1lXS5iaW5kKCg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlKTtcbiAgICB0aGlzLl9kYXRhID0gYWN0aW9uKHFwKTtcbiAgfVxuXG4gIGdldCByZXN1bHQoKTogYW55IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0YSwgeyAkbG9hZDogdGhpcy5sb2FkLmJpbmQodGhpcykgfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlU3RvcmFnZS50cyIsImltcG9ydCB7IFJlc291cmNlU3RvcmFnZSB9IGZyb20gJy4vUmVzb3VyY2VTdG9yYWdlJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVN0b3JhZ2VzIHtcblxuICBzdGF0aWMgc3RvcmFnZXM6IHtbcmVzb3VyY2VOYW1lOiBzdHJpbmddOiBSZXNvdXJjZVN0b3JhZ2V9ID0ge307XG5cbiAgc3RhdGljIGNyZWF0ZShyZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHBhcmFtcz86IFJlc291cmNlU3RvcmFnZVBhcmFtcyk6IFJlc291cmNlU3RvcmFnZSB7XG4gICAgdGhpcy5zdG9yYWdlc1soPGFueT5yZXNvdXJjZSkubmFtZV0gPSBuZXcgUmVzb3VyY2VTdG9yYWdlKHJlc291cmNlLCBwYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VzWyg8YW55PnJlc291cmNlKS5uYW1lXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQocmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBwYXJhbXM/OiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMpOiBSZXNvdXJjZVN0b3JhZ2Uge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VzWyg8YW55PnJlc291cmNlKS5uYW1lXTtcbiAgICBpZiAoISFzdG9yYWdlKSB7XG4gICAgICBzdG9yYWdlLnVwZGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZShyZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHBhcmFtcz86IFJlc291cmNlU3RvcmFnZVBhcmFtcyk6IFJlc291cmNlU3RvcmFnZSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IFJlc291cmNlU3RvcmFnZXMuZ2V0KHJlc291cmNlLCBwYXJhbXMpO1xuICAgIHJldHVybiAhIXN0b3JhZ2UgPyBzdG9yYWdlIDogUmVzb3VyY2VTdG9yYWdlcy5jcmVhdGUocmVzb3VyY2UsIHBhcmFtcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVN0b3JhZ2VzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzJztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VBY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VDUlVEJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQ1JVREJhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VNb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVBhcmFtcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVByb3ZpZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVN0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VTdG9yYWdlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9TZWxlY3RTdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL0ludGVyZmFjZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZU1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgbGV0IHByb3ZpZGVycyA9IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tSZXNvdXJjZVByb3ZpZGVycy5tYWluUHJvdmlkZXJzTmFtZV07XG4gICAgcHJvdmlkZXJzLmZvckVhY2gocHJvdmlkZXIgPT4ge1xuICAgICAgY29uc3QgUmVzb3VyY2VUeXBlID0gKDxhbnk+cHJvdmlkZXIpLnByb3ZpZGU7XG4gICAgICBSZXNvdXJjZVR5cGUuaW5zdGFuY2UgPSB0aGlzLl9pbmplY3Rvci5nZXQoUmVzb3VyY2VUeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tSZXNvdXJjZVByb3ZpZGVycy5tYWluUHJvdmlkZXJzTmFtZV1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKHN1YlNldDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNvdXJjZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW3N1YlNldF0gPyBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbc3ViU2V0XSA6IFtdXG4gICAgfTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vbmd4LXJlc291cmNlLnRzIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTWV0aG9kIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uIH0gZnJvbSAnLi9SZXNvdXJjZUFjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUNSVUQ8VFF1ZXJ5LCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgZ2V0OiBSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgfSlcbiAgc2F2ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QdXQsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgdXBkYXRlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSxcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICByZW1vdmU6IFJlc291cmNlTWV0aG9kPHsgaWQ6IGFueSB9LCBhbnk+O1xuXG4gIC8vIEFsaWFzIHRvIHNhdmVcbiAgY3JlYXRlKGRhdGE6IFRGdWxsLCBjYWxsYmFjaz86IChyZXM6IFRGdWxsKSA9PiBhbnkpOiBURnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShkYXRhLCBjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQ1JVRC50cyIsImltcG9ydCB7IFJlcXVlc3RNZXRob2QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbiB9IGZyb20gJy4vUmVzb3VyY2VBY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDUlVEQmFzZTxUUXVlcnksIFRLZXlzLCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbigpXG4gIGdldDogUmVzb3VyY2VNZXRob2Q8VEtleXMsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0XG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGVcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDxUS2V5cywgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogVEZ1bGwge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VNb2RlbDxSPiB7XG5cbiAgJHJlc29sdmVkOiBib29sZWFuO1xuICAkb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICAkYWJvcnRSZXF1ZXN0OiAoKSA9PiB2b2lkO1xuICAkcmVzb3VyY2U6IFI7XG5cbiAgc3RhdGljIGNyZWF0ZShkYXRhOiBhbnkgPSB7fSwgY29tbWl0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vZGVsIHN0YXRpYyBjcmVhdGUgaXMgbm90IGF2YWlsYmFsZSBhbnltb3JlLiBQbGVhc2UgdXNlIHJlc291cmNlLmNyZWF0ZU1vZGVsKCkgbWV0aG9kJyk7XG4gIH1cblxuICBwdWJsaWMgJHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgcHVibGljICRzYXZlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNOZXcoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdXBkYXRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgJGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCdjcmVhdGUnKTtcbiAgfVxuXG4gIHB1YmxpYyAkdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ3VwZGF0ZScpO1xuICB9XG5cbiAgcHVibGljICRyZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgncmVtb3ZlJyk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCk6YW55IHtcbiAgICBsZXQgcmV0T2JqOiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIHRoaXMpIHtcblxuICAgICAgaWYgKCEoKDxhbnk+dGhpcylbcHJvcE5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEocHJvcE5hbWUuY2hhckF0KDApID09PSAnJCcpKSB7XG4gICAgICAgIHJldE9ialtwcm9wTmFtZV0gPSAoPGFueT50aGlzKVtwcm9wTmFtZV07XG4gICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHJldE9iajtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc05ldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISg8YW55PnRoaXMpWydpZCddO1xuICB9XG5cbiAgcHJpdmF0ZSAkcmVzb3VyY2VfbWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZykge1xuXG4gICAgaWYgKCF0aGlzLiRyZXNvdXJjZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBpcyBub3Qgc2V0LiBQbGVhc2UgdXNlIHJlc291cmNlLmNyZWF0ZU1vZGVsKCkgbWV0aG9kIHRvIGNyZWF0ZSBtb2RlbC5gKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICghKDxhbnk+dGhpcy4kcmVzb3VyY2UpW21ldGhvZE5hbWVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBZb3VyIFJlc291cmNlIGhhcyBubyBpbXBsZW1lbnRlZCAke21ldGhvZE5hbWV9IG1ldGhvZC5gKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICg8YW55PnRoaXMuJHJlc291cmNlKVttZXRob2ROYW1lXSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VNb2RlbC50cyIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc291cmNlUGFyYW1zQmFzZSB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4vUmVzb3VyY2VQcm92aWRlcnMnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gUmVzb3VyY2VQYXJhbXMocGFyYW1zOiBSZXNvdXJjZVBhcmFtc0Jhc2UgPSB7fSkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBUeXBlPFJlc291cmNlPikge1xuXG5cbiAgICB0YXJnZXQucHJvdG90eXBlLmdldFJlc291cmNlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuYWRkMlByb3ZpZGVzICE9PSBmYWxzZSkge1xuICAgICAgUmVzb3VyY2VQcm92aWRlcnMuYWRkKHRhcmdldCwgcGFyYW1zLnByb3ZpZGVyc1N1YlNldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVtb3ZlVHJhaWxpbmdTbGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2g7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudXJsKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMudXJsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhdGgpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGF0aDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oZWFkZXJzKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmhlYWRlcnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucGFyYW1zKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyYW1zO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmRhdGEpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGF0YTtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VTdG9yYWdlcyB9IGZyb20gJy4vUmVzb3VyY2VTdG9yYWdlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0U3RvcmFnZShyZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHBhcmFtcz86IFJlc291cmNlU3RvcmFnZVBhcmFtcykge1xuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gUmVzb3VyY2VTdG9yYWdlcy5nZXRPckNyZWF0ZShyZXNvdXJjZSwgcGFyYW1zKTtcblxuICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gc3RvcmFnZS5yZXN1bHQ7XG4gIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9TZWxlY3RTdG9yYWdlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=