(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("rxjs/BehaviorSubject"), require("rxjs/Rx"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "rxjs/BehaviorSubject", "rxjs/Rx", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-resource"] = factory(require("@angular/http"), require("@angular/core"), require("rxjs/BehaviorSubject"), require("rxjs/Rx"), require("@angular/common"));
	else
		root["ngx-resource"] = factory(root["@angular/http"], root["@angular/core"], root["rxjs/BehaviorSubject"], root["rxjs/Rx"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
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
        return this._url || this._getUrl(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].url || '';
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
        return this._path || this._getPath(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].path || '';
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
        return this._headers || this._getHeaders(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].headers || {};
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
        return this._params || this._getParams(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].params || {};
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
        return this._data || this._getData(methodOptions) || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].data || {};
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

Resource._init = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
Resource._storage = undefined;
Resource.init = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(undefined);
Resource.instance = undefined;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StorageAction__ = __webpack_require__(6);
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
                if (!!_this.storage && !!methodOptions.storageAction) {
                    mainObservable = mainObservable.do(function (resp) {
                        methodOptions.storageAction.bind(_this)(_this.storage, resp);
                    });
                }
                releaseMainDeferredSubscriber();
            });
            return ret;
        };
        if (!!methodOptions.storageAction && methodOptions.storageAction === __WEBPACK_IMPORTED_MODULE_3__StorageAction__["a" /* StorageAction */].LOAD) {
            target.storageLoad = target[propertyKey];
        }
        ;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceStorage; });

var ResourceStorage = (function () {
    function ResourceStorage(resource, params) {
        var _this = this;
        this.resource = resource;
        this.queryParams = {};
        this._iterationPointer = 0;
        this.loadImmediately = true;
        this.resultData = [];
        this.updateParams(params);
        this.result = Object.assign(this.resultData, { $load: this.load.bind(this), $resolved: false });
        /*this.result.next = (): IteratorResult<any> => {
          if (this._iterationPointer < this.resultData.length) {
              return {
                done: false,
                value: this.resultData[this._iterationPointer++]
              };
            } else {
              return {
                done: true,
                value: null
              };
            }
        };
    
        this.result[Symbol.iterator] = () => {
          return this.result;
        };*/
        this._resultSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](this.result);
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
        this.result = Object.assign([], this.result);
        Object.assign(this.result, this.resultData);
        this.result.$resolved = true;
        this._iterationPointer = 0;
        this._resultSubject.next(this.result);
    };
    return ResourceStorage;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageAction; });
var StorageAction = {
    LOAD: function (storage, resp) {
        storage.resultData = resp.filter(function (item) { return !!item; });
        storage.forceRefresh();
    },
    ADD: function (storage, resp) {
        storage.resultData.push(resp);
        storage.forceRefresh();
    },
    UPDATE: function (storage, resp) {
        var primaryKey = resp.$primaryKey || 'id';
        var idx = storage.resultData.findIndex(function (item) { return item[primaryKey] === resp[primaryKey]; });
        if (idx > -1) {
            storage.resultData[idx] = resp;
            storage.forceRefresh();
        }
    },
    REMOVE: function (storage, resp) {
        var primaryKey = resp.$primaryKey || 'id';
        var idx = storage.resultData.findIndex(function (item) { return item[primaryKey] === resp[primaryKey]; });
        if (idx > -1) {
            storage.resultData.splice(idx, 1);
            storage.forceRefresh();
        }
    },
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_ResourceParams__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__src_ResourceStorage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_SelectStorage__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__src_SelectStorage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_StorageAction__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__src_StorageAction__["a"]; });
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
            var resourceInstance = _this._injector.get(ResourceType);
            ResourceType.instance = resourceInstance;
            ResourceType._init.next(resourceInstance);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(10);
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
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StorageAction", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["o"]; });



