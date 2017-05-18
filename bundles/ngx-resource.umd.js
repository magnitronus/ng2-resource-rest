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














var ResourceModule = ResourceModule_1 = (function () {
    function ResourceModule() {
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
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYWE3Y2I3NjAyNDViY2UwNjk4MyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VTdG9yYWdlUGFyYW1zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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LENBQUM7UUFDSixDQUFDO0lBRUgsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7OztBQ3JEaUQ7QUFHNUMsK0JBQWdDLGNBQTBDO0lBRTlFLGNBQWMsR0FBRyxjQUFjLElBQUksRUFBRSxDQUFDO0lBRXRDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QyxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxNQUFnQixFQUFFLFdBQW1CO1FBQzlDLE1BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLHlFQUFlLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLE1BQU8sQ0FBQyxRQUFRLEdBQVMsTUFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztBQUVKLENBQUM7Ozs7Ozs7QUN2QkQsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Im5neC1yZXNvdXJjZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvaHR0cFwiLCBcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9jb21tb25cIiwgXCJyeGpzL1J4XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC1yZXNvdXJjZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LXJlc291cmNlXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvaHR0cFwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0sIHJvb3RbXCJyeGpzL1J4XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhYTdjYjc2MDI0NWJjZTA2OTgzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBIdHRwLCBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUmVzb3VyY2VHbG9iYWxDb25maWcgfSBmcm9tICcuL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmltcG9ydCB7IFJlc291cmNlUGFyYW1zQmFzZSB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbkJhc2UgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VNb2RlbCB9IGZyb20gJy4vUmVzb3VyY2VNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSB7XG5cbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF9wYXRoOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF9oZWFkZXJzOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9wYXJhbXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2RhdGE6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHAsIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIEdldCBtYWluIHVybCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHJldHVybnMge3N0cmluZ3xQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXRVcmwobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3VybCB8fCB0aGlzLl9nZXRVcmwobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcudXJsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSB1cmxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgc2V0VXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXJsID0gdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXRoIG9mIHRoZSByZXNvdXJjZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfFByb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldFBhdGgobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGggfHwgdGhpcy5fZ2V0UGF0aChtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSBwYXRoXG4gICAqIEBwYXJhbSBwYXRoXG4gICAqL1xuICBzZXRQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycyB8fCB0aGlzLl9nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLmhlYWRlcnMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIGhlYWRlcnNcbiAgICogQHBhcmFtIGhlYWRlcnNcbiAgICovXG4gIHNldEhlYWRlcnMoaGVhZGVyczogYW55KSB7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgcGFyYW1zXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fHt9fVxuICAgKi9cbiAgZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbXMgfHwgdGhpcy5fZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCByZXNvdXJjZSBwYXJhbXNcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgc2V0UGFyYW1zKHBhcmFtczogYW55KSB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IGRhdGFcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT58e319XG4gICAqL1xuICBnZXREYXRhKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhIHx8IHRoaXMuX2dldERhdGEobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcuZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCByZXNvdXJjZSBwYXJhbXNcbiAgICogQHBhcmFtIGRhdGFcbiAgICovXG4gIHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBUaGF0IGlzIGNhbGxlZCBiZWZvcmUgZXhlY3V0aW5nIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcVxuICAgKi9cbiAgcmVxdWVzdEludGVyY2VwdG9yKHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IFJlcXVlc3Qge1xuICAgIHJldHVybiByZXE7XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBvYnNlcnZhYmxlIGludGVyY2VwdG9yXG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICByZXNwb25zZUludGVyY2VwdG9yKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiwgcmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAocmVzID0+IHJlcy5fYm9keSA/IHJlcy5qc29uKCkgOiBudWxsKTtcbiAgfVxuXG4gIHJlbW92ZVRyYWlsaW5nU2xhc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0UmVzdWx0T2JqZWN0KCk6IGFueSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbWFwKGl0ZW06IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBmaWx0ZXIoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRSZXNvdXJjZU9wdGlvbnMoKTogUmVzb3VyY2VQYXJhbXNCYXNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbiAgY3JlYXRlTW9kZWwoKTogUmVzb3VyY2VNb2RlbDxhbnk+IHtcbiAgICBsZXQgcmV0ID0gdGhpcy5pbml0UmVzdWx0T2JqZWN0KCk7XG4gICAgcmV0LiRyZXNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG5cblxuXG4gIHByb3RlY3RlZCBfcmVxdWVzdChyZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM6IFJlc291cmNlQWN0aW9uQmFzZSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGxldCByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICByZXR1cm4gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvci5iaW5kKHRoaXMpKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgIHRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcihyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKTtcblxuICB9XG5cblxuICBwcml2YXRlIF9nZXRVcmwobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGF0aChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nfFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGF0YShtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZS50cyIsImltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2QsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1xuICBSZXNvdXJjZUFjdGlvbkJhc2UsIFJlc291cmNlUmVzcG9uc2VGaWx0ZXIsIFJlc291cmNlUmVzcG9uc2VJbml0UmVzdWx0LCBSZXNvdXJjZVJlc3BvbnNlTWFwLFxuICBSZXNvdXJjZVJlc3VsdFxufSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTW9kZWwgfSBmcm9tICcuL1Jlc291cmNlTW9kZWwnO1xuaW1wb3J0IHsgQ29ubmVjdGFibGVPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnLCBUR2V0UGFyYW1zTWFwcGluZ1R5cGUgfSBmcm9tICcuL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNvdXJjZUFjdGlvbihtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKSB7XG5cbiAgbWV0aG9kT3B0aW9ucyA9IG1ldGhvZE9wdGlvbnMgfHwge307XG5cbiAgaWYgKG1ldGhvZE9wdGlvbnMubWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICBtZXRob2RPcHRpb25zLm1ldGhvZCA9IFJlcXVlc3RNZXRob2QuR2V0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IFJlc291cmNlLCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG5cbiAgICAoPGFueT50YXJnZXQpW3Byb3BlcnR5S2V5XSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IFJlc291cmNlUmVzdWx0PGFueT4gfCBSZXNvdXJjZU1vZGVsPFJlc291cmNlPiB7XG5cbiAgICAgIGxldCBkYXRhID0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogbnVsbDtcbiAgICAgIGxldCBwYXJhbXMgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogbnVsbDtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IHBhcmFtcztcbiAgICAgICAgcGFyYW1zID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc291cmNlT3B0aW9ucyA9IHRoaXMuZ2V0UmVzb3VyY2VPcHRpb25zKCk7XG5cbiAgICAgIGxldCBpc0dldFJlcXVlc3QgPSBtZXRob2RPcHRpb25zLm1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5HZXQ7XG5cbiAgICAgIGxldCByZXQ6IFJlc291cmNlUmVzdWx0PGFueT4gfCBSZXNvdXJjZU1vZGVsPFJlc291cmNlPiA9IG51bGw7XG5cbiAgICAgIGxldCBtYXA6IFJlc291cmNlUmVzcG9uc2VNYXAgPSBtZXRob2RPcHRpb25zLm1hcCA/IG1ldGhvZE9wdGlvbnMubWFwLmJpbmQodGhpcykgOiB0aGlzLm1hcDtcbiAgICAgIGxldCBmaWx0ZXI6IFJlc291cmNlUmVzcG9uc2VGaWx0ZXIgPSBtZXRob2RPcHRpb25zLmZpbHRlciA/IG1ldGhvZE9wdGlvbnMuZmlsdGVyIDogdGhpcy5maWx0ZXI7XG4gICAgICBsZXQgaW5pdE9iamVjdDogUmVzb3VyY2VSZXNwb25zZUluaXRSZXN1bHQgPSBtZXRob2RPcHRpb25zLmluaXRSZXN1bHRPYmplY3QgP1xuICAgICAgICBtZXRob2RPcHRpb25zLmluaXRSZXN1bHRPYmplY3QgOiB0aGlzLmluaXRSZXN1bHRPYmplY3Q7XG5cbiAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuICAgICAgICByZXQgPSB7fTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNBcnJheSkge1xuICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS4kcmVzb3VyY2UgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgZGF0YSB0byByZXRcbiAgICAgICAgICAgIHJldCA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS50b0pTT04gPyBkYXRhLnRvSlNPTigpIDogdG9KU09OKGRhdGEpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IGluaXRPYmplY3QuYmluZCh0aGlzKSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgbGV0IG1haW5EZWZlcnJlZFN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PiA9IG51bGw7XG4gICAgICBsZXQgbWFpbk9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gbnVsbDtcblxuICAgICAgcmV0LiRyZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgcmV0LiRvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgICAgIH0pLmZsYXRNYXAoKCkgPT4gbWFpbk9ic2VydmFibGUpO1xuICAgICAgcmV0LiRhYm9ydFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIHJldC4kcmVzb3VyY2UgPSB0aGlzO1xuXG5cbiAgICAgIGZ1bmN0aW9uIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCkge1xuICAgICAgICBpZiAobWFpbkRlZmVycmVkU3Vic2NyaWJlcikge1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIubmV4dCgpO1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldC4kb2JzZXJ2YWJsZSA9IHJldC4kb2JzZXJ2YWJsZS5wdWJsaXNoKCk7XG4gICAgICAgICg8Q29ubmVjdGFibGVPYnNlcnZhYmxlPGFueT4+cmV0LiRvYnNlcnZhYmxlKS5jb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMudXJsIHx8IHRoaXMuZ2V0VXJsKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMucGF0aCB8fCB0aGlzLmdldFBhdGgobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5oZWFkZXJzIHx8IHRoaXMuZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnBhcmFtcyB8fCB0aGlzLmdldFBhcmFtcyhtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLmRhdGEgfHwgdGhpcy5nZXREYXRhKG1ldGhvZE9wdGlvbnMpKVxuICAgICAgXSlcbiAgICAgICAgLnRoZW4oKGRhdGFBbGw6IGFueVtdKSA9PiB7XG5cbiAgICAgICAgICBpZiAocmV0LiRyZXNvbHZlZCkge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG51bGwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gZGF0YUFsbFswXSArIGRhdGFBbGxbMV07XG4gICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhkYXRhQWxsWzJdKTtcbiAgICAgICAgICBsZXQgZGVmUGF0aFBhcmFtcyA9IGRhdGFBbGxbM107XG5cbiAgICAgICAgICBsZXQgdXNlZFBhdGhQYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICAgIGxldCB1c2VkUGF0aFBhcmFtc1ZhbHVlczogYW55ID0ge307XG5cbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgcGFyYW1zKSB7XG5cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YUFsbFs0XSwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXRoUGFyYW1zID0gdXJsLm1hdGNoKC97KFtefV0qKX0vZykgfHwgW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcmFtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgIGxldCBwYXRoUGFyYW0gPSBwYXRoUGFyYW1zW2ldO1xuXG4gICAgICAgICAgICAgIGxldCBwYXRoS2V5ID0gcGF0aFBhcmFtLnN1YnN0cigxLCBwYXRoUGFyYW0ubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgIGxldCBpc01hbmRhdG9yeSA9IHBhdGhLZXlbMF0gPT09ICchJztcbiAgICAgICAgICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEtleSA9IHBhdGhLZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGlzR2V0T25seSA9IHBhdGhLZXlbMF0gPT09ICc6JztcbiAgICAgICAgICAgICAgaWYgKGlzR2V0T25seSkge1xuICAgICAgICAgICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlRm9yUGF0aChwYXRoS2V5LCBkZWZQYXRoUGFyYW1zLCBwYXJhbXMgfHwgZGF0YSwgdXNlZFBhdGhQYXJhbXMpO1xuICAgICAgICAgICAgICBpZiAoaXNHZXRPbmx5ICYmICFwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtwYXRoS2V5XTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYW5kYXRvcnkpIHtcblxuICAgICAgICAgICAgICAgICAgbGV0IGNvbnNvbGVNc2cgPSBgTWFuZGF0b3J5ICR7cGF0aFBhcmFtfSBwYXRoIHBhcmFtZXRlciBpcyBtaXNzaW5nYDtcblxuICAgICAgICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoY29uc29sZU1zZykpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihjb25zb2xlTXNnKTtcblxuICAgICAgICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIHVybC5pbmRleE9mKHBhdGhQYXJhbSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZWRQYXRoUGFyYW1zVmFsdWVzW3BhdGhLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgLy8gUmVwbGFjaW5nIGluIHRoZSB1cmxcbiAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocGF0aFBhcmFtLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmluZyBkb3VibGUgc2xhc2hlZCBmcm9tIGZpbmFsIHVybFxuICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC9cXC8rL2csICcvJyk7XG4gICAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKCc6LycsICc6Ly8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IHRoaXMucmVtb3ZlVHJhaWxpbmdTbGFzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoKSB7XG4gICAgICAgICAgICB3aGlsZSAodXJsW3VybC5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gUmVtb3ZlIG1hcHBlZCBwYXJhbXNcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGVmUGF0aFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGRlZlBhdGhQYXJhbXNba2V5XVswXSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBkZWZQYXRoUGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBEZWZhdWx0IHNlYXJjaCBwYXJhbXMgb3IgZGF0YVxuICAgICAgICAgIGxldCBib2R5OiBzdHJpbmcgPSBudWxsO1xuXG4gICAgICAgICAgbGV0IHNlYXJjaFBhcmFtczogYW55O1xuICAgICAgICAgIGlmIChpc0dldFJlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIEdFVFxuICAgICAgICAgICAgc2VhcmNoUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmUGF0aFBhcmFtcywgZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5PTiBHRVRcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIGxldCBfYm9keTogYW55ID0ge307XG4gICAgICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLnJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgX2JvZHlbYCR7bWV0aG9kT3B0aW9ucy5yb290Tm9kZX1gXSA9IGRhdGE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2JvZHkgPSBkYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShfYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBkZWZQYXRoUGFyYW1zO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gU2V0dGluZyBzZWFyY2ggcGFyYW1zXG4gICAgICAgICAgbGV0IHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zID0gISFtZXRob2RPcHRpb25zLnF1ZXJ5RW5jb2RlciA/IG5ldyBVUkxTZWFyY2hQYXJhbXMoJycsIG5ldyBtZXRob2RPcHRpb25zLnF1ZXJ5RW5jb2RlcigpKSA6IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICAgIGlmICghcGFyYW1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdXNlZFBhdGhQYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogYW55ID0gc2VhcmNoUGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGRpbmcgVFMgaWYgbmVlZGVkXG4gICAgICAgICAgbGV0IHRzTmFtZSA9IG1ldGhvZE9wdGlvbnMuYWRkVGltZXN0YW1wIHx8IHJlc291cmNlT3B0aW9ucy5hZGRUaW1lc3RhbXA7XG4gICAgICAgICAgaWYgKHRzTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRzTmFtZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0c05hbWUgPSAndHMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VhcmNoLmFwcGVuZCh0c05hbWUsICcnICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92aW5nIENvbnRlbnQtVHlwZSBoZWFkZXIgaWYgbm8gYm9keVxuICAgICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgICAgaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgcmVxdWVzdCBvcHRpb25zXG4gICAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kT3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IG1ldGhvZE9wdGlvbnMud2l0aENyZWRlbnRpYWxzIHx8IHJlc291cmNlT3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgcmVxdWVzdCBvYmplY3RcbiAgICAgICAgICBsZXQgcmVxID0gbmV3IFJlcXVlc3QocmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgICAgcmVxID0gbWV0aG9kT3B0aW9ucy5yZXF1ZXN0SW50ZXJjZXB0b3IgP1xuICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXF1ZXN0SW50ZXJjZXB0b3IocmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJbnRlcmNlcHRvcihyZXEsIG1ldGhvZE9wdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKCFyZXEpIHtcbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKCdSZXF1ZXN0IGlzIG51bGwnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZXF1ZXN0IGlzIG51bGwnKTtcblxuICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcmVxdWVzdE9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcblxuICAgICAgICAgIGlmIChSZXNvdXJjZUdsb2JhbENvbmZpZy5tb2NrUmVzcG9uc2VzICYmIHJlc291cmNlT3B0aW9ucy5tb2NrICE9PSBmYWxzZSAmJiBtZXRob2RPcHRpb25zLm1vY2sgIT09IGZhbHNlICYmICghIW1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gfHwgISFyZXNvdXJjZU9wdGlvbnMubW9ja0NvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICBsZXQgbW9ja0NvbGxlY3Rpb24gPSAhIW1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gPyBtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uIDoge2NvbGxlY3Rpb246IHJlc291cmNlT3B0aW9ucy5tb2NrQ29sbGVjdGlvbn07XG4gICAgICAgICAgICBsZXQgcmVzcDogYW55ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9ja0NvbGxlY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmVzcCA9IG1vY2tDb2xsZWN0aW9uKHByb3BlcnR5S2V5LCB1c2VkUGF0aFBhcmFtc1ZhbHVlcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzcCA9IGdldE1vY2tlZFJlc3BvbnNlKG1vY2tDb2xsZWN0aW9uLCB1c2VkUGF0aFBhcmFtc1ZhbHVlcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzcCA9IG5ldyBGYWtlUmVzcG9uc2UocmVzcCk7XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuZnJvbShbcmVzcF0pO1xuXG4gICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yLmJpbmQodGhpcykocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERvaW5nIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3QocmVxLCBtZXRob2RPcHRpb25zKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuXG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IHJlcXVlc3RPYnNlcnZhYmxlO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG5cbiAgICAgICAgICAgICAgbGV0IHJlcVN1YnNjcjogU3Vic2NyaXB0aW9uID0gcmVxdWVzdE9ic2VydmFibGUuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RpbmcgYXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXNwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmV0dXJuZWQgZGF0YSBzaG91bGQgYmUgYW4gYXJyYXkuIFJlY2VpdmVkJywgcmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZXNwSXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwSXRlbS4kcmVzb3VyY2UgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldERhdGFUb09iamVjdChpbml0T2JqZWN0LmJpbmQocmVzcEl0ZW0uJHJlc291cmNlKSgpLCByZXNwSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGluZyBvYmplY3RcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdSZXR1cm5lZCBkYXRhIHNob3VsZCBiZSBhbiBvYmplY3QuIFJlY2VpdmVkJywgcmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcihyZXNwKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGFUb09iamVjdChyZXQsIG1hcChyZXNwKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXQpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXQuJGFib3J0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0LiRyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXFTdWJzY3IudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuXG5cblxuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJldDtcblxuICAgIH07XG5cbiAgfTtcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRhVG9PYmplY3QocmV0OiBhbnksIHJlc3A6IGFueSk6IGFueSB7XG5cbiAgaWYgKHJldC4kc2V0RGF0YSkge1xuICAgIHJldC4kc2V0RGF0YShyZXNwKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3QuYXNzaWduKHJldCwgcmVzcCk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXMsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gIC8vLyBDb252ZXJ0IGRhdGVzIHRvIElTTyBmb3JtYXQgc3RyaW5nXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBzZWFyY2guYXBwZW5kKGtleSwgdmFsdWUudG9JU09TdHJpbmcoKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuICAgIHN3aXRjaCAoUmVzb3VyY2VHbG9iYWxDb25maWcuZ2V0UGFyYW1zTWFwcGluZ1R5cGUpIHtcblxuICAgICAgY2FzZSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuUGxhaW46XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgYXJyX3ZhbHVlIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBzZWFyY2guYXBwZW5kKGtleSwgYXJyX3ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8vIENvbnZlcnQgZGF0ZXMgdG8gSVNPIGZvcm1hdCBzdHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuQnJhY2tldDpcbiAgICAgICAgLy8vIENvbnZlcnQgb2JqZWN0IGFuZCBhcnJheXMgdG8gcXVlcnkgcGFyYW1zXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2gsIGtleSArICdbJyArIGsgKyAnXScsIHZhbHVlW2tdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cblxuICBzZWFyY2guYXBwZW5kKGtleSwgdmFsdWUpO1xuXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRm9yUGF0aChrZXk6IHN0cmluZywgcGFyYW1zOiBhbnksIGRhdGE6IGFueSwgdXNlZFBhdGhQYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChkYXRhW2tleV0pICYmIHR5cGVvZiBkYXRhW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgdXNlZFBhdGhQYXJhbXNba2V5XSA9IHRydWU7XG4gICAgcmV0dXJuIGRhdGFba2V5XTtcbiAgfVxuXG4gIGlmIChpc051bGxPclVuZGVmaW5lZChwYXJhbXNba2V5XSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChwYXJhbXNba2V5XVswXSA9PT0gJ0AnKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlRm9yUGF0aChwYXJhbXNba2V5XS5zdWJzdHIoMSksIHBhcmFtcywgZGF0YSwgdXNlZFBhdGhQYXJhbXMpO1xuICB9XG5cbiAgdXNlZFBhdGhQYXJhbXNba2V5XSA9IHRydWU7XG4gIHJldHVybiBwYXJhbXNba2V5XTtcblxufVxuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0b0pTT04ob2JqOiBhbnkpOmFueSB7XG4gIGxldCByZXRPYmo6IGFueSA9IHt9O1xuXG4gIGZvciAobGV0IHByb3BOYW1lIGluIG9iaikge1xuXG4gICAgaWYgKCEob2JqW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhKHByb3BOYW1lLmNoYXJBdCgwKSA9PT0gJyQnKSkge1xuICAgICAgcmV0T2JqW3Byb3BOYW1lXSA9IG9ialtwcm9wTmFtZV07XG4gICAgfVxuXG4gIH1cbiAgcmV0dXJuIHJldE9iajtcbn1cblxuXG5jbGFzcyBGYWtlUmVzcG9uc2Uge1xuICBwcml2YXRlIF9yZXNwOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVzcDogYW55KSB7XG4gICAgdGhpcy5fcmVzcCA9IHJlc3A7XG4gIH1cblxuICBnZXQgX2JvZHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fcmVzcCk7XG4gIH1cblxuICBqc29uID0gKCkgPT4gdGhpcy5fcmVzcDtcbn1cblxuXG5mdW5jdGlvbiBnZXRNb2NrZWRSZXNwb25zZShjb2xsZWN0aW9uOiB7Y29sbGVjdGlvbjogYW55LCBsb29rdXBQYXJhbXM/OiBhbnl9LCBwYXJhbXM6IGFueSwgZGF0YTogYW55LCByZXF1ZXN0TWV0aG9kOiBSZXF1ZXN0TWV0aG9kKSB7XG4gIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcyB8fCBPYmplY3Qua2V5cyhjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb247XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbVtrZXldID09PSBwYXJhbXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIXJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0gOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maWx0ZXIoKGl0bTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbi5sb29rdXBQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgcGFyYW1zW2tleV0gPT09IGl0bVtjb2xsZWN0aW9uLmxvb2t1cFBhcmFtc1trZXldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUG9zdCkge1xuICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUHV0IHx8IHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuUGF0Y2ggKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmQoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5EZWxldGUpIHtcbiAgICAgIGxldCByZXN1bHRJZHggPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChpdGVtW2tleV0gIT09IHBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uc3BsaWNlKHJlc3VsdElkeCwgMSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VBY3Rpb24udHMiLCJleHBvcnQgZW51bSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUge1xuICBQbGFpbixcbiAgQnJhY2tldFxufVxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VHbG9iYWxDb25maWcge1xuICBzdGF0aWMgdXJsOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgcGF0aDogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcbiAgc3RhdGljIGhlYWRlcnM6IGFueSB8IFByb21pc2U8YW55PiA9IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfTtcbiAgc3RhdGljIHBhcmFtczogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcbiAgc3RhdGljIGRhdGE6IGFueSB8IFByb21pc2U8YW55PiA9IG51bGw7XG5cbiAgc3RhdGljIGdldFBhcmFtc01hcHBpbmdUeXBlOiBhbnkgPSBUR2V0UGFyYW1zTWFwcGluZ1R5cGUuUGxhaW47XG4gIHN0YXRpYyBtb2NrUmVzcG9uc2VzOiBib29sZWFuID0gZmFsc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJpbXBvcnQgeyBJbmplY3RvciwgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVByb3ZpZGVycyB7XG5cbiAgc3RhdGljIG1haW5Qcm92aWRlcnNOYW1lOiBzdHJpbmcgPSAnX19tYWluUHJvdmlkZXJzJztcbiAgc3RhdGljIHByb3ZpZGVyczogeyBbaWQ6IHN0cmluZ106IFByb3ZpZGVyW10gfSA9IHtcbiAgICBfX21haW5Qcm92aWRlcnM6IFtdXG4gIH07XG5cbiAgc3RhdGljIGFkZChyZXNvdXJjZTogVHlwZTxSZXNvdXJjZT4sIHN1YlNldDogc3RyaW5nID0gbnVsbCkge1xuXG4gICAgaWYgKCFzdWJTZXQpIHtcbiAgICAgIHN1YlNldCA9IHRoaXMubWFpblByb3ZpZGVyc05hbWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVyc1tzdWJTZXRdKSB7XG4gICAgICB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGRlcHM6IGFueVtdID0gKDxhbnk+UmVmbGVjdCkuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgcmVzb3VyY2UpO1xuXG4gICAgaWYgKCFkZXBzIHx8IGRlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZXBzID0gW0h0dHAsIEluamVjdG9yXTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdLnB1c2goXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IHJlc291cmNlLFxuICAgICAgICB1c2VGYWN0b3J5OiAoLi4uYXJnczogYW55W10pID0+IG5ldyByZXNvdXJjZSguLi5hcmdzKSxcbiAgICAgICAgZGVwczogZGVwc1xuICAgICAgfVxuICAgICk7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQoc3ViU2V0OiBzdHJpbmcgPSBudWxsKTogUHJvdmlkZXJbXSB7XG5cbiAgICBpZiAoIXN1YlNldCkge1xuICAgICAgc3ViU2V0ID0gdGhpcy5tYWluUHJvdmlkZXJzTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbc3ViU2V0XSB8fCBbXTtcblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVByb3ZpZGVycy50cyIsIlxuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2VQYXJhbXNCYXNlfSBmcm9tIFwiLi9JbnRlcmZhY2VzXCI7XG5pbXBvcnQge1Jlc291cmNlfSBmcm9tIFwiLi9SZXNvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VTdG9yYWdlPE1vZGVsVHlwZT4ge1xuXG4gIHByaXZhdGUgX3N0b3JhZ2U6IE1vZGVsVHlwZVtdID0gW107XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc291cmNlOiBSZXNvdXJjZSwgcHJpdmF0ZSBfcGFyYW1zOiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXNCYXNlKSB7XG5cbiAgfVxuXG4gIGdldCBkYXRhKCkge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9ICg8YW55PnRoaXMuX3Jlc291cmNlKVt0aGlzLl9wYXJhbXMuYWN0aW9uXTtcbiAgICAgIGFjdGlvbih0aGlzLl9wYXJhbXMuYWN0aW9uUGFyYW1zKVxuICAgICAgICAuYmluZCh0aGlzLl9yZXNvdXJjZSlcbiAgICAgICAgLnN1YnNjcmliZSgobW9kZWxzOiBNb2RlbFR5cGVbXSkgPT4gdGhpcy5fc3RvcmFnZSA9IG1vZGVscyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuL3NyYy9SZXNvdXJjZVByb3ZpZGVycyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQ1JVRCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUNSVURCYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlTW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VQYXJhbXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VTdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlU3RvcmFnZVBhcmFtcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9JbnRlcmZhY2VzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc291cmNlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbUmVzb3VyY2VQcm92aWRlcnMubWFpblByb3ZpZGVyc05hbWVdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChzdWJTZXQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tzdWJTZXRdID8gUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW3N1YlNldF0gOiBbXVxuICAgIH07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL25neC1yZXNvdXJjZS50cyIsImltcG9ydCB7IFJlcXVlc3RNZXRob2QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbiB9IGZyb20gJy4vUmVzb3VyY2VBY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDUlVEPFRRdWVyeSwgVFNob3J0LCBURnVsbD4gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBpc0FycmF5OiB0cnVlXG4gIH0pXG4gIHF1ZXJ5OiBSZXNvdXJjZU1ldGhvZDxUUXVlcnksIFRTaG9ydFtdPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIGdldDogUmVzb3VyY2VNZXRob2Q8eyBpZDogYW55IH0sIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0LFxuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGUsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogVEZ1bGwge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUNSVUQudHMiLCJpbXBvcnQgeyBSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNZXRob2QgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb24gfSBmcm9tICcuL1Jlc291cmNlQWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlQ1JVREJhc2U8VFF1ZXJ5LCBUS2V5cywgVFNob3J0LCBURnVsbD4gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBpc0FycmF5OiB0cnVlXG4gIH0pXG4gIHF1ZXJ5OiBSZXNvdXJjZU1ldGhvZDxUUXVlcnksIFRTaG9ydFtdPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oKVxuICBnZXQ6IFJlc291cmNlTWV0aG9kPFRLZXlzLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICB9KVxuICBzYXZlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlB1dFxuICB9KVxuICB1cGRhdGU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuRGVsZXRlXG4gIH0pXG4gIHJlbW92ZTogUmVzb3VyY2VNZXRob2Q8VEtleXMsIGFueT47XG5cbiAgLy8gQWxpYXMgdG8gc2F2ZVxuICBjcmVhdGUoZGF0YTogVEZ1bGwsIGNhbGxiYWNrPzogKHJlczogVEZ1bGwpID0+IGFueSk6IFRGdWxsIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VDUlVEQmFzZS50cyIsImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5cblxuZXhwb3J0IGNsYXNzIFJlc291cmNlTW9kZWw8Uj4ge1xuXG4gICRyZXNvbHZlZDogYm9vbGVhbjtcbiAgJG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgJGFib3J0UmVxdWVzdDogKCkgPT4gdm9pZDtcbiAgJHJlc291cmNlOiBSO1xuXG4gIHN0YXRpYyBjcmVhdGUoZGF0YTogYW55ID0ge30sIGNvbW1pdDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNb2RlbCBzdGF0aWMgY3JlYXRlIGlzIG5vdCBhdmFpbGJhbGUgYW55bW9yZS4gUGxlYXNlIHVzZSByZXNvdXJjZS5jcmVhdGVNb2RlbCgpIG1ldGhvZCcpO1xuICB9XG5cbiAgcHVibGljICRzZXREYXRhKGRhdGE6IGFueSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIHB1YmxpYyAkc2F2ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzTmV3KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuJHVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljICRjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgnY3JlYXRlJyk7XG4gIH1cblxuICBwdWJsaWMgJHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCd1cGRhdGUnKTtcbiAgfVxuXG4gIHB1YmxpYyAkcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ3JlbW92ZScpO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpOmFueSB7XG4gICAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzKSB7XG5cbiAgICAgIGlmICghKCg8YW55PnRoaXMpW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhKHByb3BOYW1lLmNoYXJBdCgwKSA9PT0gJyQnKSkge1xuICAgICAgICByZXRPYmpbcHJvcE5hbWVdID0gKDxhbnk+dGhpcylbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZXRPYmo7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoPGFueT50aGlzKVsnaWQnXTtcbiAgfVxuXG4gIHByaXZhdGUgJHJlc291cmNlX21ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcpIHtcblxuICAgIGlmICghdGhpcy4kcmVzb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdXIgUmVzb3VyY2UgaXMgbm90IHNldC4gUGxlYXNlIHVzZSByZXNvdXJjZS5jcmVhdGVNb2RlbCgpIG1ldGhvZCB0byBjcmVhdGUgbW9kZWwuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoISg8YW55PnRoaXMuJHJlc291cmNlKVttZXRob2ROYW1lXSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBoYXMgbm8gaW1wbGVtZW50ZWQgJHttZXRob2ROYW1lfSBtZXRob2QuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAoPGFueT50aGlzLiRyZXNvdXJjZSlbbWV0aG9kTmFtZV0odGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlTW9kZWwudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVBhcmFtc0Jhc2UgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuL1Jlc291cmNlUHJvdmlkZXJzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlUGFyYW1zKHBhcmFtczogUmVzb3VyY2VQYXJhbXNCYXNlID0ge30pIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogVHlwZTxSZXNvdXJjZT4pIHtcblxuXG4gICAgdGFyZ2V0LnByb3RvdHlwZS5nZXRSZXNvdXJjZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLmFkZDJQcm92aWRlcyAhPT0gZmFsc2UpIHtcbiAgICAgIFJlc291cmNlUHJvdmlkZXJzLmFkZCh0YXJnZXQsIHBhcmFtcy5wcm92aWRlcnNTdWJTZXQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLnJlbW92ZVRyYWlsaW5nU2xhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIXBhcmFtcy5yZW1vdmVUcmFpbGluZ1NsYXNoO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnVybCkge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnVybDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5wYXRoKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnBhdGg7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaGVhZGVycykge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0SGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5oZWFkZXJzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhcmFtcykge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0UGFyYW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnBhcmFtcztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5kYXRhKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRhdGE7XG4gICAgICB9O1xuICAgIH1cblxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlUGFyYW1zLnRzIiwiXG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZVBhcmFtc0Jhc2V9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcbmltcG9ydCB7UmVzb3VyY2V9IGZyb20gXCIuL1Jlc291cmNlXCI7XG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZX0gZnJvbSBcIi4vUmVzb3VyY2VTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlU3RvcmFnZVBhcmFtcyhzdG9yYWdlT3B0aW9ucz86IFJlc291cmNlU3RvcmFnZVBhcmFtc0Jhc2UpIHtcblxuICBzdG9yYWdlT3B0aW9ucyA9IHN0b3JhZ2VPcHRpb25zIHx8IHt9O1xuXG4gIGlmIChzdG9yYWdlT3B0aW9ucy5hY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHN0b3JhZ2VPcHRpb25zLmFjdGlvbiA9ICdxdWVyeSc7XG4gIH1cblxuICBpZiAoc3RvcmFnZU9wdGlvbnMuYWN0aW9uUGFyYW1zID09PSB1bmRlZmluZWQpIHtcbiAgICBzdG9yYWdlT3B0aW9ucy5hY3Rpb25QYXJhbXMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBSZXNvdXJjZSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gbmV3IFJlc291cmNlU3RvcmFnZSh0YXJnZXQsIHN0b3JhZ2VPcHRpb25zKTtcbiAgICAoPGFueT50YXJnZXQpLl9zdG9yYWdlID0gKDxhbnk+dGFyZ2V0KVtwcm9wZXJ0eUtleV07XG4gIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVN0b3JhZ2VQYXJhbXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==