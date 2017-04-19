(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "@angular/common", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["ngx-resource"] = factory(require("@angular/http"), require("@angular/core"), require("@angular/common"), require("rxjs/Rx"));
	else
		root["ngx-resource"] = factory(root["@angular/http"], root["@angular/core"], root["@angular/common"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(13);
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
            var map = methodOptions.map ? methodOptions.map : this.map;
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
                        ret = initObject();
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
                                            return setDataToObject(initObject(), respItem);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a"]; });
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(6);
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



/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkZDBkYTNjNWViZmQ2ZTE1MmY5OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9uZ3gtcmVzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlQ1JVRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVEQmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUc7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsQ0FBQztRQUNKLENBQUM7SUFFSCxDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7O0FDeERELGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJuZ3gtcmVzb3VyY2UudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJyeGpzL1J4XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2h0dHBcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCIsIFwicnhqcy9SeFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtcmVzb3VyY2VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5neC1yZXNvdXJjZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wiQGFuZ3VsYXIvY29tbW9uXCJdLCByb290W1wicnhqcy9SeFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZDBkYTNjNWViZmQ2ZTE1MmY5OCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSHR0cCwgUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5pbXBvcnQgeyBSZXNvdXJjZVBhcmFtc0Jhc2UgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb25CYXNlIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlTW9kZWwgfSBmcm9tICcuL1Jlc291cmNlTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2Uge1xuXG4gIHByaXZhdGUgX3VybDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGVhZGVyczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfcGFyYW1zOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9kYXRhOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwLCBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgbWFpbiB1cmwgb2YgdGhlIHJlc291cmNlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0VXJsKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl91cmwgfHwgdGhpcy5fZ2V0VXJsKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnVybCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgdXJsXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIHNldFVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF0aCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHJldHVybnMge3N0cmluZ3xQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXRQYXRoKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9wYXRoIHx8IHRoaXMuX2dldFBhdGgobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucGF0aCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcmVzb3VyY2UgcGF0aFxuICAgKiBAcGFyYW0gcGF0aFxuICAgKi9cbiAgc2V0UGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVyc1xuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pn1cbiAgICovXG4gIGdldEhlYWRlcnMobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnMgfHwgdGhpcy5fZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSBoZWFkZXJzXG4gICAqIEBwYXJhbSBoZWFkZXJzXG4gICAqL1xuICBzZXRIZWFkZXJzKGhlYWRlcnM6IGFueSkge1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7YW55fFByb21pc2U8YW55Pnx7fX1cbiAgICovXG4gIGdldFBhcmFtcyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zIHx8IHRoaXMuX2dldFBhcmFtcyhtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgcmVzb3VyY2UgcGFyYW1zXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG4gIHNldFBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBkYXRhXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fHt9fVxuICAgKi9cbiAgZ2V0RGF0YShtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSB8fCB0aGlzLl9nZXREYXRhKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLmRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgcmVzb3VyY2UgcGFyYW1zXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqL1xuICBzZXREYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cblxuICAvKipcbiAgICogVGhhdCBpcyBjYWxsZWQgYmVmb3JlIGV4ZWN1dGluZyByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXFcbiAgICovXG4gIHJlcXVlc3RJbnRlcmNlcHRvcihyZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBSZXF1ZXN0IHtcbiAgICByZXR1cm4gcmVxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3Qgb2JzZXJ2YWJsZSBpbnRlcmNlcHRvclxuICAgKiBAcGFyYW0gb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgcmVzcG9uc2VJbnRlcmNlcHRvcihvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4sIHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHJlcyA9PiByZXMuX2JvZHkgPyByZXMuanNvbigpIDogbnVsbCk7XG4gIH1cblxuICByZW1vdmVUcmFpbGluZ1NsYXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdFJlc3VsdE9iamVjdCgpOiBhbnkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIG1hcChpdGVtOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgZmlsdGVyKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0UmVzb3VyY2VPcHRpb25zKCk6IFJlc291cmNlUGFyYW1zQmFzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIGNyZWF0ZU1vZGVsKCk6IFJlc291cmNlTW9kZWw8YW55PiB7XG4gICAgbGV0IHJldCA9IHRoaXMuaW5pdFJlc3VsdE9iamVjdCgpO1xuICAgIHJldC4kcmVzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuXG5cblxuICBwcm90ZWN0ZWQgX3JlcXVlc3QocmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zOiBSZXNvdXJjZUFjdGlvbkJhc2UgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgcmVxdWVzdE9ic2VydmFibGUgPSB0aGlzLmh0dHAucmVxdWVzdChyZXEpO1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgcmV0dXJuIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvciA/XG4gICAgICBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IuYmluZCh0aGlzKShyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG5cbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0VXJsKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBzdHJpbmd8UHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhdGgobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmFtcyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERhdGEobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2UudHMiLCJpbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgUmVzb3VyY2VBY3Rpb25CYXNlLCBSZXNvdXJjZVJlc3BvbnNlRmlsdGVyLCBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCwgUmVzb3VyY2VSZXNwb25zZU1hcCxcbiAgUmVzb3VyY2VSZXN1bHRcbn0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi9SZXNvdXJjZU1vZGVsJztcbmltcG9ydCB7IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSZXNvdXJjZUdsb2JhbENvbmZpZywgVEdldFBhcmFtc01hcHBpbmdUeXBlIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUmVzb3VyY2VBY3Rpb24obWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSkge1xuXG4gIG1ldGhvZE9wdGlvbnMgPSBtZXRob2RPcHRpb25zIHx8IHt9O1xuXG4gIGlmIChtZXRob2RPcHRpb25zLm1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWV0aG9kT3B0aW9ucy5tZXRob2QgPSBSZXF1ZXN0TWV0aG9kLkdldDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBSZXNvdXJjZSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuXG4gICAgKDxhbnk+dGFyZ2V0KVtwcm9wZXJ0eUtleV0gPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBSZXNvdXJjZVJlc3VsdDxhbnk+IHwgUmVzb3VyY2VNb2RlbDxSZXNvdXJjZT4ge1xuXG4gICAgICBsZXQgZGF0YSA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IG51bGw7XG4gICAgICBsZXQgcGFyYW1zID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IG51bGw7XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZGF0YTtcbiAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgICAgIHBhcmFtcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXNvdXJjZU9wdGlvbnMgPSB0aGlzLmdldFJlc291cmNlT3B0aW9ucygpO1xuXG4gICAgICBsZXQgaXNHZXRSZXF1ZXN0ID0gbWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0O1xuXG4gICAgICBsZXQgcmV0OiBSZXNvdXJjZVJlc3VsdDxhbnk+IHwgUmVzb3VyY2VNb2RlbDxSZXNvdXJjZT4gPSBudWxsO1xuXG4gICAgICBsZXQgbWFwOiBSZXNvdXJjZVJlc3BvbnNlTWFwID0gbWV0aG9kT3B0aW9ucy5tYXAgPyBtZXRob2RPcHRpb25zLm1hcCA6IHRoaXMubWFwO1xuICAgICAgbGV0IGZpbHRlcjogUmVzb3VyY2VSZXNwb25zZUZpbHRlciA9IG1ldGhvZE9wdGlvbnMuZmlsdGVyID8gbWV0aG9kT3B0aW9ucy5maWx0ZXIgOiB0aGlzLmZpbHRlcjtcbiAgICAgIGxldCBpbml0T2JqZWN0OiBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCA9IG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA/XG4gICAgICAgIG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA6IHRoaXMuaW5pdFJlc3VsdE9iamVjdDtcblxuICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldCA9IHt9O1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG4gICAgICAgICAgcmV0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLiRyZXNvdXJjZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2V0dGluZyBkYXRhIHRvIHJldFxuICAgICAgICAgICAgcmV0ID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvSlNPTiA/IGRhdGEudG9KU09OKCkgOiB0b0pTT04oZGF0YSk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gaW5pdE9iamVjdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgbGV0IG1haW5EZWZlcnJlZFN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PiA9IG51bGw7XG4gICAgICBsZXQgbWFpbk9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+ID0gbnVsbDtcblxuICAgICAgcmV0LiRyZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgcmV0LiRvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgICAgIH0pLmZsYXRNYXAoKCkgPT4gbWFpbk9ic2VydmFibGUpO1xuICAgICAgcmV0LiRhYm9ydFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIHJldC4kcmVzb3VyY2UgPSB0aGlzO1xuXG5cbiAgICAgIGZ1bmN0aW9uIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCkge1xuICAgICAgICBpZiAobWFpbkRlZmVycmVkU3Vic2NyaWJlcikge1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIubmV4dCgpO1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICBtYWluRGVmZXJyZWRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldC4kb2JzZXJ2YWJsZSA9IHJldC4kb2JzZXJ2YWJsZS5wdWJsaXNoKCk7XG4gICAgICAgICg8Q29ubmVjdGFibGVPYnNlcnZhYmxlPGFueT4+cmV0LiRvYnNlcnZhYmxlKS5jb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMudXJsIHx8IHRoaXMuZ2V0VXJsKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMucGF0aCB8fCB0aGlzLmdldFBhdGgobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5oZWFkZXJzIHx8IHRoaXMuZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLnBhcmFtcyB8fCB0aGlzLmdldFBhcmFtcyhtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLmRhdGEgfHwgdGhpcy5nZXREYXRhKG1ldGhvZE9wdGlvbnMpKVxuICAgICAgXSlcbiAgICAgICAgLnRoZW4oKGRhdGFBbGw6IGFueVtdKSA9PiB7XG5cbiAgICAgICAgICBpZiAocmV0LiRyZXNvbHZlZCkge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG51bGwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gZGF0YUFsbFswXSArIGRhdGFBbGxbMV07XG4gICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhkYXRhQWxsWzJdKTtcbiAgICAgICAgICBsZXQgZGVmUGF0aFBhcmFtcyA9IGRhdGFBbGxbM107XG5cbiAgICAgICAgICBsZXQgdXNlZFBhdGhQYXJhbXM6IGFueSA9IHt9O1xuICAgICAgICAgIGxldCB1c2VkUGF0aFBhcmFtc1ZhbHVlczogYW55ID0ge307XG5cbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgcGFyYW1zKSB7XG5cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YUFsbFs0XSwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXRoUGFyYW1zID0gdXJsLm1hdGNoKC97KFtefV0qKX0vZykgfHwgW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcmFtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgIGxldCBwYXRoUGFyYW0gPSBwYXRoUGFyYW1zW2ldO1xuXG4gICAgICAgICAgICAgIGxldCBwYXRoS2V5ID0gcGF0aFBhcmFtLnN1YnN0cigxLCBwYXRoUGFyYW0ubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgIGxldCBpc01hbmRhdG9yeSA9IHBhdGhLZXlbMF0gPT09ICchJztcbiAgICAgICAgICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEtleSA9IHBhdGhLZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGlzR2V0T25seSA9IHBhdGhLZXlbMF0gPT09ICc6JztcbiAgICAgICAgICAgICAgaWYgKGlzR2V0T25seSkge1xuICAgICAgICAgICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGdldFZhbHVlRm9yUGF0aChwYXRoS2V5LCBkZWZQYXRoUGFyYW1zLCBwYXJhbXMgfHwgZGF0YSwgdXNlZFBhdGhQYXJhbXMpO1xuICAgICAgICAgICAgICBpZiAoaXNHZXRPbmx5ICYmICFwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtwYXRoS2V5XTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYW5kYXRvcnkpIHtcblxuICAgICAgICAgICAgICAgICAgbGV0IGNvbnNvbGVNc2cgPSBgTWFuZGF0b3J5ICR7cGF0aFBhcmFtfSBwYXRoIHBhcmFtZXRlciBpcyBtaXNzaW5nYDtcblxuICAgICAgICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoY29uc29sZU1zZykpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihjb25zb2xlTXNnKTtcblxuICAgICAgICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIHVybC5pbmRleE9mKHBhdGhQYXJhbSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZWRQYXRoUGFyYW1zVmFsdWVzW3BhdGhLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgLy8gUmVwbGFjaW5nIGluIHRoZSB1cmxcbiAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocGF0aFBhcmFtLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmluZyBkb3VibGUgc2xhc2hlZCBmcm9tIGZpbmFsIHVybFxuICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC9cXC8rL2csICcvJyk7XG4gICAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKCc6LycsICc6Ly8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1ldGhvZE9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IHRoaXMucmVtb3ZlVHJhaWxpbmdTbGFzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoKSB7XG4gICAgICAgICAgICB3aGlsZSAodXJsW3VybC5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gUmVtb3ZlIG1hcHBlZCBwYXJhbXNcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGVmUGF0aFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGRlZlBhdGhQYXJhbXNba2V5XVswXSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBkZWZQYXRoUGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBEZWZhdWx0IHNlYXJjaCBwYXJhbXMgb3IgZGF0YVxuICAgICAgICAgIGxldCBib2R5OiBzdHJpbmcgPSBudWxsO1xuXG4gICAgICAgICAgbGV0IHNlYXJjaFBhcmFtczogYW55O1xuICAgICAgICAgIGlmIChpc0dldFJlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIEdFVFxuICAgICAgICAgICAgc2VhcmNoUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmUGF0aFBhcmFtcywgZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5PTiBHRVRcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIGxldCBfYm9keTogYW55ID0ge307XG4gICAgICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLnJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgX2JvZHlbYCR7bWV0aG9kT3B0aW9ucy5yb290Tm9kZX1gXSA9IGRhdGE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2JvZHkgPSBkYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShfYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBkZWZQYXRoUGFyYW1zO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gU2V0dGluZyBzZWFyY2ggcGFyYW1zXG4gICAgICAgICAgbGV0IHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zID0gISFtZXRob2RPcHRpb25zLnF1ZXJ5RW5jb2RlciA/IG5ldyBVUkxTZWFyY2hQYXJhbXMoJycsIG5ldyBtZXRob2RPcHRpb25zLnF1ZXJ5RW5jb2RlcigpKSA6IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuICAgICAgICAgIGlmICghcGFyYW1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdXNlZFBhdGhQYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogYW55ID0gc2VhcmNoUGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGRpbmcgVFMgaWYgbmVlZGVkXG4gICAgICAgICAgbGV0IHRzTmFtZSA9IG1ldGhvZE9wdGlvbnMuYWRkVGltZXN0YW1wIHx8IHJlc291cmNlT3B0aW9ucy5hZGRUaW1lc3RhbXA7XG4gICAgICAgICAgaWYgKHRzTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRzTmFtZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0c05hbWUgPSAndHMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VhcmNoLmFwcGVuZCh0c05hbWUsICcnICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92aW5nIENvbnRlbnQtVHlwZSBoZWFkZXIgaWYgbm8gYm9keVxuICAgICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgICAgaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgcmVxdWVzdCBvcHRpb25zXG4gICAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kT3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IG1ldGhvZE9wdGlvbnMud2l0aENyZWRlbnRpYWxzIHx8IHJlc291cmNlT3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgcmVxdWVzdCBvYmplY3RcbiAgICAgICAgICBsZXQgcmVxID0gbmV3IFJlcXVlc3QocmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgICAgcmVxID0gbWV0aG9kT3B0aW9ucy5yZXF1ZXN0SW50ZXJjZXB0b3IgP1xuICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXF1ZXN0SW50ZXJjZXB0b3IocmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJbnRlcmNlcHRvcihyZXEsIG1ldGhvZE9wdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKCFyZXEpIHtcbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEVycm9yKCdSZXF1ZXN0IGlzIG51bGwnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZXF1ZXN0IGlzIG51bGwnKTtcblxuICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcmVxdWVzdE9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcblxuICAgICAgICAgIGlmIChSZXNvdXJjZUdsb2JhbENvbmZpZy5tb2NrUmVzcG9uc2VzICYmIHJlc291cmNlT3B0aW9ucy5tb2NrICE9PSBmYWxzZSAmJiBtZXRob2RPcHRpb25zLm1vY2sgIT09IGZhbHNlICYmICghIW1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gfHwgISFyZXNvdXJjZU9wdGlvbnMubW9ja0NvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICBsZXQgbW9ja0NvbGxlY3Rpb24gPSAhIW1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gPyBtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uIDoge2NvbGxlY3Rpb246IHJlc291cmNlT3B0aW9ucy5tb2NrQ29sbGVjdGlvbn07XG4gICAgICAgICAgICBsZXQgcmVzcDogYW55ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9ja0NvbGxlY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmVzcCA9IG1vY2tDb2xsZWN0aW9uKHByb3BlcnR5S2V5LCB1c2VkUGF0aFBhcmFtc1ZhbHVlcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzcCA9IGdldE1vY2tlZFJlc3BvbnNlKG1vY2tDb2xsZWN0aW9uLCB1c2VkUGF0aFBhcmFtc1ZhbHVlcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzcCA9IG5ldyBGYWtlUmVzcG9uc2UocmVzcCk7XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuZnJvbShbcmVzcF0pO1xuXG4gICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yLmJpbmQodGhpcykocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERvaW5nIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3QocmVxLCBtZXRob2RPcHRpb25zKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuXG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IHJlcXVlc3RPYnNlcnZhYmxlO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG5cbiAgICAgICAgICAgICAgbGV0IHJlcVN1YnNjcjogU3Vic2NyaXB0aW9uID0gcmVxdWVzdE9ic2VydmFibGUuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RpbmcgYXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXNwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmV0dXJuZWQgZGF0YSBzaG91bGQgYmUgYW4gYXJyYXkuIFJlY2VpdmVkJywgcmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZXNwSXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwSXRlbS4kcmVzb3VyY2UgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldERhdGFUb09iamVjdChpbml0T2JqZWN0KCksIHJlc3BJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIG9iamVjdFxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JldHVybmVkIGRhdGEgc2hvdWxkIGJlIGFuIG9iamVjdC4gUmVjZWl2ZWQnLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKHJlc3ApKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVRvT2JqZWN0KHJldCwgbWFwKHJlc3ApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJldCk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnI6IGFueSkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJldCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldC4kYWJvcnRSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXQuJHJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcVN1YnNjci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHJldC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG5cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmV0O1xuXG4gICAgfTtcblxuICB9O1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb09iamVjdChyZXQ6IGFueSwgcmVzcDogYW55KTogYW55IHtcblxuICBpZiAocmV0LiRzZXREYXRhKSB7XG4gICAgcmV0LiRzZXREYXRhKHJlc3ApO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5hc3NpZ24ocmV0LCByZXNwKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2g6IFVSTFNlYXJjaFBhcmFtcywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgLy8vIENvbnZlcnQgZGF0ZXMgdG8gSVNPIGZvcm1hdCBzdHJpbmdcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG4gICAgc3dpdGNoIChSZXNvdXJjZUdsb2JhbENvbmZpZy5nZXRQYXJhbXNNYXBwaW5nVHlwZSkge1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjpcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBhcnJfdmFsdWUgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHNlYXJjaC5hcHBlbmQoa2V5LCBhcnJfdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlKTtcblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5CcmFja2V0OlxuICAgICAgICAvLy8gQ29udmVydCBvYmplY3QgYW5kIGFycmF5cyB0byBxdWVyeSBwYXJhbXNcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5ICsgJ1snICsgayArICddJywgdmFsdWVba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGb3JQYXRoKGtleTogc3RyaW5nLCBwYXJhbXM6IGFueSwgZGF0YTogYW55LCB1c2VkUGF0aFBhcmFtczogYW55KTogc3RyaW5nIHtcblxuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGRhdGFba2V5XSkgJiYgdHlwZW9mIGRhdGFba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgICByZXR1cm4gZGF0YVtrZXldO1xuICB9XG5cbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtc1trZXldKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JQYXRoKHBhcmFtc1trZXldLnN1YnN0cigxKSwgcGFyYW1zLCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gIH1cblxuICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgcmV0dXJuIHBhcmFtc1trZXldO1xuXG59XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvSlNPTihvYmo6IGFueSk6YW55IHtcbiAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgZm9yIChsZXQgcHJvcE5hbWUgaW4gb2JqKSB7XG5cbiAgICBpZiAoIShvYmpbcHJvcE5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEocHJvcE5hbWUuY2hhckF0KDApID09PSAnJCcpKSB7XG4gICAgICByZXRPYmpbcHJvcE5hbWVdID0gb2JqW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gcmV0T2JqO1xufVxuXG5cbmNsYXNzIEZha2VSZXNwb25zZSB7XG4gIHByaXZhdGUgX3Jlc3A6IGFueTtcblxuICBjb25zdHJ1Y3RvcihyZXNwOiBhbnkpIHtcbiAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgfVxuXG4gIGdldCBfYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9yZXNwKTtcbiAgfVxuXG4gIGpzb24gPSAoKSA9PiB0aGlzLl9yZXNwO1xufVxuXG5cbmZ1bmN0aW9uIGdldE1vY2tlZFJlc3BvbnNlKGNvbGxlY3Rpb246IHtjb2xsZWN0aW9uOiBhbnksIGxvb2t1cFBhcmFtcz86IGFueX0sIHBhcmFtczogYW55LCBkYXRhOiBhbnksIHJlcXVlc3RNZXRob2Q6IFJlcXVlc3RNZXRob2QpIHtcbiAgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5jb2xsZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNvbGxlY3Rpb24ubG9va3VwUGFyYW1zIHx8IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtW2tleV0gPT09IHBhcmFtc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbHRlcigoaXRtOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29sbGVjdGlvbi5sb29rdXBQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBwYXJhbXNba2V5XSA9PT0gaXRtW2NvbGxlY3Rpb24ubG9va3VwUGFyYW1zW2tleV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5Qb3N0KSB7XG4gICAgY29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5QdXQgfHwgcmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5QYXRjaCApIHtcbiAgICAgIGxldCByZXN1bHQgPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBwYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSkge1xuICAgICAgbGV0IHJlc3VsdElkeCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5zcGxpY2UocmVzdWx0SWR4LCAxKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsImV4cG9ydCBlbnVtIFRHZXRQYXJhbXNNYXBwaW5nVHlwZSB7XG4gIFBsYWluLFxuICBCcmFja2V0XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUdsb2JhbENvbmZpZyB7XG4gIHN0YXRpYyB1cmw6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IG51bGw7XG4gIHN0YXRpYyBwYXRoOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgaGVhZGVyczogYW55IHwgUHJvbWlzZTxhbnk+ID0ge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9O1xuICBzdGF0aWMgcGFyYW1zOiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuICBzdGF0aWMgZGF0YTogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuICBzdGF0aWMgZ2V0UGFyYW1zTWFwcGluZ1R5cGU6IGFueSA9IFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjtcbiAgc3RhdGljIG1vY2tSZXNwb25zZXM6IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUdsb2JhbENvbmZpZy50cyIsImltcG9ydCB7IEluamVjdG9yLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlUHJvdmlkZXJzIHtcblxuICBzdGF0aWMgbWFpblByb3ZpZGVyc05hbWU6IHN0cmluZyA9ICdfX21haW5Qcm92aWRlcnMnO1xuICBzdGF0aWMgcHJvdmlkZXJzOiB7IFtpZDogc3RyaW5nXTogUHJvdmlkZXJbXSB9ID0ge1xuICAgIF9fbWFpblByb3ZpZGVyczogW11cbiAgfTtcblxuICBzdGF0aWMgYWRkKHJlc291cmNlOiBUeXBlPFJlc291cmNlPiwgc3ViU2V0OiBzdHJpbmcgPSBudWxsKSB7XG5cbiAgICBpZiAoIXN1YlNldCkge1xuICAgICAgc3ViU2V0ID0gdGhpcy5tYWluUHJvdmlkZXJzTmFtZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW3N1YlNldF0pIHtcbiAgICAgIHRoaXMucHJvdmlkZXJzW3N1YlNldF0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGVwczogYW55W10gPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCByZXNvdXJjZSk7XG5cbiAgICBpZiAoIWRlcHMgfHwgZGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlcHMgPSBbSHR0cCwgSW5qZWN0b3JdO1xuICAgIH1cblxuICAgIHRoaXMucHJvdmlkZXJzW3N1YlNldF0ucHVzaChcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogcmVzb3VyY2UsXG4gICAgICAgIHVzZUZhY3Rvcnk6ICguLi5hcmdzOiBhbnlbXSkgPT4gbmV3IHJlc291cmNlKC4uLmFyZ3MpLFxuICAgICAgICBkZXBzOiBkZXBzXG4gICAgICB9XG4gICAgKTtcblxuICB9XG5cbiAgc3RhdGljIGdldChzdWJTZXQ6IHN0cmluZyA9IG51bGwpOiBQcm92aWRlcltdIHtcblxuICAgIGlmICghc3ViU2V0KSB7XG4gICAgICBzdWJTZXQgPSB0aGlzLm1haW5Qcm92aWRlcnNOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1tzdWJTZXRdIHx8IFtdO1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUFjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUNSVUQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VDUlVEQmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZU1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUGFyYW1zJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL0ludGVyZmFjZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tSZXNvdXJjZVByb3ZpZGVycy5tYWluUHJvdmlkZXJzTmFtZV1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKHN1YlNldDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNvdXJjZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW3N1YlNldF0gPyBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbc3ViU2V0XSA6IFtdXG4gICAgfTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vbmd4LXJlc291cmNlLnRzIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTWV0aG9kIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uIH0gZnJvbSAnLi9SZXNvdXJjZUFjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUNSVUQ8VFF1ZXJ5LCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgZ2V0OiBSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgfSlcbiAgc2F2ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QdXQsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgdXBkYXRlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSxcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICByZW1vdmU6IFJlc291cmNlTWV0aG9kPHsgaWQ6IGFueSB9LCBhbnk+O1xuXG4gIC8vIEFsaWFzIHRvIHNhdmVcbiAgY3JlYXRlKGRhdGE6IFRGdWxsLCBjYWxsYmFjaz86IChyZXM6IFRGdWxsKSA9PiBhbnkpOiBURnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShkYXRhLCBjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQ1JVRC50cyIsImltcG9ydCB7IFJlcXVlc3RNZXRob2QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbiB9IGZyb20gJy4vUmVzb3VyY2VBY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDUlVEQmFzZTxUUXVlcnksIFRLZXlzLCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbigpXG4gIGdldDogUmVzb3VyY2VNZXRob2Q8VEtleXMsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0XG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGVcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDxUS2V5cywgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogVEZ1bGwge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VNb2RlbDxSPiB7XG5cbiAgJHJlc29sdmVkOiBib29sZWFuO1xuICAkb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICAkYWJvcnRSZXF1ZXN0OiAoKSA9PiB2b2lkO1xuICAkcmVzb3VyY2U6IFI7XG5cbiAgc3RhdGljIGNyZWF0ZShkYXRhOiBhbnkgPSB7fSwgY29tbWl0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vZGVsIHN0YXRpYyBjcmVhdGUgaXMgbm90IGF2YWlsYmFsZSBhbnltb3JlLiBQbGVhc2UgdXNlIHJlc291cmNlLmNyZWF0ZU1vZGVsKCkgbWV0aG9kJyk7XG4gIH1cblxuICBwdWJsaWMgJHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgcHVibGljICRzYXZlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNOZXcoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdXBkYXRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgJGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCdjcmVhdGUnKTtcbiAgfVxuXG4gIHB1YmxpYyAkdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ3VwZGF0ZScpO1xuICB9XG5cbiAgcHVibGljICRyZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgncmVtb3ZlJyk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCk6YW55IHtcbiAgICBsZXQgcmV0T2JqOiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIHRoaXMpIHtcblxuICAgICAgaWYgKCEoKDxhbnk+dGhpcylbcHJvcE5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEocHJvcE5hbWUuY2hhckF0KDApID09PSAnJCcpKSB7XG4gICAgICAgIHJldE9ialtwcm9wTmFtZV0gPSAoPGFueT50aGlzKVtwcm9wTmFtZV07XG4gICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHJldE9iajtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc05ldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISg8YW55PnRoaXMpWydpZCddO1xuICB9XG5cbiAgcHJpdmF0ZSAkcmVzb3VyY2VfbWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZykge1xuXG4gICAgaWYgKCF0aGlzLiRyZXNvdXJjZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBpcyBub3Qgc2V0LiBQbGVhc2UgdXNlIHJlc291cmNlLmNyZWF0ZU1vZGVsKCkgbWV0aG9kIHRvIGNyZWF0ZSBtb2RlbC5gKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICghKDxhbnk+dGhpcy4kcmVzb3VyY2UpW21ldGhvZE5hbWVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBZb3VyIFJlc291cmNlIGhhcyBubyBpbXBsZW1lbnRlZCAke21ldGhvZE5hbWV9IG1ldGhvZC5gKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgICg8YW55PnRoaXMuJHJlc291cmNlKVttZXRob2ROYW1lXSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VNb2RlbC50cyIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc291cmNlUGFyYW1zQmFzZSB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4vUmVzb3VyY2VQcm92aWRlcnMnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gUmVzb3VyY2VQYXJhbXMocGFyYW1zOiBSZXNvdXJjZVBhcmFtc0Jhc2UgPSB7fSkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBUeXBlPFJlc291cmNlPikge1xuXG5cbiAgICB0YXJnZXQucHJvdG90eXBlLmdldFJlc291cmNlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuYWRkMlByb3ZpZGVzICE9PSBmYWxzZSkge1xuICAgICAgUmVzb3VyY2VQcm92aWRlcnMuYWRkKHRhcmdldCwgcGFyYW1zLnByb3ZpZGVyc1N1YlNldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVtb3ZlVHJhaWxpbmdTbGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2g7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudXJsKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMudXJsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhdGgpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGF0aDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oZWFkZXJzKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmhlYWRlcnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucGFyYW1zKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyYW1zO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmRhdGEpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGF0YTtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==