/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceModel; });
var ResourceModel = (function () {
    function ResourceModel() {
    }
    ResourceModel.create = function (data, commit) {
        if (data === void 0) { data = {}; }
        if (commit === void 0) { commit = true; }
        console.error('Model static create is not available anymore. Please use resource.createModel() method');
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceStorage__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceParams;


function ResourceParams(params) {
    if (params === void 0) { params = {}; }
    return function (target) {
        target.init = target._init.asObservable().filter(function (instance) { return !!instance; });
        target.getStorage = function (storageParams) {
            if (!!target._storage) {
                target._storage.updateParams(storageParams);
                return target._storage;
            }
            else {
                return new __WEBPACK_IMPORTED_MODULE_1__ResourceStorage__["a" /* ResourceStorage */](target, storageParams);
            }
        };
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectStorage;
function SelectStorage(resource, params) {
    return function (target, propertyKey) {
        var storage = resource.getStorage(params);
        storage._resultSubject.subscribe(function (result) {
            target[propertyKey] = result;
        });
    };
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYjhlOGY0ZjQyZTk5ZjZkM2JhZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JhZ2VBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VsZWN0U3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QkFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHO2dCQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLENBQUM7UUFDSixDQUFDO0lBRUgsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7O0FDL0RLLHVCQUF3QixRQUF3QixFQUFFLE1BQThCO0lBRXBGLE1BQU0sQ0FBQyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUMvQyxJQUFNLE9BQU8sR0FBUyxRQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUNyQyxNQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDO0FBRUosQ0FBQzs7Ozs7OztBQ2ZELGdEIiwiZmlsZSI6Im5neC1yZXNvdXJjZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvY29yZVwiLCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIsIFwicnhqcy9SeFwiLCBcIkBhbmd1bGFyL2NvbW1vblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtcmVzb3VyY2VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LXJlc291cmNlXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvaHR0cFwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiXSwgcm9vdFtcInJ4anMvUnhcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNiOGU4ZjRmNDJlOTlmNmQzYmFmIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBIdHRwLCBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUmVzb3VyY2VHbG9iYWxDb25maWcgfSBmcm9tICcuL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmltcG9ydCB7UmVzb3VyY2VQYXJhbXNCYXNlLCBSZXNvdXJjZVJlc3VsdH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uQmFzZSB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi9SZXNvdXJjZU1vZGVsJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCB7UmVzb3VyY2VTdG9yYWdlfSBmcm9tIFwiLi9SZXNvdXJjZVN0b3JhZ2VcIjtcblxuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2Uge1xuXG4gIHByb3RlY3RlZCBzdGF0aWMgX2luaXQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcblxuICBwcm90ZWN0ZWQgc3RhdGljIF9zdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UgPSB1bmRlZmluZWQ7XG5cbiAgc3RhdGljIGluaXQ6IE9ic2VydmFibGU8YW55PiA9IE9ic2VydmFibGUub2YodW5kZWZpbmVkKTtcbiAgc3RhdGljIGluc3RhbmNlOiBSZXNvdXJjZSA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF91cmw6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX2hlYWRlcnM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3BhcmFtczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfZGF0YTogYW55ID0gbnVsbDtcblxuICBzdG9yYWdlTG9hZDogKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXNvdXJjZVJlc3VsdDxhbnk+O1xuICBzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHAsIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYWluIHVybCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHJldHVybnMge3N0cmluZ3xQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXRVcmwobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3VybCB8fCB0aGlzLl9nZXRVcmwobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcudXJsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSB1cmxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgc2V0VXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXJsID0gdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXRoIG9mIHRoZSByZXNvdXJjZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfFByb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldFBhdGgobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGggfHwgdGhpcy5fZ2V0UGF0aChtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSBwYXRoXG4gICAqIEBwYXJhbSBwYXRoXG4gICAqL1xuICBzZXRQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycyB8fCB0aGlzLl9nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLmhlYWRlcnMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIGhlYWRlcnNcbiAgICogQHBhcmFtIGhlYWRlcnNcbiAgICovXG4gIHNldEhlYWRlcnMoaGVhZGVyczogYW55KSB7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgcGFyYW1zXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fHt9fVxuICAgKi9cbiAgZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbXMgfHwgdGhpcy5fZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCByZXNvdXJjZSBwYXJhbXNcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgc2V0UGFyYW1zKHBhcmFtczogYW55KSB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IGRhdGFcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT58e319XG4gICAqL1xuICBnZXREYXRhKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhIHx8IHRoaXMuX2dldERhdGEobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcuZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCByZXNvdXJjZSBwYXJhbXNcbiAgICogQHBhcmFtIGRhdGFcbiAgICovXG4gIHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBUaGF0IGlzIGNhbGxlZCBiZWZvcmUgZXhlY3V0aW5nIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcVxuICAgKi9cbiAgcmVxdWVzdEludGVyY2VwdG9yKHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IFJlcXVlc3Qge1xuICAgIHJldHVybiByZXE7XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBvYnNlcnZhYmxlIGludGVyY2VwdG9yXG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICByZXNwb25zZUludGVyY2VwdG9yKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiwgcmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAocmVzID0+IHJlcy5fYm9keSA/IHJlcy5qc29uKCkgOiBudWxsKTtcbiAgfVxuXG4gIHJlbW92ZVRyYWlsaW5nU2xhc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0UmVzdWx0T2JqZWN0KCk6IGFueSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbWFwKGl0ZW06IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBmaWx0ZXIoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRSZXNvdXJjZU9wdGlvbnMoKTogUmVzb3VyY2VQYXJhbXNCYXNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbiAgY3JlYXRlTW9kZWwoKTogUmVzb3VyY2VNb2RlbDxhbnk+IHtcbiAgICBsZXQgcmV0ID0gdGhpcy5pbml0UmVzdWx0T2JqZWN0KCk7XG4gICAgcmV0LiRyZXNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG5cblxuXG4gIHByb3RlY3RlZCBfcmVxdWVzdChyZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM6IFJlc291cmNlQWN0aW9uQmFzZSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGxldCByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICByZXR1cm4gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvci5iaW5kKHRoaXMpKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgIHRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcihyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKTtcblxuICB9XG5cblxuICBwcml2YXRlIF9nZXRVcmwobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGF0aChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nfFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGF0YShtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZS50cyIsImltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2QsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1xuICBSZXNvdXJjZUFjdGlvbkJhc2UsIFJlc291cmNlUmVzcG9uc2VGaWx0ZXIsIFJlc291cmNlUmVzcG9uc2VJbml0UmVzdWx0LCBSZXNvdXJjZVJlc3BvbnNlTWFwLFxuICBSZXNvdXJjZVJlc3VsdFxufSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTW9kZWwgfSBmcm9tICcuL1Jlc291cmNlTW9kZWwnO1xuaW1wb3J0IHsgQ29ubmVjdGFibGVPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnLCBUR2V0UGFyYW1zTWFwcGluZ1R5cGUgfSBmcm9tICcuL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmltcG9ydCB7U3RvcmFnZUFjdGlvbn0gZnJvbSBcIi4vU3RvcmFnZUFjdGlvblwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlQWN0aW9uKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpIHtcblxuICBtZXRob2RPcHRpb25zID0gbWV0aG9kT3B0aW9ucyB8fCB7fTtcblxuICBpZiAobWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgIG1ldGhvZE9wdGlvbnMubWV0aG9kID0gUmVxdWVzdE1ldGhvZC5HZXQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogUmVzb3VyY2UsIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcblxuICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogUmVzb3VyY2VSZXN1bHQ8YW55PiB8IFJlc291cmNlTW9kZWw8UmVzb3VyY2U+IHtcblxuICAgICAgbGV0IGRhdGEgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBudWxsO1xuICAgICAgbGV0IHBhcmFtcyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBudWxsO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IG51bGw7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgICAgIGRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcGFyYW1zO1xuICAgICAgICBwYXJhbXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzb3VyY2VPcHRpb25zID0gdGhpcy5nZXRSZXNvdXJjZU9wdGlvbnMoKTtcblxuICAgICAgbGV0IGlzR2V0UmVxdWVzdCA9IG1ldGhvZE9wdGlvbnMubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldDtcblxuICAgICAgbGV0IHJldDogUmVzb3VyY2VSZXN1bHQ8YW55PiB8IFJlc291cmNlTW9kZWw8UmVzb3VyY2U+ID0gbnVsbDtcblxuICAgICAgbGV0IG1hcDogUmVzb3VyY2VSZXNwb25zZU1hcCA9IG1ldGhvZE9wdGlvbnMubWFwID8gbWV0aG9kT3B0aW9ucy5tYXAuYmluZCh0aGlzKSA6IHRoaXMubWFwO1xuICAgICAgbGV0IGZpbHRlcjogUmVzb3VyY2VSZXNwb25zZUZpbHRlciA9IG1ldGhvZE9wdGlvbnMuZmlsdGVyID8gbWV0aG9kT3B0aW9ucy5maWx0ZXIgOiB0aGlzLmZpbHRlcjtcbiAgICAgIGxldCBpbml0T2JqZWN0OiBSZXNvdXJjZVJlc3BvbnNlSW5pdFJlc3VsdCA9IG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA/XG4gICAgICAgIG1ldGhvZE9wdGlvbnMuaW5pdFJlc3VsdE9iamVjdCA6IHRoaXMuaW5pdFJlc3VsdE9iamVjdDtcblxuICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldCA9IHt9O1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG4gICAgICAgICAgcmV0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLiRyZXNvdXJjZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2V0dGluZyBkYXRhIHRvIHJldFxuICAgICAgICAgICAgcmV0ID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvSlNPTiA/IGRhdGEudG9KU09OKCkgOiB0b0pTT04oZGF0YSk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gaW5pdE9iamVjdC5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBsZXQgbWFpbkRlZmVycmVkU3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+ID0gbnVsbDtcbiAgICAgIGxldCBtYWluT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4gPSBudWxsO1xuXG4gICAgICByZXQuJHJlc29sdmVkID0gZmFsc2U7XG4gICAgICByZXQuJG9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgfSkuZmxhdE1hcCgoKSA9PiBtYWluT2JzZXJ2YWJsZSk7XG4gICAgICByZXQuJGFib3J0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICB9O1xuICAgICAgcmV0LiRyZXNvdXJjZSA9IHRoaXM7XG5cblxuICAgICAgZnVuY3Rpb24gcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKSB7XG4gICAgICAgIGlmIChtYWluRGVmZXJyZWRTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlci5uZXh0KCk7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcbiAgICAgICAgcmV0LiRvYnNlcnZhYmxlID0gcmV0LiRvYnNlcnZhYmxlLnB1Ymxpc2goKTtcbiAgICAgICAgKDxDb25uZWN0YWJsZU9ic2VydmFibGU8YW55Pj5yZXQuJG9ic2VydmFibGUpLmNvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy51cmwgfHwgdGhpcy5nZXRVcmwobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5wYXRoIHx8IHRoaXMuZ2V0UGF0aChtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLmhlYWRlcnMgfHwgdGhpcy5nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMucGFyYW1zIHx8IHRoaXMuZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMuZGF0YSB8fCB0aGlzLmdldERhdGEobWV0aG9kT3B0aW9ucykpXG4gICAgICBdKVxuICAgICAgICAudGhlbigoZGF0YUFsbDogYW55W10pID0+IHtcblxuICAgICAgICAgIGlmIChyZXQuJHJlc29sdmVkKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBkYXRhQWxsWzBdICsgZGF0YUFsbFsxXTtcbiAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGRhdGFBbGxbMl0pO1xuICAgICAgICAgIGxldCBkZWZQYXRoUGFyYW1zID0gZGF0YUFsbFszXTtcblxuICAgICAgICAgIGxldCB1c2VkUGF0aFBhcmFtczogYW55ID0ge307XG4gICAgICAgICAgbGV0IHVzZWRQYXRoUGFyYW1zVmFsdWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSB8fCBwYXJhbXMpIHtcblxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhQWxsWzRdLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhdGhQYXJhbXMgPSB1cmwubWF0Y2goL3soW159XSopfS9nKSB8fCBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBhdGhQYXJhbSA9IHBhdGhQYXJhbXNbaV07XG5cbiAgICAgICAgICAgICAgbGV0IHBhdGhLZXkgPSBwYXRoUGFyYW0uc3Vic3RyKDEsIHBhdGhQYXJhbS5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgICAgbGV0IGlzTWFuZGF0b3J5ID0gcGF0aEtleVswXSA9PT0gJyEnO1xuICAgICAgICAgICAgICBpZiAoaXNNYW5kYXRvcnkpIHtcbiAgICAgICAgICAgICAgICBwYXRoS2V5ID0gcGF0aEtleS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgaXNHZXRPbmx5ID0gcGF0aEtleVswXSA9PT0gJzonO1xuICAgICAgICAgICAgICBpZiAoaXNHZXRPbmx5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEtleSA9IHBhdGhLZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWVGb3JQYXRoKHBhdGhLZXksIGRlZlBhdGhQYXJhbXMsIHBhcmFtcyB8fCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gICAgICAgICAgICAgIGlmIChpc0dldE9ubHkgJiYgIXBhcmFtcykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW3BhdGhLZXldO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01hbmRhdG9yeSkge1xuXG4gICAgICAgICAgICAgICAgICBsZXQgY29uc29sZU1zZyA9IGBNYW5kYXRvcnkgJHtwYXRoUGFyYW19IHBhdGggcGFyYW1ldGVyIGlzIG1pc3NpbmdgO1xuXG4gICAgICAgICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcihjb25zb2xlTXNnKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGNvbnNvbGVNc2cpO1xuXG4gICAgICAgICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmluZGV4T2YocGF0aFBhcmFtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXNlZFBhdGhQYXJhbXNWYWx1ZXNbcGF0aEtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAvLyBSZXBsYWNpbmcgaW4gdGhlIHVybFxuICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShwYXRoUGFyYW0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92aW5nIGRvdWJsZSBzbGFzaGVkIGZyb20gZmluYWwgdXJsXG4gICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKTtcbiAgICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJzovJywgJzovLycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoID0gdGhpcy5yZW1vdmVUcmFpbGluZ1NsYXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2gpIHtcbiAgICAgICAgICAgIHdoaWxlICh1cmxbdXJsLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBSZW1vdmUgbWFwcGVkIHBhcmFtc1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZQYXRoUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoZGVmUGF0aFBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGRlZlBhdGhQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIERlZmF1bHQgc2VhcmNoIHBhcmFtcyBvciBkYXRhXG4gICAgICAgICAgbGV0IGJvZHk6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgICBsZXQgc2VhcmNoUGFyYW1zOiBhbnk7XG4gICAgICAgICAgaWYgKGlzR2V0UmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gR0VUXG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZQYXRoUGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTk9OIEdFVFxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IF9ib2R5OiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMucm9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBfYm9keVtgJHttZXRob2RPcHRpb25zLnJvb3ROb2RlfWBdID0gZGF0YTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYm9keSA9IGRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KF9ib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IGRlZlBhdGhQYXJhbXM7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBTZXR0aW5nIHNlYXJjaCBwYXJhbXNcbiAgICAgICAgICBsZXQgc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXMgPSAhIW1ldGhvZE9wdGlvbnMucXVlcnlFbmNvZGVyID8gbmV3IFVSTFNlYXJjaFBhcmFtcygnJywgbmV3IG1ldGhvZE9wdGlvbnMucXVlcnlFbmNvZGVyKCkpIDogbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4gICAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1c2VkUGF0aFBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSBzZWFyY2hQYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZGluZyBUUyBpZiBuZWVkZWRcbiAgICAgICAgICBsZXQgdHNOYW1lID0gbWV0aG9kT3B0aW9ucy5hZGRUaW1lc3RhbXAgfHwgcmVzb3VyY2VPcHRpb25zLmFkZFRpbWVzdGFtcDtcbiAgICAgICAgICBpZiAodHNOYW1lKSB7XG4gICAgICAgICAgICBpZiAodHNOYW1lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRzTmFtZSA9ICd0cyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWFyY2guYXBwZW5kKHRzTmFtZSwgJycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZpbmcgQ29udGVudC1UeXBlIGhlYWRlciBpZiBubyBib2R5XG4gICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICBoZWFkZXJzLmRlbGV0ZSgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBDcmVhdGluZyByZXF1ZXN0IG9wdGlvbnNcbiAgICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2RPcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogbWV0aG9kT3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgfHwgcmVzb3VyY2VPcHRpb25zLndpdGhDcmVkZW50aWFsc1xuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAvLyBDcmVhdGluZyByZXF1ZXN0IG9iamVjdFxuICAgICAgICAgIGxldCByZXEgPSBuZXcgUmVxdWVzdChyZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgICByZXEgPSBtZXRob2RPcHRpb25zLnJlcXVlc3RJbnRlcmNlcHRvciA/XG4gICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlcXVlc3RJbnRlcmNlcHRvcihyZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEludGVyY2VwdG9yKHJlcSwgbWV0aG9kT3B0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoIXJlcSkge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoJ1JlcXVlc3QgaXMgbnVsbCcpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlcXVlc3QgaXMgbnVsbCcpO1xuXG4gICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByZXF1ZXN0T2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgICAgICAgaWYgKFJlc291cmNlR2xvYmFsQ29uZmlnLm1vY2tSZXNwb25zZXMgJiYgcmVzb3VyY2VPcHRpb25zLm1vY2sgIT09IGZhbHNlICYmIG1ldGhvZE9wdGlvbnMubW9jayAhPT0gZmFsc2UgJiYgKCEhbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiB8fCAhIXJlc291cmNlT3B0aW9ucy5tb2NrQ29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIGxldCBtb2NrQ29sbGVjdGlvbiA9ICEhbWV0aG9kT3B0aW9ucy5tb2NrQ29sbGVjdGlvbiA/IG1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gOiB7Y29sbGVjdGlvbjogcmVzb3VyY2VPcHRpb25zLm1vY2tDb2xsZWN0aW9ufTtcbiAgICAgICAgICAgIGxldCByZXNwOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2NrQ29sbGVjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXNwID0gbW9ja0NvbGxlY3Rpb24ocHJvcGVydHlLZXksIHVzZWRQYXRoUGFyYW1zVmFsdWVzLCBKU09OLnBhcnNlKGJvZHkpLCBtZXRob2RPcHRpb25zLm1ldGhvZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNwID0gZ2V0TW9ja2VkUmVzcG9uc2UobW9ja0NvbGxlY3Rpb24sIHVzZWRQYXRoUGFyYW1zVmFsdWVzLCBKU09OLnBhcnNlKGJvZHkpLCBtZXRob2RPcHRpb25zLm1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwID0gbmV3IEZha2VSZXNwb25zZShyZXNwKTtcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5mcm9tKFtyZXNwXSk7XG5cbiAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuICAgICAgICAgICAgcmVxdWVzdE9ic2VydmFibGUgPSBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IgP1xuICAgICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlc3BvbnNlSW50ZXJjZXB0b3IuYmluZCh0aGlzKShyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKSA6XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcihyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRG9pbmcgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gdGhpcy5fcmVxdWVzdChyZXEsIG1ldGhvZE9wdGlvbnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLmlzTGF6eSkge1xuXG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IHJlcXVlc3RPYnNlcnZhYmxlO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG5cbiAgICAgICAgICAgICAgbGV0IHJlcVN1YnNjcjogU3Vic2NyaXB0aW9uID0gcmVxdWVzdE9ic2VydmFibGUuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RpbmcgYXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXNwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmV0dXJuZWQgZGF0YSBzaG91bGQgYmUgYW4gYXJyYXkuIFJlY2VpdmVkJywgcmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZXNwSXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwSXRlbS4kcmVzb3VyY2UgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldERhdGFUb09iamVjdChpbml0T2JqZWN0LmJpbmQocmVzcEl0ZW0uJHJlc291cmNlKSgpLCByZXNwSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGluZyBvYmplY3RcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdSZXR1cm5lZCBkYXRhIHNob3VsZCBiZSBhbiBvYmplY3QuIFJlY2VpdmVkJywgcmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcihyZXNwKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGFUb09iamVjdChyZXQsIG1hcChyZXNwKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXQpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXQuJGFib3J0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0LiRyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXFTdWJzY3IudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICByZXQuJHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISF0aGlzLnN0b3JhZ2UgJiYgISFtZXRob2RPcHRpb25zLnN0b3JhZ2VBY3Rpb24pIHtcbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gbWFpbk9ic2VydmFibGUuZG8oKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBtZXRob2RPcHRpb25zLnN0b3JhZ2VBY3Rpb24uYmluZCh0aGlzKSh0aGlzLnN0b3JhZ2UsIHJlc3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcblxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXQ7XG5cbiAgICB9O1xuXG4gICAgaWYgKCEhbWV0aG9kT3B0aW9ucy5zdG9yYWdlQWN0aW9uICYmIG1ldGhvZE9wdGlvbnMuc3RvcmFnZUFjdGlvbiA9PT0gU3RvcmFnZUFjdGlvbi5MT0FEKSB7XG4gICAgICAgIHRhcmdldC5zdG9yYWdlTG9hZCA9ICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldO1xuICAgIH07XG4gIH07XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0YVRvT2JqZWN0KHJldDogYW55LCByZXNwOiBhbnkpOiBhbnkge1xuXG4gIGlmIChyZXQuJHNldERhdGEpIHtcbiAgICByZXQuJHNldERhdGEocmVzcCk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmFzc2lnbihyZXQsIHJlc3ApO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlLnRvSVNPU3RyaW5nKCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cbiAgICBzd2l0Y2ggKFJlc291cmNlR2xvYmFsQ29uZmlnLmdldFBhcmFtc01hcHBpbmdUeXBlKSB7XG5cbiAgICAgIGNhc2UgVEdldFBhcmFtc01hcHBpbmdUeXBlLlBsYWluOlxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAobGV0IGFycl92YWx1ZSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgc2VhcmNoLmFwcGVuZChrZXksIGFycl92YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vLyBDb252ZXJ0IGRhdGVzIHRvIElTTyBmb3JtYXQgc3RyaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWFyY2guYXBwZW5kKGtleSwgdmFsdWUpO1xuXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgVEdldFBhcmFtc01hcHBpbmdUeXBlLkJyYWNrZXQ6XG4gICAgICAgIC8vLyBDb252ZXJ0IG9iamVjdCBhbmQgYXJyYXlzIHRvIHF1ZXJ5IHBhcmFtc1xuICAgICAgICBmb3IgKGxldCBrIGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoLCBrZXkgKyAnWycgKyBrICsgJ10nLCB2YWx1ZVtrXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlKTtcblxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZvclBhdGgoa2V5OiBzdHJpbmcsIHBhcmFtczogYW55LCBkYXRhOiBhbnksIHVzZWRQYXRoUGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQoZGF0YVtrZXldKSAmJiB0eXBlb2YgZGF0YVtrZXldICE9PSAnb2JqZWN0Jykge1xuICAgIHVzZWRQYXRoUGFyYW1zW2tleV0gPSB0cnVlO1xuICAgIHJldHVybiBkYXRhW2tleV07XG4gIH1cblxuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQocGFyYW1zW2tleV0pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocGFyYW1zW2tleV1bMF0gPT09ICdAJykge1xuICAgIHJldHVybiBnZXRWYWx1ZUZvclBhdGgocGFyYW1zW2tleV0uc3Vic3RyKDEpLCBwYXJhbXMsIGRhdGEsIHVzZWRQYXRoUGFyYW1zKTtcbiAgfVxuXG4gIHVzZWRQYXRoUGFyYW1zW2tleV0gPSB0cnVlO1xuICByZXR1cm4gcGFyYW1zW2tleV07XG5cbn1cblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdG9KU09OKG9iajogYW55KTphbnkge1xuICBsZXQgcmV0T2JqOiBhbnkgPSB7fTtcblxuICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvYmopIHtcblxuICAgIGlmICghKG9ialtwcm9wTmFtZV0gaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIShwcm9wTmFtZS5jaGFyQXQoMCkgPT09ICckJykpIHtcbiAgICAgIHJldE9ialtwcm9wTmFtZV0gPSBvYmpbcHJvcE5hbWVdO1xuICAgIH1cblxuICB9XG4gIHJldHVybiByZXRPYmo7XG59XG5cblxuY2xhc3MgRmFrZVJlc3BvbnNlIHtcbiAgcHJpdmF0ZSBfcmVzcDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHJlc3A6IGFueSkge1xuICAgIHRoaXMuX3Jlc3AgPSByZXNwO1xuICB9XG5cbiAgZ2V0IF9ib2R5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX3Jlc3ApO1xuICB9XG5cbiAganNvbiA9ICgpID0+IHRoaXMuX3Jlc3A7XG59XG5cblxuZnVuY3Rpb24gZ2V0TW9ja2VkUmVzcG9uc2UoY29sbGVjdGlvbjoge2NvbGxlY3Rpb246IGFueSwgbG9va3VwUGFyYW1zPzogYW55fSwgcGFyYW1zOiBhbnksIGRhdGE6IGFueSwgcmVxdWVzdE1ldGhvZDogUmVxdWVzdE1ldGhvZCkge1xuICBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5HZXQpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbGxlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29sbGVjdGlvbi5sb29rdXBQYXJhbXMgfHwgT2JqZWN0LmtleXMoY29sbGVjdGlvbi5sb29rdXBQYXJhbXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW1ba2V5XSA9PT0gcGFyYW1zW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISFyZXN1bHQubGVuZ3RoID8gcmVzdWx0WzBdIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmlsdGVyKChpdG06IGFueSkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcykge1xuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIHBhcmFtc1trZXldID09PSBpdG1bY29sbGVjdGlvbi5sb29rdXBQYXJhbXNba2V5XV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLlBvc3QpIHtcbiAgICBjb2xsZWN0aW9uLmNvbGxlY3Rpb24ucHVzaChkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLlB1dCB8fCByZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLlBhdGNoICkge1xuICAgICAgbGV0IHJlc3VsdCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maW5kKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChpdGVtW2tleV0gIT09IHBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICB9IGVsc2UgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuRGVsZXRlKSB7XG4gICAgICBsZXQgcmVzdWx0SWR4ID0gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBwYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgY29sbGVjdGlvbi5jb2xsZWN0aW9uLnNwbGljZShyZXN1bHRJZHgsIDEpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQWN0aW9uLnRzIiwiZXhwb3J0IGVudW0gVEdldFBhcmFtc01hcHBpbmdUeXBlIHtcbiAgUGxhaW4sXG4gIEJyYWNrZXRcbn1cblxuZXhwb3J0IGNsYXNzIFJlc291cmNlR2xvYmFsQ29uZmlnIHtcbiAgc3RhdGljIHVybDogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcbiAgc3RhdGljIHBhdGg6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IG51bGw7XG4gIHN0YXRpYyBoZWFkZXJzOiBhbnkgfCBQcm9taXNlPGFueT4gPSB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH07XG4gIHN0YXRpYyBwYXJhbXM6IGFueSB8IFByb21pc2U8YW55PiA9IG51bGw7XG4gIHN0YXRpYyBkYXRhOiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuXG4gIHN0YXRpYyBnZXRQYXJhbXNNYXBwaW5nVHlwZTogYW55ID0gVEdldFBhcmFtc01hcHBpbmdUeXBlLlBsYWluO1xuICBzdGF0aWMgbW9ja1Jlc3BvbnNlczogYm9vbGVhbiA9IGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlR2xvYmFsQ29uZmlnLnRzIiwiaW1wb3J0IHsgSW5qZWN0b3IsIFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VQcm92aWRlcnMge1xuXG4gIHN0YXRpYyBtYWluUHJvdmlkZXJzTmFtZTogc3RyaW5nID0gJ19fbWFpblByb3ZpZGVycyc7XG4gIHN0YXRpYyBwcm92aWRlcnM6IHsgW2lkOiBzdHJpbmddOiBQcm92aWRlcltdIH0gPSB7XG4gICAgX19tYWluUHJvdmlkZXJzOiBbXVxuICB9O1xuXG4gIHN0YXRpYyBhZGQocmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBzdWJTZXQ6IHN0cmluZyA9IG51bGwpIHtcblxuICAgIGlmICghc3ViU2V0KSB7XG4gICAgICBzdWJTZXQgPSB0aGlzLm1haW5Qcm92aWRlcnNOYW1lO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm92aWRlcnNbc3ViU2V0XSkge1xuICAgICAgdGhpcy5wcm92aWRlcnNbc3ViU2V0XSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBkZXBzOiBhbnlbXSA9ICg8YW55PlJlZmxlY3QpLmdldE1ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIHJlc291cmNlKTtcblxuICAgIGlmICghZGVwcyB8fCBkZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVwcyA9IFtIdHRwLCBJbmplY3Rvcl07XG4gICAgfVxuXG4gICAgdGhpcy5wcm92aWRlcnNbc3ViU2V0XS5wdXNoKFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiByZXNvdXJjZSxcbiAgICAgICAgdXNlRmFjdG9yeTogKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyByZXNvdXJjZSguLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogZGVwc1xuICAgICAgfVxuICAgICk7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQoc3ViU2V0OiBzdHJpbmcgPSBudWxsKTogUHJvdmlkZXJbXSB7XG5cbiAgICBpZiAoIXN1YlNldCkge1xuICAgICAgc3ViU2V0ID0gdGhpcy5tYWluUHJvdmlkZXJzTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbc3ViU2V0XSB8fCBbXTtcblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZVByb3ZpZGVycy50cyIsImltcG9ydCB7UmVzb3VyY2VTdG9yYWdlUGFyYW1zLCBTZWxlY3RlZFN0b3JhZ2V9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcbmltcG9ydCB7UmVzb3VyY2V9IGZyb20gXCIuL1Jlc291cmNlXCI7XG5pbXBvcnQge1R5cGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVN0b3JhZ2Uge1xuICBwcml2YXRlIHF1ZXJ5UGFyYW1zID0ge307XG4gIHByaXZhdGUgX2l0ZXJhdGlvblBvaW50ZXIgPSAwO1xuICBwcml2YXRlIGxvYWRJbW1lZGlhdGVseSA9IHRydWU7XG4gIHByaXZhdGUgX3Jlc3VsdFN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxTZWxlY3RlZFN0b3JhZ2U8YW55Pj47XG5cbiAgcmVzdWx0OiBTZWxlY3RlZFN0b3JhZ2U8YW55PjtcbiAgcmVzdWx0RGF0YTogYW55W10gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBwYXJhbXM6IFJlc291cmNlU3RvcmFnZVBhcmFtcykge1xuICAgIHRoaXMudXBkYXRlUGFyYW1zKHBhcmFtcyk7XG4gICAgdGhpcy5yZXN1bHQgPSBPYmplY3QuYXNzaWduKHRoaXMucmVzdWx0RGF0YSwgeyRsb2FkOiB0aGlzLmxvYWQuYmluZCh0aGlzKSwgJHJlc29sdmVkOiBmYWxzZX0pO1xuXG4gICAgLyp0aGlzLnJlc3VsdC5uZXh0ID0gKCk6IEl0ZXJhdG9yUmVzdWx0PGFueT4gPT4ge1xuICAgICAgaWYgKHRoaXMuX2l0ZXJhdGlvblBvaW50ZXIgPCB0aGlzLnJlc3VsdERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucmVzdWx0RGF0YVt0aGlzLl9pdGVyYXRpb25Qb2ludGVyKytdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlc3VsdFtTeW1ib2wuaXRlcmF0b3JdID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH07Ki9cblxuICAgIHRoaXMuX3Jlc3VsdFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMucmVzdWx0KTtcbiAgICB0aGlzLnJlc3VsdC4kb2JzZXJ2YWJsZSA9IHRoaXMuX3Jlc3VsdFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAoPGFueT5yZXNvdXJjZSkuaW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgKDxhbnk+dGhpcy5yZXNvdXJjZSkuaW5zdGFuY2Uuc3RvcmFnZSA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5sb2FkSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc3VsdC4kcmVzb3VyY2UgPSAoPGFueT50aGlzLnJlc291cmNlKS5pbnN0YW5jZTtcbiAgICB9KTtcblxuXG4gIH1cblxuICB1cGRhdGVQYXJhbXMocGFyYW1zOiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMgPSA8YW55Pnt9KSB7XG4gICAgdGhpcy5xdWVyeVBhcmFtcyA9IHBhcmFtcy5xdWVyeVBhcmFtcyB8fCB7fTtcbiAgICB0aGlzLmxvYWRJbW1lZGlhdGVseSA9IHBhcmFtcy5sb2FkSW1tZWRpYXRlbHkgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgbG9hZChhcmdzPzogYW55KSB7XG4gICAgY29uc3QgcXAgPSAhIWFyZ3MgPyBhcmdzIDogdGhpcy5xdWVyeVBhcmFtcztcbiAgICBjb25zdCBhY3Rpb24gPSAoPGFueT50aGlzLnJlc291cmNlKS5pbnN0YW5jZS5zdG9yYWdlTG9hZDtcbiAgICBpZiAoISFhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5iaW5kKCg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlKShxcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiU3RvcmFnZSBMT0FEIGFjdGlvbiBpcyBub3QgZGVmaW5lZFwiO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlUmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlc3VsdCA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucmVzdWx0KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMucmVzdWx0LCB0aGlzLnJlc3VsdERhdGEpO1xuICAgIHRoaXMucmVzdWx0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgdGhpcy5faXRlcmF0aW9uUG9pbnRlciA9IDA7XG4gICAgdGhpcy5fcmVzdWx0U3ViamVjdC5uZXh0KHRoaXMucmVzdWx0KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VTdG9yYWdlLnRzIiwiXG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZX0gZnJvbSBcIi4vUmVzb3VyY2VTdG9yYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBTdG9yYWdlQWN0aW9uID0ge1xuICBMT0FEOiBmdW5jdGlvbiAoc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlLCByZXNwOiBhbnkpIHtcbiAgICBzdG9yYWdlLnJlc3VsdERhdGEgPSByZXNwLmZpbHRlcigoaXRlbTogYW55KSA9PiAhIWl0ZW0pO1xuICAgIHN0b3JhZ2UuZm9yY2VSZWZyZXNoKCk7XG4gIH0sXG4gIEFERDogZnVuY3Rpb24gKHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSwgcmVzcDogYW55KSB7XG4gICAgc3RvcmFnZS5yZXN1bHREYXRhLnB1c2gocmVzcCk7XG4gICAgc3RvcmFnZS5mb3JjZVJlZnJlc2goKTtcbiAgfSxcbiAgVVBEQVRFOiBmdW5jdGlvbiAoc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlLCByZXNwOiBhbnkpIHtcbiAgICBjb25zdCBwcmltYXJ5S2V5ID0gcmVzcC4kcHJpbWFyeUtleSB8fCAnaWQnO1xuICAgIGNvbnN0IGlkeCA9IHN0b3JhZ2UucmVzdWx0RGF0YS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtW3ByaW1hcnlLZXldID09PSByZXNwW3ByaW1hcnlLZXldKTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHN0b3JhZ2UucmVzdWx0RGF0YVtpZHhdID0gcmVzcDtcbiAgICAgIHN0b3JhZ2UuZm9yY2VSZWZyZXNoKCk7XG4gICAgfVxuICB9LFxuICBSRU1PVkU6IGZ1bmN0aW9uIChzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UsIHJlc3A6IGFueSkge1xuICAgIGNvbnN0IHByaW1hcnlLZXkgPSByZXNwLiRwcmltYXJ5S2V5IHx8ICdpZCc7XG4gICAgY29uc3QgaWR4ID0gc3RvcmFnZS5yZXN1bHREYXRhLmZpbmRJbmRleChpdGVtID0+IGl0ZW1bcHJpbWFyeUtleV0gPT09IHJlc3BbcHJpbWFyeUtleV0pO1xuICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgc3RvcmFnZS5yZXN1bHREYXRhLnNwbGljZShpZHgsIDEpO1xuICAgICAgc3RvcmFnZS5mb3JjZVJlZnJlc2goKTtcbiAgICB9XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1N0b3JhZ2VBY3Rpb24udHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUFjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUNSVUQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VDUlVEQmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZU1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUGFyYW1zJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlU3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9TZWxlY3RTdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1N0b3JhZ2VBY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvSW50ZXJmYWNlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlTW9kdWxlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBsZXQgcHJvdmlkZXJzID0gUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW1Jlc291cmNlUHJvdmlkZXJzLm1haW5Qcm92aWRlcnNOYW1lXTtcbiAgICBwcm92aWRlcnMuZm9yRWFjaChwcm92aWRlciA9PiB7XG4gICAgICBjb25zdCBSZXNvdXJjZVR5cGUgPSAoPGFueT5wcm92aWRlcikucHJvdmlkZTtcbiAgICAgIGNvbnN0IHJlc291cmNlSW5zdGFuY2UgPSB0aGlzLl9pbmplY3Rvci5nZXQoUmVzb3VyY2VUeXBlKTtcbiAgICAgIFJlc291cmNlVHlwZS5pbnN0YW5jZSA9IHJlc291cmNlSW5zdGFuY2U7XG4gICAgICAoPGFueT5SZXNvdXJjZVR5cGUpLl9pbml0Lm5leHQocmVzb3VyY2VJbnN0YW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc291cmNlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbUmVzb3VyY2VQcm92aWRlcnMubWFpblByb3ZpZGVyc05hbWVdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChzdWJTZXQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzb3VyY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tzdWJTZXRdID8gUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW3N1YlNldF0gOiBbXVxuICAgIH07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL25neC1yZXNvdXJjZS50cyIsImltcG9ydCB7IFJlcXVlc3RNZXRob2QgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXNvdXJjZU1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbiB9IGZyb20gJy4vUmVzb3VyY2VBY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDUlVEPFRRdWVyeSwgVFNob3J0LCBURnVsbD4gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBpc0FycmF5OiB0cnVlXG4gIH0pXG4gIHF1ZXJ5OiBSZXNvdXJjZU1ldGhvZDxUUXVlcnksIFRTaG9ydFtdPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIGdldDogUmVzb3VyY2VNZXRob2Q8eyBpZDogYW55IH0sIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0LFxuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGUsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogVEZ1bGwge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUNSVUQudHMiLCJpbXBvcnQgeyBSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNZXRob2QgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb24gfSBmcm9tICcuL1Jlc291cmNlQWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlQ1JVREJhc2U8VFF1ZXJ5LCBUS2V5cywgVFNob3J0LCBURnVsbD4gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBpc0FycmF5OiB0cnVlXG4gIH0pXG4gIHF1ZXJ5OiBSZXNvdXJjZU1ldGhvZDxUUXVlcnksIFRTaG9ydFtdPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oKVxuICBnZXQ6IFJlc291cmNlTWV0aG9kPFRLZXlzLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICB9KVxuICBzYXZlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlB1dFxuICB9KVxuICB1cGRhdGU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuRGVsZXRlXG4gIH0pXG4gIHJlbW92ZTogUmVzb3VyY2VNZXRob2Q8VEtleXMsIGFueT47XG5cbiAgLy8gQWxpYXMgdG8gc2F2ZVxuICBjcmVhdGUoZGF0YTogVEZ1bGwsIGNhbGxiYWNrPzogKHJlczogVEZ1bGwpID0+IGFueSk6IFRGdWxsIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VDUlVEQmFzZS50cyIsImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5cblxuZXhwb3J0IGNsYXNzIFJlc291cmNlTW9kZWw8Uj4ge1xuXG4gICRyZXNvbHZlZDogYm9vbGVhbjtcbiAgJG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgJGFib3J0UmVxdWVzdDogKCkgPT4gdm9pZDtcbiAgJHJlc291cmNlOiBSO1xuXG4gIHN0YXRpYyBjcmVhdGUoZGF0YTogYW55ID0ge30sIGNvbW1pdDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNb2RlbCBzdGF0aWMgY3JlYXRlIGlzIG5vdCBhdmFpbGFibGUgYW55bW9yZS4gUGxlYXNlIHVzZSByZXNvdXJjZS5jcmVhdGVNb2RlbCgpIG1ldGhvZCcpO1xuICB9XG5cbiAgcHVibGljICRzZXREYXRhKGRhdGE6IGFueSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIHB1YmxpYyAkc2F2ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzTmV3KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuJHVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljICRjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgnY3JlYXRlJyk7XG4gIH1cblxuICBwdWJsaWMgJHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCd1cGRhdGUnKTtcbiAgfVxuXG4gIHB1YmxpYyAkcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLiRyZXNvdXJjZV9tZXRob2QoJ3JlbW92ZScpO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpOmFueSB7XG4gICAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzKSB7XG5cbiAgICAgIGlmICghKCg8YW55PnRoaXMpW3Byb3BOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhKHByb3BOYW1lLmNoYXJBdCgwKSA9PT0gJyQnKSkge1xuICAgICAgICByZXRPYmpbcHJvcE5hbWVdID0gKDxhbnk+dGhpcylbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZXRPYmo7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoPGFueT50aGlzKVsnaWQnXTtcbiAgfVxuXG4gIHByaXZhdGUgJHJlc291cmNlX21ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcpIHtcblxuICAgIGlmICghdGhpcy4kcmVzb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdXIgUmVzb3VyY2UgaXMgbm90IHNldC4gUGxlYXNlIHVzZSByZXNvdXJjZS5jcmVhdGVNb2RlbCgpIG1ldGhvZCB0byBjcmVhdGUgbW9kZWwuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoISg8YW55PnRoaXMuJHJlc291cmNlKVttZXRob2ROYW1lXSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBoYXMgbm8gaW1wbGVtZW50ZWQgJHttZXRob2ROYW1lfSBtZXRob2QuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAoPGFueT50aGlzLiRyZXNvdXJjZSlbbWV0aG9kTmFtZV0odGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlTW9kZWwudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Jlc291cmNlUGFyYW1zQmFzZSwgUmVzb3VyY2VTdG9yYWdlUGFyYW1zfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VQcm92aWRlcnMgfSBmcm9tICcuL1Jlc291cmNlUHJvdmlkZXJzJztcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZX0gZnJvbSBcIi4vUmVzb3VyY2VTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlUGFyYW1zKHBhcmFtczogUmVzb3VyY2VQYXJhbXNCYXNlID0ge30pIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogVHlwZTxSZXNvdXJjZT4pIHtcblxuICAgICg8YW55PnRhcmdldCkuaW5pdCA9ICg8YW55PnRhcmdldCkuX2luaXQuYXNPYnNlcnZhYmxlKCkuZmlsdGVyKChpbnN0YW5jZTogUmVzb3VyY2UpID0+ICEhaW5zdGFuY2UpO1xuXG4gICAgKDxhbnk+dGFyZ2V0KS5nZXRTdG9yYWdlID0gKHN0b3JhZ2VQYXJhbXM6IFJlc291cmNlU3RvcmFnZVBhcmFtcykgPT4ge1xuICAgICAgaWYgKCEhKDxhbnk+dGFyZ2V0KS5fc3RvcmFnZSkge1xuICAgICAgICAoPGFueT50YXJnZXQpLl9zdG9yYWdlLnVwZGF0ZVBhcmFtcyhzdG9yYWdlUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuICg8YW55PnRhcmdldCkuX3N0b3JhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlU3RvcmFnZSh0YXJnZXQsIHN0b3JhZ2VQYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0YXJnZXQucHJvdG90eXBlLmdldFJlc291cmNlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuYWRkMlByb3ZpZGVzICE9PSBmYWxzZSkge1xuICAgICAgUmVzb3VyY2VQcm92aWRlcnMuYWRkKHRhcmdldCwgcGFyYW1zLnByb3ZpZGVyc1N1YlNldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVtb3ZlVHJhaWxpbmdTbGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUucmVtb3ZlVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2g7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudXJsKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMudXJsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhdGgpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGF0aDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oZWFkZXJzKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmhlYWRlcnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucGFyYW1zKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyYW1zO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmRhdGEpIHtcbiAgICAgIHRhcmdldC5wcm90b3R5cGUuX2dldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGF0YTtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFN0b3JhZ2UocmVzb3VyY2U6IFR5cGU8UmVzb3VyY2U+LCBwYXJhbXM/OiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9ICg8YW55PnJlc291cmNlKS5nZXRTdG9yYWdlKHBhcmFtcyk7XG5cbiAgICBzdG9yYWdlLl9yZXN1bHRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9TZWxlY3RTdG9yYWdlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==