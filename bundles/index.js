(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "@angular/common", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["ngx-resource"] = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else
		root["ngx-resource"] = factory(root["@angular/http"], root["@angular/core"], root["@angular/common"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(15);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_ResourceStorageParams__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__src_ResourceStorageParams__["a"]; });
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
    function ResourceModule() {
        var providers = __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[__WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].mainProvidersName];
        var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(providers);
        providers.forEach(function (provider) { return injector.get(provider); });
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
    __metadata("design:paramtypes", [])
], ResourceModule);

var ResourceModule_1;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);
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
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceStorageParams", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });



/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceStorage__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceStorageParams;

function ResourceStorageParams(storageOptions) {
    storageOptions = storageOptions || {};
    if (storageOptions.action === undefined) {
        storageOptions.action = 'query';
    }
    if (storageOptions.actionParams === undefined) {
        storageOptions.actionParams = {};
    }
    return function (target, propertyKey) {
        target[propertyKey] = new __WEBPACK_IMPORTED_MODULE_0__ResourceStorage__["a" /* ResourceStorage */](target, storageOptions);
        target._storage = target[propertyKey];
    };
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MWRhYjFmMTNiODJmYTg0OWZkMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VTdG9yYWdlUGFyYW1zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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bEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUc7Z0JBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRztnQkFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUVILENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7QUNyRGlEO0FBRzVDLCtCQUFnQyxjQUEwQztJQUU5RSxjQUFjLEdBQUcsY0FBYyxJQUFJLEVBQUUsQ0FBQztJQUV0QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM5QyxjQUFjLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsTUFBZ0IsRUFBRSxXQUFtQjtRQUM5QyxNQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSx5RUFBZSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxNQUFPLENBQUMsUUFBUSxHQUFTLE1BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7QUFFSixDQUFDOzs7Ozs7O0FDdkJELGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJuZ3gtcmVzb3VyY2UudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJyeGpzL1J4XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2h0dHBcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCIsIFwicnhqcy9SeFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtcmVzb3VyY2VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5neC1yZXNvdXJjZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wiQGFuZ3VsYXIvY29tbW9uXCJdLCByb290W1wicnhqcy9SeFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MWRhYjFmMTNiODJmYTg0OWZkMiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSHR0cCwgUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5pbXBvcnQgeyBSZXNvdXJjZVBhcmFtc0Jhc2UgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb25CYXNlIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlTW9kZWwgfSBmcm9tICcuL1Jlc291cmNlTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2Uge1xuXG4gIHByaXZhdGUgX3VybDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGVhZGVyczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfcGFyYW1zOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9kYXRhOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwLCBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgbWFpbiB1cmwgb2YgdGhlIHJlc291cmNlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0VXJsKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl91cmwgfHwgdGhpcy5fZ2V0VXJsKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnVybCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgdXJsXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIHNldFVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF0aCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHJldHVybnMge3N0cmluZ3xQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXRQYXRoKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9wYXRoIHx8IHRoaXMuX2dldFBhdGgobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucGF0aCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgcGF0aFxuICAgKiBAcGFyYW0gcGF0aFxuICAgKi9cbiAgc2V0UGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVyc1xuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pn1cbiAgICovXG4gIGdldEhlYWRlcnMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnMgfHwgdGhpcy5fZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSBoZWFkZXJzXG4gICAqIEBwYXJhbSBoZWFkZXJzXG4gICAqL1xuICBzZXRIZWFkZXJzKGhlYWRlcnM6IGFueSkge1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pnx7fX1cbiAgICovXG4gIGdldFBhcmFtcyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zIHx8IHRoaXMuX2dldFBhcmFtcyhtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgcmVzb3VyY2UgcGFyYW1zXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG4gIHNldFBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBkYXRhXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fHt9fVxuICAgKi9cbiAgZ2V0RGF0YShtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSB8fCB0aGlzLl9nZXREYXRhKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLmRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgcmVzb3VyY2UgcGFyYW1zXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBzZXREYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cblxuICAvKipcbiAgICogVGhhdCBpcyBjYWxsZWQgYmVmb3JlIGV4ZWN1dGluZyByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXFcbiAgICovXG4gIHJlcXVlc3RJbnRlcmNlcHRvcihyZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBSZXF1ZXN0IHtcbiAgICByZXR1cm4gcmVxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3Qgb2JzZXJ2YWJsZSBpbnRlcmNlcHRvclxuICAgKiBAcGFyYW0gb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgcmVzcG9uc2VJbnRlcmNlcHRvcihvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4sIHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHJlcyA9PiByZXMuX2JvZHkgPyByZXMuanNvbigpIDogbnVsbCk7XG4gIH1cblxuICByZW1vdmVUcmFpbGluZ1NsYXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdFJlc3VsdE9iamVjdCgpOiBhbnkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIG1hcChpdGVtOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgZmlsdGVyKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0UmVzb3VyY2VPcHRpb25zKCk6IFJlc291cmNlUGFyYW1zQmFzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIGNyZWF0ZU1vZGVsKCk6IFJlc291cmNlTW9kZWw8YW55PiB7XG4gICAgbGV0IHJldCA9IHRoaXMuaW5pdFJlc3VsdE9iamVjdCgpO1xuICAgIHJldC4kcmVzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuXG5cblxuICBwcm90ZWN0ZWQgX3JlcXVlc3QocmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zOiBSZXNvdXJjZUFjdGlvbkJhc2UgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgcmVxdWVzdE9ic2VydmFibGUgPSB0aGlzLmh0dHAucmVxdWVzdChyZXEpO1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgcmV0dXJuIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvciA/XG4gICAgICBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IuYmluZCh0aGlzKShyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG5cbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0VXJsKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmd8UHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhdGgobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmFtcyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERhdGEobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2UudHMiLCJpbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgUmVzb3VyY2VBY3Rpb25CYXNlLCBSZXNvdXJjZVJlc3BvbnNlRmlsdGVyLCBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCwgUmVzb3VyY2VSZXNwb25zZU1hcCxcbiAgUmVzb3VyY2VSZXN1bHRcbn0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi9SZXNvdXJjZU1vZGVsJztcbmltcG9ydCB7IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSZXNvdXJjZUdsb2JhbENvbmZpZywgVEdldFBhcmFtc01hcHBpbmdUeXBlIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUmVzb3VyY2VBY3Rpb24obWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSkge1xuXG4gIG1ldGhvZE9wdGlvbnMgPSBtZXRob2RPcHRpb25zIHx8IHt9O1xuXG4gIGlmIChtZXRob2RPcHRpb25zLm1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWV0aG9kT3B0aW9ucy5tZXRob2QgPSBSZXF1ZXN0TWV0aG9kLkdldDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBSZXNvdXJjZSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuXG4gICAgKDxhbnk+dGFyZ2V0KVtwcm9wZXJ0eUtleV0gPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBSZXNvdXJjZVJlc3VsdDxhbnk+IHwgUmVzb3VyY2VNb2RlbDxSZXNvdXJjZT4ge1xuXG4gICAgICBsZXQgZGF0YSA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IG51bGw7XG4gICAgICBsZXQgcGFyYW1zID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IG51bGw7XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgICAgIHBhcmFtcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXNvdXJjZU9wdGlvbnMgPSB0aGlzLmdldFJlc291cmNlT3B0aW9ucygpO1xuXG4gICAgICBsZXQgaXNHZXRSZXF1ZXN0ID0gbWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0O1xuXG4gICAgICBsZXQgcmV0OiBSZXNvdXJjZVJlc3VsdDxhbnk+IHwgUmVzb3VyY2VNb2RlbDxSZXNvdXJjZT4gPSBudWxsO1xuXG4gICAgICBsZXQgbWFwOiBSZXNvdXJjZVJlc3BvbnNlTWFwID0gbWV0aG9kT3B0aW9ucy5tYXAgPyBtZXRob2RPcHRpb25zLm1hcC5iaW5kKHRoaXMpIDogdGhpcy5tYXA7XG4gICAgICBsZXQgZmlsdGVyOiBSZXNvdXJjZVJlc3BvbnNlRmlsdGVyID0gbWV0aG9kT3B0aW9ucy5maWx0ZXIgPyBtZXRob2RPcHRpb25zLmZpbHRlciA6IHRoaXMuZmlsdGVyO1xuICAgICAgbGV0IGluaXRPYmplY3Q6IFJlc291cmNlUmVzcG9uc2VJbml0UmVzdWx0ID0gbWV0aG9kT3B0aW9ucy5pbml0UmVzdWx0T2JqZWN0ID9cbiAgICAgICAgbWV0aG9kT3B0aW9ucy5pbml0UmVzdWx0T2JqZWN0IDogdGhpcy5pbml0UmVzdWx0T2JqZWN0O1xuXG4gICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcbiAgICAgICAgcmV0ID0ge307XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzQXJyYXkpIHtcbiAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuJHJlc291cmNlID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIGRhdGEgdG8gcmV0XG4gICAgICAgICAgICByZXQgPSBkYXRhO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9KU09OID8gZGF0YS50b0pTT04oKSA6IHRvSlNPTihkYXRhKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgPSBpbml0T2JqZWN0LmJpbmQodGhpcykoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCBtYWluRGVmZXJyZWRTdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4gPSBudWxsO1xuICAgICAgbGV0IG1haW5PYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiA9IG51bGw7XG5cbiAgICAgIHJldC4kcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgIHJldC4kb2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICB9KS5mbGF0TWFwKCgpID0+IG1haW5PYnNlcnZhYmxlKTtcbiAgICAgIHJldC4kYWJvcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICByZXQuJHJlc291cmNlID0gdGhpcztcblxuXG4gICAgICBmdW5jdGlvbiByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpIHtcbiAgICAgICAgaWYgKG1haW5EZWZlcnJlZFN1YnNjcmliZXIpIHtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyLm5leHQoKTtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuICAgICAgICByZXQuJG9ic2VydmFibGUgPSByZXQuJG9ic2VydmFibGUucHVibGlzaCgpO1xuICAgICAgICAoPENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxhbnk+PnJldC4kb2JzZXJ2YWJsZSkuY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnVybCB8fCB0aGlzLmdldFVybChtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnBhdGggfHwgdGhpcy5nZXRQYXRoKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMuaGVhZGVycyB8fCB0aGlzLmdldEhlYWRlcnMobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5wYXJhbXMgfHwgdGhpcy5nZXRQYXJhbXMobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5kYXRhIHx8IHRoaXMuZ2V0RGF0YShtZXRob2RPcHRpb25zKSlcbiAgICAgIF0pXG4gICAgICAgIC50aGVuKChkYXRhQWxsOiBhbnlbXSkgPT4ge1xuXG4gICAgICAgICAgaWYgKHJldC4kcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChudWxsKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGRhdGFBbGxbMF0gKyBkYXRhQWxsWzFdO1xuICAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoZGF0YUFsbFsyXSk7XG4gICAgICAgICAgbGV0IGRlZlBhdGhQYXJhbXMgPSBkYXRhQWxsWzNdO1xuXG4gICAgICAgICAgbGV0IHVzZWRQYXRoUGFyYW1zOiBhbnkgPSB7fTtcbiAgICAgICAgICBsZXQgdXNlZFBhdGhQYXJhbXNWYWx1ZXM6IGFueSA9IHt9O1xuXG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpIHx8IHBhcmFtcykge1xuXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFBbGxbNF0sIGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGF0aFBhcmFtcyA9IHVybC5tYXRjaCgveyhbXn1dKil9L2cpIHx8IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhQYXJhbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICBsZXQgcGF0aFBhcmFtID0gcGF0aFBhcmFtc1tpXTtcblxuICAgICAgICAgICAgICBsZXQgcGF0aEtleSA9IHBhdGhQYXJhbS5zdWJzdHIoMSwgcGF0aFBhcmFtLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICBsZXQgaXNNYW5kYXRvcnkgPSBwYXRoS2V5WzBdID09PSAnISc7XG4gICAgICAgICAgICAgIGlmIChpc01hbmRhdG9yeSkge1xuICAgICAgICAgICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBpc0dldE9ubHkgPSBwYXRoS2V5WzBdID09PSAnOic7XG4gICAgICAgICAgICAgIGlmIChpc0dldE9ubHkpIHtcbiAgICAgICAgICAgICAgICBwYXRoS2V5ID0gcGF0aEtleS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZUZvclBhdGgocGF0aEtleSwgZGVmUGF0aFBhcmFtcywgcGFyYW1zIHx8IGRhdGEsIHVzZWRQYXRoUGFyYW1zKTtcbiAgICAgICAgICAgICAgaWYgKGlzR2V0T25seSAmJiAhcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFbcGF0aEtleV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBjb25zb2xlTXNnID0gYE1hbmRhdG9yeSAke3BhdGhQYXJhbX0gcGF0aCBwYXJhbWV0ZXIgaXMgbWlzc2luZ2A7XG5cbiAgICAgICAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKGNvbnNvbGVNc2cpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oY29uc29sZU1zZyk7XG5cbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwuaW5kZXhPZihwYXRoUGFyYW0pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VkUGF0aFBhcmFtc1ZhbHVlc1twYXRoS2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIC8vIFJlcGxhY2luZyBpbiB0aGUgdXJsXG4gICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHBhdGhQYXJhbSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZpbmcgZG91YmxlIHNsYXNoZWQgZnJvbSBmaW5hbCB1cmxcbiAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwvKy9nLCAnLycpO1xuICAgICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgnOi8nLCAnOi8vJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggPSB0aGlzLnJlbW92ZVRyYWlsaW5nU2xhc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCkge1xuICAgICAgICAgICAgd2hpbGUgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIHVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIFJlbW92ZSBtYXBwZWQgcGFyYW1zXG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGRlZlBhdGhQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChkZWZQYXRoUGFyYW1zW2tleV1bMF0gPT09ICdAJykge1xuICAgICAgICAgICAgICBkZWxldGUgZGVmUGF0aFBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gRGVmYXVsdCBzZWFyY2ggcGFyYW1zIG9yIGRhdGFcbiAgICAgICAgICBsZXQgYm9keTogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICAgIGxldCBzZWFyY2hQYXJhbXM6IGFueTtcbiAgICAgICAgICBpZiAoaXNHZXRSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBHRVRcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZlBhdGhQYXJhbXMsIGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOT04gR0VUXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBsZXQgX2JvZHk6IGFueSA9IHt9O1xuICAgICAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5yb290Tm9kZSkge1xuICAgICAgICAgICAgICAgIF9ib2R5W2Ake21ldGhvZE9wdGlvbnMucm9vdE5vZGV9YF0gPSBkYXRhO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9ib2R5ID0gZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoX2JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VhcmNoUGFyYW1zID0gZGVmUGF0aFBhcmFtcztcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIFNldHRpbmcgc2VhcmNoIHBhcmFtc1xuICAgICAgICAgIGxldCBzZWFyY2g6IFVSTFNlYXJjaFBhcmFtcyA9ICEhbWV0aG9kT3B0aW9ucy5xdWVyeUVuY29kZXIgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKCcnLCBuZXcgbWV0aG9kT3B0aW9ucy5xdWVyeUVuY29kZXIoKSkgOiBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoUGFyYW1zLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVzZWRQYXRoUGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IGFueSA9IHNlYXJjaFBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2gsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkaW5nIFRTIGlmIG5lZWRlZFxuICAgICAgICAgIGxldCB0c05hbWUgPSBtZXRob2RPcHRpb25zLmFkZFRpbWVzdGFtcCB8fCByZXNvdXJjZU9wdGlvbnMuYWRkVGltZXN0YW1wO1xuICAgICAgICAgIGlmICh0c05hbWUpIHtcbiAgICAgICAgICAgIGlmICh0c05hbWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdHNOYW1lID0gJ3RzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlYXJjaC5hcHBlbmQodHNOYW1lLCAnJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmluZyBDb250ZW50LVR5cGUgaGVhZGVyIGlmIG5vIGJvZHlcbiAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgIGhlYWRlcnMuZGVsZXRlKCdjb250ZW50LXR5cGUnKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIENyZWF0aW5nIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZE9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoLFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBtZXRob2RPcHRpb25zLndpdGhDcmVkZW50aWFscyB8fCByZXNvdXJjZU9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgIC8vIENyZWF0aW5nIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgICAgbGV0IHJlcSA9IG5ldyBSZXF1ZXN0KHJlcXVlc3RPcHRpb25zKTtcblxuICAgICAgICAgIHJlcSA9IG1ldGhvZE9wdGlvbnMucmVxdWVzdEludGVyY2VwdG9yID9cbiAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVxdWVzdEludGVyY2VwdG9yKHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW50ZXJjZXB0b3IocmVxLCBtZXRob2RPcHRpb25zKTtcblxuICAgICAgICAgIGlmICghcmVxKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcignUmVxdWVzdCBpcyBudWxsJykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUmVxdWVzdCBpcyBudWxsJyk7XG5cbiAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHJlcXVlc3RPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICAgICAgICBpZiAoUmVzb3VyY2VHbG9iYWxDb25maWcubW9ja1Jlc3BvbnNlcyAmJiByZXNvdXJjZU9wdGlvbnMubW9jayAhPT0gZmFsc2UgJiYgbWV0aG9kT3B0aW9ucy5tb2NrICE9PSBmYWxzZSAmJiAoISFtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uIHx8ICEhcmVzb3VyY2VPcHRpb25zLm1vY2tDb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgbGV0IG1vY2tDb2xsZWN0aW9uID0gISFtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uID8gbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiA6IHtjb2xsZWN0aW9uOiByZXNvdXJjZU9wdGlvbnMubW9ja0NvbGxlY3Rpb259O1xuICAgICAgICAgICAgbGV0IHJlc3A6IGFueSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vY2tDb2xsZWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHJlc3AgPSBtb2NrQ29sbGVjdGlvbihwcm9wZXJ0eUtleSwgdXNlZFBhdGhQYXJhbXNWYWx1ZXMsIEpTT04ucGFyc2UoYm9keSksIG1ldGhvZE9wdGlvbnMubWV0aG9kKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3AgPSBnZXRNb2NrZWRSZXNwb25zZShtb2NrQ29sbGVjdGlvbiwgdXNlZFBhdGhQYXJhbXNWYWx1ZXMsIEpTT04ucGFyc2UoYm9keSksIG1ldGhvZE9wdGlvbnMubWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3AgPSBuZXcgRmFrZVJlc3BvbnNlKHJlc3ApO1xuICAgICAgICAgICAgcmVxdWVzdE9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmZyb20oW3Jlc3BdKTtcblxuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvciA/XG4gICAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvci5iaW5kKHRoaXMpKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUludGVyY2VwdG9yKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEb2luZyB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgcmVxdWVzdE9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0KHJlcSwgbWV0aG9kT3B0aW9ucyk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcblxuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSByZXF1ZXN0T2JzZXJ2YWJsZTtcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCByZXFTdWJzY3I6IFN1YnNjcmlwdGlvbiA9IHJlcXVlc3RPYnNlcnZhYmxlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNBcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIGFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JldHVybmVkIGRhdGEgc2hvdWxkIGJlIGFuIGFycmF5LiBSZWNlaXZlZCcsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtYXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzcEl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcEl0ZW0uJHJlc291cmNlID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXREYXRhVG9PYmplY3QoaW5pdE9iamVjdC5iaW5kKHJlc3BJdGVtLiRyZXNvdXJjZSkoKSwgcmVzcEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3Rpbmcgb2JqZWN0XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmV0dXJuZWQgZGF0YSBzaG91bGQgYmUgYW4gb2JqZWN0LiBSZWNlaXZlZCcsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIocmVzcCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhVG9PYmplY3QocmV0LCBtYXAocmVzcCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmV0KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycjogYW55KSA9PiBzdWJzY3JpYmVyLmVycm9yKGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0LiRhYm9ydFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJldC4kcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVxU3Vic2NyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcblxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXQ7XG5cbiAgICB9O1xuXG4gIH07XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0YVRvT2JqZWN0KHJldDogYW55LCByZXNwOiBhbnkpOiBhbnkge1xuXG4gIGlmIChyZXQuJHNldERhdGEpIHtcbiAgICByZXQuJHNldERhdGEocmVzcCk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmFzc2lnbihyZXQsIHJlc3ApO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlLnRvSVNPU3RyaW5nKCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cbiAgICBzd2l0Y2ggKFJlc291cmNlR2xvYmFsQ29uZmlnLmdldFBhcmFtc01hcHBpbmdUeXBlKSB7XG5cbiAgICAgIGNhc2UgVEdldFBhcmFtc01hcHBpbmdUeXBlLlBsYWluOlxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAobGV0IGFycl92YWx1ZSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgc2VhcmNoLmFwcGVuZChrZXksIGFycl92YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vLyBDb252ZXJ0IGRhdGVzIHRvIElTTyBmb3JtYXQgc3RyaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWFyY2guYXBwZW5kKGtleSwgdmFsdWUpO1xuXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgVEdldFBhcmFtc01hcHBpbmdUeXBlLkJyYWNrZXQ6XG4gICAgICAgIC8vLyBDb252ZXJ0IG9iamVjdCBhbmQgYXJyYXlzIHRvIHF1ZXJ5IHBhcmFtc1xuICAgICAgICBmb3IgKGxldCBrIGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoLCBrZXkgKyAnWycgKyBrICsgJ10nLCB2YWx1ZVtrXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlKTtcblxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZvclBhdGgoa2V5OiBzdHJpbmcsIHBhcmFtczogYW55LCBkYXRhOiBhbnksIHVzZWRQYXRoUGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQoZGF0YVtrZXldKSAmJiB0eXBlb2YgZGF0YVtrZXldICE9PSAnb2JqZWN0Jykge1xuICAgIHVzZWRQYXRoUGFyYW1zW2tleV0gPSB0cnVlO1xuICAgIHJldHVybiBkYXRhW2tleV07XG4gIH1cblxuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQocGFyYW1zW2tleV0pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocGFyYW1zW2tleV1bMF0gPT09ICdAJykge1xuICAgIHJldHVybiBnZXRWYWx1ZUZvclBhdGgocGFyYW1zW2tleV0uc3Vic3RyKDEpLCBwYXJhbXMsIGRhdGEsIHVzZWRQYXRoUGFyYW1zKTtcbiAgfVxuXG4gIHVzZWRQYXRoUGFyYW1zW2tleV0gPSB0cnVlO1xuICByZXR1cm4gcGFyYW1zW2tleV07XG5cbn1cblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdG9KU09OKG9iajogYW55KTphbnkge1xuICBsZXQgcmV0T2JqOiBhbnkgPSB7fTtcblxuICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvYmopIHtcblxuICAgIGlmICghKG9ialtwcm9wTmFtZV0gaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIShwcm9wTmFtZS5jaGFyQXQoMCkgPT09ICckJykpIHtcbiAgICAgIHJldE9ialtwcm9wTmFtZV0gPSBvYmpbcHJvcE5hbWVdO1xuICAgIH1cblxuICB9XG4gIHJldHVybiByZXRPYmo7XG59XG5cblxuY2xhc3MgRmFrZVJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBfcmVzcDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHJlc3A6IGFueSkge1xuICAgIHRoaXMuX3Jlc3AgPSByZXNwO1xuICB9XG5cbiAgZ2V0IF9ib2R5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX3Jlc3ApO1xuICB9XG5cbiAganNvbiA9ICgpID0+IHRoaXMuX3Jlc3A7XG59XG5cblxuZnVuY3Rpb24gZ2V0TW9ja2VkUmVzcG9uc2UoY29sbGVjdGlvbjoge2NvbGxlY3Rpb246IGFueSwgbG9va3VwUGFyYW1zPzogYW55fSwgcGFyYW1zOiBhbnksIGRhdGE6IGFueSwgcmVxdWVzdE1ldGhvZDogUmVxdWVzdE1ldGhvZCkge1xuICBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5HZXQpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbGxlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29sbGVjdGlvbi5sb29rdXBQYXJhbXMgfHwgT2JqZWN0LmtleXMoY29sbGVjdGlvbi5sb29rdXBQYXJhbXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW1ba2V5XSA9PT0gcGFyYW1zW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISFyZXN1bHQubGVuZ3RoID8gcmVzdWx0WzBdIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmlsdGVyKChpdG06IGFueSkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIHBhcmFtc1trZXldID09PSBpdG1bY29sbGVjdGlvbi5sb29rdXBQYXJhbXNba2V5XV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLlBvc3QpIHtcbiAgICBjb2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLlB1dCB8fCByZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLlBhdGNoICkge1xuICAgICAgbGV0IHJlc3VsdCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maW5kKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChpdGVtW2tleV0gIT09IHBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuRGVsZXRlKSB7XG4gICAgICBsZXQgcmVzdWx0SWR4ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBwYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgY29sbGVjdGlvbi5jb2xsZWN0aW9uLnNwbGljZShyZXN1bHRJZHgsIDEpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQWN0aW9uLnRzIiwiZXhwb3J0IGVudW0gVEdldFBhcmFtc01hcHBpbmdUeXBlIHtcbiAgUGxhaW4sXG4gIEJyYWNrZXRcbn1cblxuZXhwb3J0IGNsYXNzIFJlc291cmNlR2xvYmFsQ29uZmlnIHtcbiAgc3RhdGljIHVybDogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcbiAgc3RhdGljIHBhdGg6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IG51bGw7XG4gIHN0YXRpYyBoZWFkZXJzOiBhbnkgfCBQcm9taXNlPGFueT4gPSB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH07XG4gIHN0YXRpYyBwYXJhbXM6IGFueSB8IFByb21pc2U8YW55PiA9IG51bGw7XG4gIHN0YXRpYyBkYXRhOiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuXG4gIHN0YXRpYyBnZXRQYXJhbXNNYXBwaW5nVHlwZTogYW55ID0gVEdldFBhcmFtc01hcHBpbmdUeXBlLlBsYWluO1xuICBzdGF0aWMgbW9ja1Jlc3BvbnNlczogYm9vbGVhbiA9IGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlR2xvYmFsQ29uZmlnLnRzIiwiaW1wb3J0IHsgSW5qZWN0b3IsIFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VQcm92aWRlcnMge1xuXG4gIHN0YXRpYyBtYWluUHJvdmlkZXJzTmFtZTogc3RyaW5nID0gJ19fbWFpblByb3ZpZGVycyc7XG4gIHN0YXRpYyBwcm92aWRlcnM6IHsgW2lkOiBzdHJpbmddOiBQcm92aWRlcltdIH0gPSB7XG4gICAgX19tYWluUHJvdmlkZXJzOiBbXVxuICB9O1xuXG4gIHN0YXRpYyBhZGQocmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBzdWJTZXQ6IHN0cmluZyA9IG51bGwpIHtcblxuICAgIGlmICghc3ViU2V0KSB7XG4gICAgICBzdWJTZXQgPSB0aGlzLm1haW5Qcm92aWRlcnNOYW1lO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm92aWRlcnNbc3ViU2V0XSkge1xuICAgICAgdGhpcy5wcm92aWRlcnNbc3ViU2V0XSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBkZXBzOiBhbnlbXSA9ICg8YW55PlJlZmxlY3QpLmdldE1ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIHJlc291cmNlKTtcblxuICAgIGlmICghZGVwcyB8fCBkZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVwcyA9IFtIdHRwLCBJbmplY3Rvcl07XG4gICAgfVxuXG4gICAgdGhpcy5wcm92aWRlcnNbc3ViU2V0XS5wdXNoKFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiByZXNvdXJjZSxcbiAgICAgICAgdXNlRmFjdG9yeTogKC4uLmFyZ3M6IGFueVtdKSA9PiBuZXcgcmVzb3VyY2UoLi4uYXJncyksXG4gICAgICAgIGRlcHM6IGRlcHNcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0KHN1YlNldDogc3RyaW5nID0gbnVsbCk6IFByb3ZpZGVyW10ge1xuXG4gICAgaWYgKCFzdWJTZXQpIHtcbiAgICAgIHN1YlNldCA9IHRoaXMubWFpblByb3ZpZGVyc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW3N1YlNldF0gfHwgW107XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMudHMiLCJcbmltcG9ydCB7UmVzb3VyY2VTdG9yYWdlUGFyYW1zQmFzZX0gZnJvbSBcIi4vSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtSZXNvdXJjZX0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlU3RvcmFnZTxNb2RlbFR5cGU+IHtcblxuICBwcml2YXRlIF9zdG9yYWdlOiBNb2RlbFR5cGVbXSA9IFtdO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXNvdXJjZTogUmVzb3VyY2UsIHByaXZhdGUgX3BhcmFtczogUmVzb3VyY2VTdG9yYWdlUGFyYW1zQmFzZSkge1xuXG4gIH1cblxuICBnZXQgZGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICBjb25zdCBhY3Rpb24gPSAoPGFueT50aGlzLl9yZXNvdXJjZSlbdGhpcy5fcGFyYW1zLmFjdGlvbl07XG4gICAgICBhY3Rpb24odGhpcy5fcGFyYW1zLmFjdGlvblBhcmFtcylcbiAgICAgICAgLmJpbmQodGhpcy5fcmVzb3VyY2UpXG4gICAgICAgIC5zdWJzY3JpYmUoKG1vZGVsczogTW9kZWxUeXBlW10pID0+IHRoaXMuX3N0b3JhZ2UgPSBtb2RlbHMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VTdG9yYWdlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBSZWZsZWN0aXZlSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUFjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUNSVUQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VDUlVEQmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZU1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUGFyYW1zJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlU3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVN0b3JhZ2VQYXJhbXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvSW50ZXJmYWNlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgcHJvdmlkZXJzID0gUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW1Jlc291cmNlUHJvdmlkZXJzLm1haW5Qcm92aWRlcnNOYW1lXTtcbiAgICBsZXQgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShwcm92aWRlcnMpO1xuICAgIHByb3ZpZGVycy5mb3JFYWNoKHByb3ZpZGVyID0+IGluamVjdG9yLmdldChwcm92aWRlcikpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNvdXJjZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW1Jlc291cmNlUHJvdmlkZXJzLm1haW5Qcm92aWRlcnNOYW1lXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoc3ViU2V0OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc291cmNlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbc3ViU2V0XSA/IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tzdWJTZXRdIDogW11cbiAgICB9O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9uZ3gtcmVzb3VyY2UudHMiLCJpbXBvcnQgeyBSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNZXRob2QgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb24gfSBmcm9tICcuL1Jlc291cmNlQWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlQ1JVRDxUUXVlcnksIFRTaG9ydCwgVEZ1bGw+IGV4dGVuZHMgUmVzb3VyY2Uge1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgaXNBcnJheTogdHJ1ZVxuICB9KVxuICBxdWVyeTogUmVzb3VyY2VNZXRob2Q8VFF1ZXJ5LCBUU2hvcnRbXT47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICBnZXQ6IFJlc291cmNlTWV0aG9kPHsgaWQ6IGFueSB9LCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICB9KVxuICBzYXZlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlB1dCxcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICB1cGRhdGU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuRGVsZXRlLFxuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIHJlbW92ZTogUmVzb3VyY2VNZXRob2Q8eyBpZDogYW55IH0sIGFueT47XG5cbiAgLy8gQWxpYXMgdG8gc2F2ZVxuICBjcmVhdGUoZGF0YTogVEZ1bGwsIGNhbGxiYWNrPzogKHJlczogVEZ1bGwpID0+IGFueSk6IFRGdWxsIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTWV0aG9kIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uIH0gZnJvbSAnLi9SZXNvdXJjZUFjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUNSVURCYXNlPFRRdWVyeSwgVEtleXMsIFRTaG9ydCwgVEZ1bGw+IGV4dGVuZHMgUmVzb3VyY2Uge1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgaXNBcnJheTogdHJ1ZVxuICB9KVxuICBxdWVyeTogUmVzb3VyY2VNZXRob2Q8VFF1ZXJ5LCBUU2hvcnRbXT47XG5cbiAgQFJlc291cmNlQWN0aW9uKClcbiAgZ2V0OiBSZXNvdXJjZU1ldGhvZDxUS2V5cywgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgfSlcbiAgc2F2ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QdXRcbiAgfSlcbiAgdXBkYXRlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkRlbGV0ZVxuICB9KVxuICByZW1vdmU6IFJlc291cmNlTWV0aG9kPFRLZXlzLCBhbnk+O1xuXG4gIC8vIEFsaWFzIHRvIHNhdmVcbiAgY3JlYXRlKGRhdGE6IFRGdWxsLCBjYWxsYmFjaz86IChyZXM6IFRGdWxsKSA9PiBhbnkpOiBURnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShkYXRhLCBjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQ1JVREJhc2UudHMiLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuXG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZU1vZGVsPFI+IHtcblxuICAkcmVzb2x2ZWQ6IGJvb2xlYW47XG4gICRvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gICRhYm9ydFJlcXVlc3Q6ICgpID0+IHZvaWQ7XG4gICRyZXNvdXJjZTogUjtcblxuICBzdGF0aWMgY3JlYXRlKGRhdGE6IGFueSA9IHt9LCBjb21taXQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc29sZS5lcnJvcignTW9kZWwgc3RhdGljIGNyZWF0ZSBpcyBub3QgYXZhaWxiYWxlIGFueW1vcmUuIFBsZWFzZSB1c2UgcmVzb3VyY2UuY3JlYXRlTW9kZWwoKSBtZXRob2QnKTtcbiAgfVxuXG4gIHB1YmxpYyAkc2V0RGF0YShkYXRhOiBhbnkpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cblxuICBwdWJsaWMgJHNhdmUoKSB7XG5cbiAgICBpZiAodGhpcy5pc05ldygpKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiR1cGRhdGUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyAkY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ2NyZWF0ZScpO1xuICB9XG5cbiAgcHVibGljICR1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgndXBkYXRlJyk7XG4gIH1cblxuICBwdWJsaWMgJHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCdyZW1vdmUnKTtcbiAgfVxuXG4gIHB1YmxpYyB0b0pTT04oKTphbnkge1xuICAgIGxldCByZXRPYmo6IGFueSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gdGhpcykge1xuXG4gICAgICBpZiAoISgoPGFueT50aGlzKVtwcm9wTmFtZV0gaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIShwcm9wTmFtZS5jaGFyQXQoMCkgPT09ICckJykpIHtcbiAgICAgICAgcmV0T2JqW3Byb3BOYW1lXSA9ICg8YW55PnRoaXMpW3Byb3BOYW1lXTtcbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gcmV0T2JqO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzTmV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKDxhbnk+dGhpcylbJ2lkJ107XG4gIH1cblxuICBwcml2YXRlICRyZXNvdXJjZV9tZXRob2QobWV0aG9kTmFtZTogc3RyaW5nKSB7XG5cbiAgICBpZiAoIXRoaXMuJHJlc291cmNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBZb3VyIFJlc291cmNlIGlzIG5vdCBzZXQuIFBsZWFzZSB1c2UgcmVzb3VyY2UuY3JlYXRlTW9kZWwoKSBtZXRob2QgdG8gY3JlYXRlIG1vZGVsLmApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKCEoPGFueT50aGlzLiRyZXNvdXJjZSlbbWV0aG9kTmFtZV0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdXIgUmVzb3VyY2UgaGFzIG5vIGltcGxlbWVudGVkICR7bWV0aG9kTmFtZX0gbWV0aG9kLmApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgKDxhbnk+dGhpcy4kcmVzb3VyY2UpW21ldGhvZE5hbWVdKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb3VyY2VQYXJhbXNCYXNlIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi9SZXNvdXJjZVByb3ZpZGVycyc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNvdXJjZVBhcmFtcyhwYXJhbXM6IFJlc291cmNlUGFyYW1zQmFzZSA9IHt9KSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IFR5cGU8UmVzb3VyY2U+KSB7XG5cblxuICAgIHRhcmdldC5wcm90b3R5cGUuZ2V0UmVzb3VyY2VPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcy5hZGQyUHJvdmlkZXMgIT09IGZhbHNlKSB7XG4gICAgICBSZXNvdXJjZVByb3ZpZGVycy5hZGQodGFyZ2V0LCBwYXJhbXMucHJvdmlkZXJzU3ViU2V0KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5yZW1vdmVUcmFpbGluZ1NsYXNoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFwYXJhbXMucmVtb3ZlVHJhaWxpbmdTbGFzaDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy51cmwpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy51cmw7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucGF0aCkge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0UGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5wYXRoO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmhlYWRlcnMpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldEhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuaGVhZGVycztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5wYXJhbXMpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFBhcmFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5wYXJhbXM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZGF0YSkge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5kYXRhO1xuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIlxuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2VQYXJhbXNCYXNlfSBmcm9tIFwiLi9JbnRlcmZhY2VzXCI7XG5pbXBvcnQge1Jlc291cmNlfSBmcm9tIFwiLi9SZXNvdXJjZVwiO1xuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2V9IGZyb20gXCIuL1Jlc291cmNlU3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMoc3RvcmFnZU9wdGlvbnM/OiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXNCYXNlKSB7XG5cbiAgc3RvcmFnZU9wdGlvbnMgPSBzdG9yYWdlT3B0aW9ucyB8fCB7fTtcblxuICBpZiAoc3RvcmFnZU9wdGlvbnMuYWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICBzdG9yYWdlT3B0aW9ucy5hY3Rpb24gPSAncXVlcnknO1xuICB9XG5cbiAgaWYgKHN0b3JhZ2VPcHRpb25zLmFjdGlvblBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RvcmFnZU9wdGlvbnMuYWN0aW9uUGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogUmVzb3VyY2UsIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcbiAgICAoPGFueT50YXJnZXQpW3Byb3BlcnR5S2V5XSA9IG5ldyBSZXNvdXJjZVN0b3JhZ2UodGFyZ2V0LCBzdG9yYWdlT3B0aW9ucyk7XG4gICAgKDxhbnk+dGFyZ2V0KS5fc3RvcmFnZSA9ICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldO1xuICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VTdG9yYWdlUGFyYW1zLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=