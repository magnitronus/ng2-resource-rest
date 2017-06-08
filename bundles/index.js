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
        var model = this.initResultObject();
        Reflect.defineMetadata('resource', this, model.constructor);
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
            var mockRequest = __WEBPACK_IMPORTED_MODULE_2__ResourceGlobalConfig__["b" /* ResourceGlobalConfig */].mockResponses && resourceOptions.mock !== false && methodOptions.mock !== false && (!!methodOptions.mockCollection || !!resourceOptions.mockCollection);
            var isGetRequest = methodOptions.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get;
            var ret = null;
            var map = methodOptions.map ? methodOptions.map.bind(this) : this.map;
            var filter = methodOptions.filter ? methodOptions.filter : this.filter;
            var initObject = methodOptions.initResultObject ?
                methodOptions.initResultObject.bind(this) : this.initResultObject;
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
                if (mockRequest) {
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
        // Create singletones for all resources
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
        this.$primaryKey = 'id';
        this.$resource = Reflect.getMetadata('resource', this.constructor);
    }
    ResourceModel.create = function (data, commit) {
        if (data === void 0) { data = {}; }
        if (commit === void 0) { commit = true; }
        console.error('Model static create is not available anymore. Please use new YourModel() instead');
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
        return this.$resource_method('save');
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
        return !this[this.$primaryKey];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlN2ViNjBjYjZmZDY0YTgyMTRhMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JhZ2VBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25neC1yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUNSVURCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VsZWN0U3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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R0FBRztnQkFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO2dCQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN4QixDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUc7Z0JBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRztnQkFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUVILENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7OztBQy9ESyx1QkFBd0IsUUFBd0IsRUFBRSxNQUE4QjtJQUVwRixNQUFNLENBQUMsVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFDL0MsSUFBTSxPQUFPLEdBQVMsUUFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRCxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDckMsTUFBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQztBQUVKLENBQUM7Ozs7Ozs7QUNmRCxnRCIsImZpbGUiOiJuZ3gtcmVzb3VyY2UudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiKSwgcmVxdWlyZShcInJ4anMvUnhcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvaHR0cFwiLCBcIkBhbmd1bGFyL2NvcmVcIiwgXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiLCBcInJ4anMvUnhcIiwgXCJAYW5ndWxhci9jb21tb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmd4LXJlc291cmNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiKSwgcmVxdWlyZShcInJ4anMvUnhcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5neC1yZXNvdXJjZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wicnhqcy9CZWhhdmlvclN1YmplY3RcIl0sIHJvb3RbXCJyeGpzL1J4XCJdLCByb290W1wiQGFuZ3VsYXIvY29tbW9uXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlN2ViNjBjYjZmZDY0YTgyMTRhMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSHR0cCwgUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5pbXBvcnQge1Jlc291cmNlUGFyYW1zQmFzZSwgUmVzb3VyY2VSZXN1bHR9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXNvdXJjZUFjdGlvbkJhc2UgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VNb2RlbCB9IGZyb20gJy4vUmVzb3VyY2VNb2RlbCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQge1Jlc291cmNlU3RvcmFnZX0gZnJvbSBcIi4vUmVzb3VyY2VTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFJlc291cmNlIHtcblxuICBwcm90ZWN0ZWQgc3RhdGljIF9pbml0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHVuZGVmaW5lZCk7XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBfc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlID0gdW5kZWZpbmVkO1xuXG4gIHN0YXRpYyBpbml0OiBPYnNlcnZhYmxlPGFueT4gPSBPYnNlcnZhYmxlLm9mKHVuZGVmaW5lZCk7XG4gIHN0YXRpYyBpbnN0YW5jZTogUmVzb3VyY2UgPSB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF9wYXRoOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF9oZWFkZXJzOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9wYXJhbXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2RhdGE6IGFueSA9IG51bGw7XG5cbiAgc3RvcmFnZUxvYWQ6ICguLi5hcmdzOiBhbnlbXSkgPT4gUmVzb3VyY2VSZXN1bHQ8YW55PjtcbiAgc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwLCBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5pbml0UmVzdWx0T2JqZWN0KCk7XG4gICAgKDxhbnk+UmVmbGVjdCkuZGVmaW5lTWV0YWRhdGEoJ3Jlc291cmNlJywgdGhpcywgbW9kZWwuY29uc3RydWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYWluIHVybCBvZiB0aGUgcmVzb3VyY2VcbiAgICogQHJldHVybnMge3N0cmluZ3xQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBnZXRVcmwobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3VybCB8fCB0aGlzLl9nZXRVcmwobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcudXJsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSB1cmxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgc2V0VXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXJsID0gdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXRoIG9mIHRoZSByZXNvdXJjZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfFByb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldFBhdGgobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGggfHwgdGhpcy5fZ2V0UGF0aChtZXRob2RPcHRpb25zKSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXRoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCByZXNvdXJjZSBwYXRoXG4gICAqIEBwYXJhbSBwYXRoXG4gICAqL1xuICBzZXRQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgZ2V0SGVhZGVycyhtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycyB8fCB0aGlzLl9nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLmhlYWRlcnMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHJlc291cmNlIGhlYWRlcnNcbiAgICogQHBhcmFtIGhlYWRlcnNcbiAgICovXG4gIHNldEhlYWRlcnMoaGVhZGVyczogYW55KSB7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgcGFyYW1zXG4gICAqIEByZXR1cm5zIHthbnl8UHJvbWlzZTxhbnk+fHt9fVxuICAgKi9cbiAgZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbXMgfHwgdGhpcy5fZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnMpIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCByZXNvdXJjZSBwYXJhbXNcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgc2V0UGFyYW1zKHBhcmFtczogYW55KSB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IGRhdGFcbiAgICogQHJldHVybnMge2FueXxQcm9taXNlPGFueT58e319XG4gICAqL1xuICBnZXREYXRhKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhIHx8IHRoaXMuX2dldERhdGEobWV0aG9kT3B0aW9ucykgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcuZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCByZXNvdXJjZSBwYXJhbXNcbiAgICogQHBhcmFtIGRhdGFcbiAgICovXG4gIHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBUaGF0IGlzIGNhbGxlZCBiZWZvcmUgZXhlY3V0aW5nIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcVxuICAgKi9cbiAgcmVxdWVzdEludGVyY2VwdG9yKHJlcTogUmVxdWVzdCwgbWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IFJlcXVlc3Qge1xuICAgIHJldHVybiByZXE7XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBvYnNlcnZhYmxlIGludGVyY2VwdG9yXG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICByZXNwb25zZUludGVyY2VwdG9yKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiwgcmVxOiBSZXF1ZXN0LCBtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAocmVzID0+IHJlcy5fYm9keSA/IHJlcy5qc29uKCkgOiBudWxsKTtcbiAgfVxuXG4gIHJlbW92ZVRyYWlsaW5nU2xhc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0UmVzdWx0T2JqZWN0KCk6IGFueSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbWFwKGl0ZW06IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBmaWx0ZXIoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRSZXNvdXJjZU9wdGlvbnMoKTogUmVzb3VyY2VQYXJhbXNCYXNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbiAgY3JlYXRlTW9kZWwoKTogUmVzb3VyY2VNb2RlbDxhbnk+IHtcbiAgICBsZXQgcmV0ID0gdGhpcy5pbml0UmVzdWx0T2JqZWN0KCk7XG4gICAgcmV0LiRyZXNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG5cblxuXG4gIHByb3RlY3RlZCBfcmVxdWVzdChyZXE6IFJlcXVlc3QsIG1ldGhvZE9wdGlvbnM6IFJlc291cmNlQWN0aW9uQmFzZSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGxldCByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICByZXR1cm4gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgIG1ldGhvZE9wdGlvbnMucmVzcG9uc2VJbnRlcmNlcHRvci5iaW5kKHRoaXMpKHJlcXVlc3RPYnNlcnZhYmxlLCByZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgIHRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcihyZXF1ZXN0T2JzZXJ2YWJsZSwgcmVxLCBtZXRob2RPcHRpb25zKTtcblxuICB9XG5cblxuICBwcml2YXRlIF9nZXRVcmwobWV0aG9kT3B0aW9ucz86IFJlc291cmNlQWN0aW9uQmFzZSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGF0aChtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogc3RyaW5nfFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGF0YShtZXRob2RPcHRpb25zPzogUmVzb3VyY2VBY3Rpb25CYXNlKTogYW55IHwgUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZS50cyIsImltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2QsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1xuICBSZXNvdXJjZUFjdGlvbkJhc2UsIFJlc291cmNlUmVzcG9uc2VGaWx0ZXIsIFJlc291cmNlUmVzcG9uc2VJbml0UmVzdWx0LCBSZXNvdXJjZVJlc3BvbnNlTWFwLFxuICBSZXNvdXJjZVJlc3VsdFxufSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTW9kZWwgfSBmcm9tICcuL1Jlc291cmNlTW9kZWwnO1xuaW1wb3J0IHsgQ29ubmVjdGFibGVPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnLCBUR2V0UGFyYW1zTWFwcGluZ1R5cGUgfSBmcm9tICcuL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmltcG9ydCB7U3RvcmFnZUFjdGlvbn0gZnJvbSBcIi4vU3RvcmFnZUFjdGlvblwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlQWN0aW9uKG1ldGhvZE9wdGlvbnM/OiBSZXNvdXJjZUFjdGlvbkJhc2UpIHtcblxuICBtZXRob2RPcHRpb25zID0gbWV0aG9kT3B0aW9ucyB8fCB7fTtcblxuICBpZiAobWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgIG1ldGhvZE9wdGlvbnMubWV0aG9kID0gUmVxdWVzdE1ldGhvZC5HZXQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogUmVzb3VyY2UsIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcblxuICAgICg8YW55PnRhcmdldClbcHJvcGVydHlLZXldID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogUmVzb3VyY2VSZXN1bHQ8YW55PiB8IFJlc291cmNlTW9kZWw8YW55PiB7XG5cbiAgICAgIGxldCBkYXRhID0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogbnVsbDtcbiAgICAgIGxldCBwYXJhbXMgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogbnVsbDtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IHBhcmFtcztcbiAgICAgICAgcGFyYW1zID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc291cmNlT3B0aW9ucyA9IHRoaXMuZ2V0UmVzb3VyY2VPcHRpb25zKCk7XG5cbiAgICAgIGNvbnN0IG1vY2tSZXF1ZXN0ID0gUmVzb3VyY2VHbG9iYWxDb25maWcubW9ja1Jlc3BvbnNlcyAmJiByZXNvdXJjZU9wdGlvbnMubW9jayAhPT0gZmFsc2UgJiYgbWV0aG9kT3B0aW9ucy5tb2NrICE9PSBmYWxzZSAmJiAoISFtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uIHx8ICEhcmVzb3VyY2VPcHRpb25zLm1vY2tDb2xsZWN0aW9uKTtcblxuICAgICAgbGV0IGlzR2V0UmVxdWVzdCA9IG1ldGhvZE9wdGlvbnMubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldDtcblxuICAgICAgbGV0IHJldDogUmVzb3VyY2VSZXN1bHQ8YW55PiB8IFJlc291cmNlTW9kZWw8YW55PiA9IG51bGw7XG5cbiAgICAgIGxldCBtYXA6IFJlc291cmNlUmVzcG9uc2VNYXAgPSBtZXRob2RPcHRpb25zLm1hcCA/IG1ldGhvZE9wdGlvbnMubWFwLmJpbmQodGhpcykgOiB0aGlzLm1hcDtcbiAgICAgIGxldCBmaWx0ZXI6IFJlc291cmNlUmVzcG9uc2VGaWx0ZXIgPSBtZXRob2RPcHRpb25zLmZpbHRlciA/IG1ldGhvZE9wdGlvbnMuZmlsdGVyIDogdGhpcy5maWx0ZXI7XG4gICAgICBsZXQgaW5pdE9iamVjdDogUmVzb3VyY2VSZXNwb25zZUluaXRSZXN1bHQgPSBtZXRob2RPcHRpb25zLmluaXRSZXN1bHRPYmplY3QgP1xuICAgICAgICBtZXRob2RPcHRpb25zLmluaXRSZXN1bHRPYmplY3QuYmluZCh0aGlzKSA6IHRoaXMuaW5pdFJlc3VsdE9iamVjdDtcblxuICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNMYXp5KSB7XG4gICAgICAgIHJldCA9IHt9O1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0FycmF5KSB7XG4gICAgICAgICAgcmV0ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLiRyZXNvdXJjZSA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gU2V0dGluZyBkYXRhIHRvIHJldFxuICAgICAgICAgICAgcmV0ID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvSlNPTiA/IGRhdGEudG9KU09OKCkgOiB0b0pTT04oZGF0YSk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gaW5pdE9iamVjdC5iaW5kKHRoaXMpKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBsZXQgbWFpbkRlZmVycmVkU3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+ID0gbnVsbDtcbiAgICAgIGxldCBtYWluT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4gPSBudWxsO1xuXG4gICAgICByZXQuJHJlc29sdmVkID0gZmFsc2U7XG4gICAgICByZXQuJG9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgfSkuZmxhdE1hcCgoKSA9PiBtYWluT2JzZXJ2YWJsZSk7XG4gICAgICByZXQuJGFib3J0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICB9O1xuICAgICAgcmV0LiRyZXNvdXJjZSA9IHRoaXM7XG5cblxuICAgICAgZnVuY3Rpb24gcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKSB7XG4gICAgICAgIGlmIChtYWluRGVmZXJyZWRTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlci5uZXh0KCk7XG4gICAgICAgICAgbWFpbkRlZmVycmVkU3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIG1haW5EZWZlcnJlZFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcbiAgICAgICAgcmV0LiRvYnNlcnZhYmxlID0gcmV0LiRvYnNlcnZhYmxlLnB1Ymxpc2goKTtcbiAgICAgICAgKDxDb25uZWN0YWJsZU9ic2VydmFibGU8YW55Pj5yZXQuJG9ic2VydmFibGUpLmNvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy51cmwgfHwgdGhpcy5nZXRVcmwobWV0aG9kT3B0aW9ucykpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobWV0aG9kT3B0aW9ucy5wYXRoIHx8IHRoaXMuZ2V0UGF0aChtZXRob2RPcHRpb25zKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtZXRob2RPcHRpb25zLmhlYWRlcnMgfHwgdGhpcy5nZXRIZWFkZXJzKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMucGFyYW1zIHx8IHRoaXMuZ2V0UGFyYW1zKG1ldGhvZE9wdGlvbnMpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1ldGhvZE9wdGlvbnMuZGF0YSB8fCB0aGlzLmdldERhdGEobWV0aG9kT3B0aW9ucykpXG4gICAgICBdKVxuICAgICAgICAudGhlbigoZGF0YUFsbDogYW55W10pID0+IHtcblxuICAgICAgICAgIGlmIChyZXQuJHJlc29sdmVkKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVsZWFzZU1haW5EZWZlcnJlZFN1YnNjcmliZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBkYXRhQWxsWzBdICsgZGF0YUFsbFsxXTtcbiAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGRhdGFBbGxbMl0pO1xuICAgICAgICAgIGxldCBkZWZQYXRoUGFyYW1zID0gZGF0YUFsbFszXTtcblxuICAgICAgICAgIGxldCB1c2VkUGF0aFBhcmFtczogYW55ID0ge307XG4gICAgICAgICAgbGV0IHVzZWRQYXRoUGFyYW1zVmFsdWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSB8fCBwYXJhbXMpIHtcblxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhQWxsWzRdLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhdGhQYXJhbXMgPSB1cmwubWF0Y2goL3soW159XSopfS9nKSB8fCBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBhdGhQYXJhbSA9IHBhdGhQYXJhbXNbaV07XG5cbiAgICAgICAgICAgICAgbGV0IHBhdGhLZXkgPSBwYXRoUGFyYW0uc3Vic3RyKDEsIHBhdGhQYXJhbS5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgICAgbGV0IGlzTWFuZGF0b3J5ID0gcGF0aEtleVswXSA9PT0gJyEnO1xuICAgICAgICAgICAgICBpZiAoaXNNYW5kYXRvcnkpIHtcbiAgICAgICAgICAgICAgICBwYXRoS2V5ID0gcGF0aEtleS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgaXNHZXRPbmx5ID0gcGF0aEtleVswXSA9PT0gJzonO1xuICAgICAgICAgICAgICBpZiAoaXNHZXRPbmx5KSB7XG4gICAgICAgICAgICAgICAgcGF0aEtleSA9IHBhdGhLZXkuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZ2V0VmFsdWVGb3JQYXRoKHBhdGhLZXksIGRlZlBhdGhQYXJhbXMsIHBhcmFtcyB8fCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gICAgICAgICAgICAgIGlmIChpc0dldE9ubHkgJiYgIXBhcmFtcykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW3BhdGhLZXldO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01hbmRhdG9yeSkge1xuXG4gICAgICAgICAgICAgICAgICBsZXQgY29uc29sZU1zZyA9IGBNYW5kYXRvcnkgJHtwYXRoUGFyYW19IHBhdGggcGFyYW1ldGVyIGlzIG1pc3NpbmdgO1xuXG4gICAgICAgICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcihjb25zb2xlTXNnKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGNvbnNvbGVNc2cpO1xuXG4gICAgICAgICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmluZGV4T2YocGF0aFBhcmFtKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXNlZFBhdGhQYXJhbXNWYWx1ZXNbcGF0aEtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAvLyBSZXBsYWNpbmcgaW4gdGhlIHVybFxuICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShwYXRoUGFyYW0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92aW5nIGRvdWJsZSBzbGFzaGVkIGZyb20gZmluYWwgdXJsXG4gICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKTtcbiAgICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJzovJywgJzovLycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoID0gdGhpcy5yZW1vdmVUcmFpbGluZ1NsYXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXRob2RPcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2gpIHtcbiAgICAgICAgICAgIHdoaWxlICh1cmxbdXJsLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBSZW1vdmUgbWFwcGVkIHBhcmFtc1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZQYXRoUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoZGVmUGF0aFBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGRlZlBhdGhQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIERlZmF1bHQgc2VhcmNoIHBhcmFtcyBvciBkYXRhXG4gICAgICAgICAgbGV0IGJvZHk6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgICBsZXQgc2VhcmNoUGFyYW1zOiBhbnk7XG4gICAgICAgICAgaWYgKGlzR2V0UmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gR0VUXG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZQYXRoUGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTk9OIEdFVFxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IF9ib2R5OiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMucm9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBfYm9keVtgJHttZXRob2RPcHRpb25zLnJvb3ROb2RlfWBdID0gZGF0YTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYm9keSA9IGRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KF9ib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IGRlZlBhdGhQYXJhbXM7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBTZXR0aW5nIHNlYXJjaCBwYXJhbXNcbiAgICAgICAgICBsZXQgc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXMgPSAhIW1ldGhvZE9wdGlvbnMucXVlcnlFbmNvZGVyID8gbmV3IFVSTFNlYXJjaFBhcmFtcygnJywgbmV3IG1ldGhvZE9wdGlvbnMucXVlcnlFbmNvZGVyKCkpIDogbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4gICAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1c2VkUGF0aFBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSBzZWFyY2hQYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICBhcHBlbmRTZWFyY2hQYXJhbXMoc2VhcmNoLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZGluZyBUUyBpZiBuZWVkZWRcbiAgICAgICAgICBsZXQgdHNOYW1lID0gbWV0aG9kT3B0aW9ucy5hZGRUaW1lc3RhbXAgfHwgcmVzb3VyY2VPcHRpb25zLmFkZFRpbWVzdGFtcDtcbiAgICAgICAgICBpZiAodHNOYW1lKSB7XG4gICAgICAgICAgICBpZiAodHNOYW1lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRzTmFtZSA9ICd0cyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWFyY2guYXBwZW5kKHRzTmFtZSwgJycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZpbmcgQ29udGVudC1UeXBlIGhlYWRlciBpZiBubyBib2R5XG4gICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICBoZWFkZXJzLmRlbGV0ZSgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBDcmVhdGluZyByZXF1ZXN0IG9wdGlvbnNcbiAgICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2RPcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogbWV0aG9kT3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgfHwgcmVzb3VyY2VPcHRpb25zLndpdGhDcmVkZW50aWFsc1xuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAvLyBDcmVhdGluZyByZXF1ZXN0IG9iamVjdFxuICAgICAgICAgIGxldCByZXEgPSBuZXcgUmVxdWVzdChyZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgICByZXEgPSBtZXRob2RPcHRpb25zLnJlcXVlc3RJbnRlcmNlcHRvciA/XG4gICAgICAgICAgICBtZXRob2RPcHRpb25zLnJlcXVlc3RJbnRlcmNlcHRvcihyZXEsIG1ldGhvZE9wdGlvbnMpIDpcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEludGVyY2VwdG9yKHJlcSwgbWV0aG9kT3B0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoIXJlcSkge1xuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXJyb3IoJ1JlcXVlc3QgaXMgbnVsbCcpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlcXVlc3QgaXMgbnVsbCcpO1xuXG4gICAgICAgICAgICByZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByZXF1ZXN0T2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgICAgICAgaWYgKG1vY2tSZXF1ZXN0KSB7XG4gICAgICAgICAgICBsZXQgbW9ja0NvbGxlY3Rpb24gPSAhIW1ldGhvZE9wdGlvbnMubW9ja0NvbGxlY3Rpb24gPyBtZXRob2RPcHRpb25zLm1vY2tDb2xsZWN0aW9uIDoge2NvbGxlY3Rpb246IHJlc291cmNlT3B0aW9ucy5tb2NrQ29sbGVjdGlvbn07XG4gICAgICAgICAgICBsZXQgcmVzcDogYW55ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9ja0NvbGxlY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmVzcCA9IG1vY2tDb2xsZWN0aW9uKHByb3BlcnR5S2V5LCB1c2VkUGF0aFBhcmFtc1ZhbHVlcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzcCA9IGdldE1vY2tlZFJlc3BvbnNlKG1vY2tDb2xsZWN0aW9uLCB1c2VkUGF0aFBhcmFtc1ZhbHVlcywgSlNPTi5wYXJzZShib2R5KSwgbWV0aG9kT3B0aW9ucy5tZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzcCA9IG5ldyBGYWtlUmVzcG9uc2UocmVzcCk7XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuZnJvbShbcmVzcF0pO1xuXG4gICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgICAgIHJlcXVlc3RPYnNlcnZhYmxlID0gbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yID9cbiAgICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5yZXNwb25zZUludGVyY2VwdG9yLmJpbmQodGhpcykocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucykgOlxuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3IocmVxdWVzdE9ic2VydmFibGUsIHJlcSwgbWV0aG9kT3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERvaW5nIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICByZXF1ZXN0T2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3QocmVxLCBtZXRob2RPcHRpb25zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWV0aG9kT3B0aW9ucy5pc0xhenkpIHtcblxuICAgICAgICAgICAgbWFpbk9ic2VydmFibGUgPSByZXF1ZXN0T2JzZXJ2YWJsZTtcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIG1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCByZXFTdWJzY3I6IFN1YnNjcmlwdGlvbiA9IHJlcXVlc3RPYnNlcnZhYmxlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZE9wdGlvbnMuaXNBcnJheSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIGFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JldHVybmVkIGRhdGEgc2hvdWxkIGJlIGFuIGFycmF5LiBSZWNlaXZlZCcsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtYXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzcEl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcEl0ZW0uJHJlc291cmNlID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXREYXRhVG9PYmplY3QoaW5pdE9iamVjdC5iaW5kKHJlc3BJdGVtLiRyZXNvdXJjZSkoKSwgcmVzcEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3Rpbmcgb2JqZWN0XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmV0dXJuZWQgZGF0YSBzaG91bGQgYmUgYW4gb2JqZWN0LiBSZWNlaXZlZCcsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIocmVzcCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhVG9PYmplY3QocmV0LCBtYXAocmVzcCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmV0KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycjogYW55KSA9PiBzdWJzY3JpYmVyLmVycm9yKGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0LiRhYm9ydFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJldC4kcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVxU3Vic2NyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgcmV0LiRyZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEhdGhpcy5zdG9yYWdlICYmICEhbWV0aG9kT3B0aW9ucy5zdG9yYWdlQWN0aW9uKSB7XG4gICAgICAgICAgICBtYWluT2JzZXJ2YWJsZSA9IG1haW5PYnNlcnZhYmxlLmRvKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgbWV0aG9kT3B0aW9ucy5zdG9yYWdlQWN0aW9uLmJpbmQodGhpcykodGhpcy5zdG9yYWdlLCByZXNwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbGVhc2VNYWluRGVmZXJyZWRTdWJzY3JpYmVyKCk7XG5cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmV0O1xuXG4gICAgfTtcblxuICAgIGlmICghIW1ldGhvZE9wdGlvbnMuc3RvcmFnZUFjdGlvbiAmJiBtZXRob2RPcHRpb25zLnN0b3JhZ2VBY3Rpb24gPT09IFN0b3JhZ2VBY3Rpb24uTE9BRCkge1xuICAgICAgICB0YXJnZXQuc3RvcmFnZUxvYWQgPSAoPGFueT50YXJnZXQpW3Byb3BlcnR5S2V5XTtcbiAgICB9O1xuICB9O1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb09iamVjdChyZXQ6IGFueSwgcmVzcDogYW55KTogYW55IHtcblxuICBpZiAocmV0LiRzZXREYXRhKSB7XG4gICAgcmV0LiRzZXREYXRhKHJlc3ApO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5hc3NpZ24ocmV0LCByZXNwKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNlYXJjaFBhcmFtcyhzZWFyY2g6IFVSTFNlYXJjaFBhcmFtcywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgLy8vIENvbnZlcnQgZGF0ZXMgdG8gSVNPIGZvcm1hdCBzdHJpbmdcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG4gICAgc3dpdGNoIChSZXNvdXJjZUdsb2JhbENvbmZpZy5nZXRQYXJhbXNNYXBwaW5nVHlwZSkge1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjpcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBhcnJfdmFsdWUgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIHNlYXJjaC5hcHBlbmQoa2V5LCBhcnJfdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VhcmNoLmFwcGVuZChrZXksIHZhbHVlKTtcblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5CcmFja2V0OlxuICAgICAgICAvLy8gQ29udmVydCBvYmplY3QgYW5kIGFycmF5cyB0byBxdWVyeSBwYXJhbXNcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgYXBwZW5kU2VhcmNoUGFyYW1zKHNlYXJjaCwga2V5ICsgJ1snICsgayArICddJywgdmFsdWVba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIHNlYXJjaC5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGb3JQYXRoKGtleTogc3RyaW5nLCBwYXJhbXM6IGFueSwgZGF0YTogYW55LCB1c2VkUGF0aFBhcmFtczogYW55KTogc3RyaW5nIHtcblxuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGRhdGFba2V5XSkgJiYgdHlwZW9mIGRhdGFba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgICByZXR1cm4gZGF0YVtrZXldO1xuICB9XG5cbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHBhcmFtc1trZXldKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHBhcmFtc1trZXldWzBdID09PSAnQCcpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JQYXRoKHBhcmFtc1trZXldLnN1YnN0cigxKSwgcGFyYW1zLCBkYXRhLCB1c2VkUGF0aFBhcmFtcyk7XG4gIH1cblxuICB1c2VkUGF0aFBhcmFtc1trZXldID0gdHJ1ZTtcbiAgcmV0dXJuIHBhcmFtc1trZXldO1xuXG59XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvSlNPTihvYmo6IGFueSk6YW55IHtcbiAgbGV0IHJldE9iajogYW55ID0ge307XG5cbiAgZm9yIChsZXQgcHJvcE5hbWUgaW4gb2JqKSB7XG5cbiAgICBpZiAoIShvYmpbcHJvcE5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEocHJvcE5hbWUuY2hhckF0KDApID09PSAnJCcpKSB7XG4gICAgICByZXRPYmpbcHJvcE5hbWVdID0gb2JqW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gcmV0T2JqO1xufVxuXG5cbmNsYXNzIEZha2VSZXNwb25zZSB7XG4gIHByaXZhdGUgX3Jlc3A6IGFueTtcblxuICBjb25zdHJ1Y3RvcihyZXNwOiBhbnkpIHtcbiAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgfVxuXG4gIGdldCBfYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9yZXNwKTtcbiAgfVxuXG4gIGpzb24gPSAoKSA9PiB0aGlzLl9yZXNwO1xufVxuXG5cbmZ1bmN0aW9uIGdldE1vY2tlZFJlc3BvbnNlKGNvbGxlY3Rpb246IHtjb2xsZWN0aW9uOiBhbnksIGxvb2t1cFBhcmFtcz86IGFueX0sIHBhcmFtczogYW55LCBkYXRhOiBhbnksIHJlcXVlc3RNZXRob2Q6IFJlcXVlc3RNZXRob2QpIHtcbiAgaWYgKHJlcXVlc3RNZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5jb2xsZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNvbGxlY3Rpb24ubG9va3VwUGFyYW1zIHx8IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24ubG9va3VwUGFyYW1zKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtW2tleV0gPT09IHBhcmFtc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5jb2xsZWN0aW9uLmZpbHRlcigoaXRtOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29sbGVjdGlvbi5sb29rdXBQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uLmxvb2t1cFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBwYXJhbXNba2V5XSA9PT0gaXRtW2NvbGxlY3Rpb24ubG9va3VwUGFyYW1zW2tleV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5Qb3N0KSB7XG4gICAgY29sbGVjdGlvbi5jb2xsZWN0aW9uLnB1c2goZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAocmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5QdXQgfHwgcmVxdWVzdE1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5QYXRjaCApIHtcbiAgICAgIGxldCByZXN1bHQgPSBjb2xsZWN0aW9uLmNvbGxlY3Rpb24uZmluZCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBwYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgfSBlbHNlIGlmIChyZXF1ZXN0TWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSkge1xuICAgICAgbGV0IHJlc3VsdElkeCA9IGNvbGxlY3Rpb24uY29sbGVjdGlvbi5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGNvbGxlY3Rpb24uY29sbGVjdGlvbi5zcGxpY2UocmVzdWx0SWR4LCAxKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsImV4cG9ydCBlbnVtIFRHZXRQYXJhbXNNYXBwaW5nVHlwZSB7XG4gIFBsYWluLFxuICBCcmFja2V0XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUdsb2JhbENvbmZpZyB7XG4gIHN0YXRpYyB1cmw6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IG51bGw7XG4gIHN0YXRpYyBwYXRoOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgaGVhZGVyczogYW55IHwgUHJvbWlzZTxhbnk+ID0ge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9O1xuICBzdGF0aWMgcGFyYW1zOiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuICBzdGF0aWMgZGF0YTogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuICBzdGF0aWMgZ2V0UGFyYW1zTWFwcGluZ1R5cGU6IGFueSA9IFRHZXRQYXJhbXNNYXBwaW5nVHlwZS5QbGFpbjtcbiAgc3RhdGljIG1vY2tSZXNwb25zZXM6IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZUdsb2JhbENvbmZpZy50cyIsImltcG9ydCB7IEluamVjdG9yLCBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlUHJvdmlkZXJzIHtcblxuICBzdGF0aWMgbWFpblByb3ZpZGVyc05hbWU6IHN0cmluZyA9ICdfX21haW5Qcm92aWRlcnMnO1xuICBzdGF0aWMgcHJvdmlkZXJzOiB7IFtpZDogc3RyaW5nXTogUHJvdmlkZXJbXSB9ID0ge1xuICAgIF9fbWFpblByb3ZpZGVyczogW11cbiAgfTtcblxuICBzdGF0aWMgYWRkKHJlc291cmNlOiBUeXBlPFJlc291cmNlPiwgc3ViU2V0OiBzdHJpbmcgPSBudWxsKSB7XG5cbiAgICBpZiAoIXN1YlNldCkge1xuICAgICAgc3ViU2V0ID0gdGhpcy5tYWluUHJvdmlkZXJzTmFtZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW3N1YlNldF0pIHtcbiAgICAgIHRoaXMucHJvdmlkZXJzW3N1YlNldF0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGVwczogYW55W10gPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCByZXNvdXJjZSk7XG5cbiAgICBpZiAoIWRlcHMgfHwgZGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlcHMgPSBbSHR0cCwgSW5qZWN0b3JdO1xuICAgIH1cblxuICAgIHRoaXMucHJvdmlkZXJzW3N1YlNldF0ucHVzaChcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogcmVzb3VyY2UsXG4gICAgICAgIHVzZUZhY3Rvcnk6ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgcmVzb3VyY2UoLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlcHM6IGRlcHNcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0KHN1YlNldDogc3RyaW5nID0gbnVsbCk6IFByb3ZpZGVyW10ge1xuXG4gICAgaWYgKCFzdWJTZXQpIHtcbiAgICAgIHN1YlNldCA9IHRoaXMubWFpblByb3ZpZGVyc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW3N1YlNldF0gfHwgW107XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VQcm92aWRlcnMudHMiLCJpbXBvcnQge1Jlc291cmNlU3RvcmFnZVBhcmFtcywgU2VsZWN0ZWRTdG9yYWdlfSBmcm9tIFwiLi9JbnRlcmZhY2VzXCI7XG5pbXBvcnQge1Jlc291cmNlfSBmcm9tIFwiLi9SZXNvdXJjZVwiO1xuaW1wb3J0IHtUeXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VTdG9yYWdlIHtcbiAgcHJpdmF0ZSBxdWVyeVBhcmFtcyA9IHt9O1xuICBwcml2YXRlIF9pdGVyYXRpb25Qb2ludGVyID0gMDtcbiAgcHJpdmF0ZSBsb2FkSW1tZWRpYXRlbHkgPSB0cnVlO1xuICBwcml2YXRlIF9yZXN1bHRTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8U2VsZWN0ZWRTdG9yYWdlPGFueT4+O1xuXG4gIHJlc3VsdDogU2VsZWN0ZWRTdG9yYWdlPGFueT47XG4gIHJlc3VsdERhdGE6IGFueVtdID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc291cmNlOiBUeXBlPFJlc291cmNlPiwgcGFyYW1zOiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMpIHtcbiAgICB0aGlzLnVwZGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgIHRoaXMucmVzdWx0ID0gT2JqZWN0LmFzc2lnbih0aGlzLnJlc3VsdERhdGEsIHskbG9hZDogdGhpcy5sb2FkLmJpbmQodGhpcyksICRyZXNvbHZlZDogZmFsc2V9KTtcblxuICAgIC8qdGhpcy5yZXN1bHQubmV4dCA9ICgpOiBJdGVyYXRvclJlc3VsdDxhbnk+ID0+IHtcbiAgICAgIGlmICh0aGlzLl9pdGVyYXRpb25Qb2ludGVyIDwgdGhpcy5yZXN1bHREYXRhLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJlc3VsdERhdGFbdGhpcy5faXRlcmF0aW9uUG9pbnRlcisrXVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5yZXN1bHRbU3ltYm9sLml0ZXJhdG9yXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB9OyovXG5cbiAgICB0aGlzLl9yZXN1bHRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnJlc3VsdCk7XG4gICAgdGhpcy5yZXN1bHQuJG9ic2VydmFibGUgPSB0aGlzLl9yZXN1bHRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgKDxhbnk+cmVzb3VyY2UpLmluaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICg8YW55PnRoaXMucmVzb3VyY2UpLmluc3RhbmNlLnN0b3JhZ2UgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMubG9hZEltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXN1bHQuJHJlc291cmNlID0gKDxhbnk+dGhpcy5yZXNvdXJjZSkuaW5zdGFuY2U7XG4gICAgfSk7XG5cblxuICB9XG5cbiAgdXBkYXRlUGFyYW1zKHBhcmFtczogUmVzb3VyY2VTdG9yYWdlUGFyYW1zID0gPGFueT57fSkge1xuICAgIHRoaXMucXVlcnlQYXJhbXMgPSBwYXJhbXMucXVlcnlQYXJhbXMgfHwge307XG4gICAgdGhpcy5sb2FkSW1tZWRpYXRlbHkgPSBwYXJhbXMubG9hZEltbWVkaWF0ZWx5ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIGxvYWQoYXJncz86IGFueSkge1xuICAgIGNvbnN0IHFwID0gISFhcmdzID8gYXJncyA6IHRoaXMucXVlcnlQYXJhbXM7XG4gICAgY29uc3QgYWN0aW9uID0gKDxhbnk+dGhpcy5yZXNvdXJjZSkuaW5zdGFuY2Uuc3RvcmFnZUxvYWQ7XG4gICAgaWYgKCEhYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uYmluZCgoPGFueT50aGlzLnJlc291cmNlKS5pbnN0YW5jZSkocXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBcIlN0b3JhZ2UgTE9BRCBhY3Rpb24gaXMgbm90IGRlZmluZWRcIjtcbiAgICB9XG4gIH1cblxuICBmb3JjZVJlZnJlc2goKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnJlc3VsdCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnJlc3VsdCwgdGhpcy5yZXN1bHREYXRhKTtcbiAgICB0aGlzLnJlc3VsdC4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2l0ZXJhdGlvblBvaW50ZXIgPSAwO1xuICAgIHRoaXMuX3Jlc3VsdFN1YmplY3QubmV4dCh0aGlzLnJlc3VsdCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlU3RvcmFnZS50cyIsIlxuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2V9IGZyb20gXCIuL1Jlc291cmNlU3RvcmFnZVwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmFnZUFjdGlvbiA9IHtcbiAgTE9BRDogZnVuY3Rpb24gKHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSwgcmVzcDogYW55KSB7XG4gICAgc3RvcmFnZS5yZXN1bHREYXRhID0gcmVzcC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gISFpdGVtKTtcbiAgICBzdG9yYWdlLmZvcmNlUmVmcmVzaCgpO1xuICB9LFxuICBBREQ6IGZ1bmN0aW9uIChzdG9yYWdlOiBSZXNvdXJjZVN0b3JhZ2UsIHJlc3A6IGFueSkge1xuICAgIHN0b3JhZ2UucmVzdWx0RGF0YS5wdXNoKHJlc3ApO1xuICAgIHN0b3JhZ2UuZm9yY2VSZWZyZXNoKCk7XG4gIH0sXG4gIFVQREFURTogZnVuY3Rpb24gKHN0b3JhZ2U6IFJlc291cmNlU3RvcmFnZSwgcmVzcDogYW55KSB7XG4gICAgY29uc3QgcHJpbWFyeUtleSA9IHJlc3AuJHByaW1hcnlLZXkgfHwgJ2lkJztcbiAgICBjb25zdCBpZHggPSBzdG9yYWdlLnJlc3VsdERhdGEuZmluZEluZGV4KGl0ZW0gPT4gaXRlbVtwcmltYXJ5S2V5XSA9PT0gcmVzcFtwcmltYXJ5S2V5XSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICBzdG9yYWdlLnJlc3VsdERhdGFbaWR4XSA9IHJlc3A7XG4gICAgICBzdG9yYWdlLmZvcmNlUmVmcmVzaCgpO1xuICAgIH1cbiAgfSxcbiAgUkVNT1ZFOiBmdW5jdGlvbiAoc3RvcmFnZTogUmVzb3VyY2VTdG9yYWdlLCByZXNwOiBhbnkpIHtcbiAgICBjb25zdCBwcmltYXJ5S2V5ID0gcmVzcC4kcHJpbWFyeUtleSB8fCAnaWQnO1xuICAgIGNvbnN0IGlkeCA9IHN0b3JhZ2UucmVzdWx0RGF0YS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtW3ByaW1hcnlLZXldID09PSByZXNwW3ByaW1hcnlLZXldKTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHN0b3JhZ2UucmVzdWx0RGF0YS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHN0b3JhZ2UuZm9yY2VSZWZyZXNoKCk7XG4gICAgfVxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9TdG9yYWdlQWN0aW9uLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4vc3JjL1Jlc291cmNlUHJvdmlkZXJzJztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VBY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VDUlVEJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQ1JVREJhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvUmVzb3VyY2VNb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVBhcmFtcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVByb3ZpZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZVN0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvU2VsZWN0U3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9TdG9yYWdlQWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL0ludGVyZmFjZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZU1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgLy8gQ3JlYXRlIHNpbmdsZXRvbmVzIGZvciBhbGwgcmVzb3VyY2VzXG4gICAgbGV0IHByb3ZpZGVycyA9IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tSZXNvdXJjZVByb3ZpZGVycy5tYWluUHJvdmlkZXJzTmFtZV07XG4gICAgcHJvdmlkZXJzLmZvckVhY2gocHJvdmlkZXIgPT4ge1xuICAgICAgY29uc3QgUmVzb3VyY2VUeXBlID0gKDxhbnk+cHJvdmlkZXIpLnByb3ZpZGU7XG4gICAgICBjb25zdCByZXNvdXJjZUluc3RhbmNlID0gdGhpcy5faW5qZWN0b3IuZ2V0KFJlc291cmNlVHlwZSk7XG4gICAgICBSZXNvdXJjZVR5cGUuaW5zdGFuY2UgPSByZXNvdXJjZUluc3RhbmNlO1xuICAgICAgKDxhbnk+UmVzb3VyY2VUeXBlKS5faW5pdC5uZXh0KHJlc291cmNlSW5zdGFuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNvdXJjZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogUmVzb3VyY2VQcm92aWRlcnMucHJvdmlkZXJzW1Jlc291cmNlUHJvdmlkZXJzLm1haW5Qcm92aWRlcnNOYW1lXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoc3ViU2V0OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc291cmNlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBSZXNvdXJjZVByb3ZpZGVycy5wcm92aWRlcnNbc3ViU2V0XSA/IFJlc291cmNlUHJvdmlkZXJzLnByb3ZpZGVyc1tzdWJTZXRdIDogW11cbiAgICB9O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9uZ3gtcmVzb3VyY2UudHMiLCJpbXBvcnQgeyBSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzb3VyY2VNZXRob2QgfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb24gfSBmcm9tICcuL1Jlc291cmNlQWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFJlc291cmNlQ1JVRDxUUXVlcnksIFRTaG9ydCwgVEZ1bGw+IGV4dGVuZHMgUmVzb3VyY2Uge1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgaXNBcnJheTogdHJ1ZVxuICB9KVxuICBxdWVyeTogUmVzb3VyY2VNZXRob2Q8VFF1ZXJ5LCBUU2hvcnRbXT47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICBnZXQ6IFJlc291cmNlTWV0aG9kPHsgaWQ6IGFueSB9LCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICB9KVxuICBzYXZlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlB1dCxcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICB1cGRhdGU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuRGVsZXRlLFxuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIHJlbW92ZTogUmVzb3VyY2VNZXRob2Q8eyBpZDogYW55IH0sIGFueT47XG5cbiAgLy8gQWxpYXMgdG8gc2F2ZVxuICBjcmVhdGUoZGF0YTogVEZ1bGwsIGNhbGxiYWNrPzogKHJlczogVEZ1bGwpID0+IGFueSk6IFRGdWxsIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvUmVzb3VyY2VDUlVELnRzIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlTWV0aG9kIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uIH0gZnJvbSAnLi9SZXNvdXJjZUFjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUNSVURCYXNlPFRRdWVyeSwgVEtleXMsIFRTaG9ydCwgVEZ1bGw+IGV4dGVuZHMgUmVzb3VyY2Uge1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgaXNBcnJheTogdHJ1ZVxuICB9KVxuICBxdWVyeTogUmVzb3VyY2VNZXRob2Q8VFF1ZXJ5LCBUU2hvcnRbXT47XG5cbiAgQFJlc291cmNlQWN0aW9uKClcbiAgZ2V0OiBSZXNvdXJjZU1ldGhvZDxUS2V5cywgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgfSlcbiAgc2F2ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QdXRcbiAgfSlcbiAgdXBkYXRlOiBSZXNvdXJjZU1ldGhvZDxURnVsbCwgVEZ1bGw+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkRlbGV0ZVxuICB9KVxuICByZW1vdmU6IFJlc291cmNlTWV0aG9kPFRLZXlzLCBhbnk+O1xuXG4gIC8vIEFsaWFzIHRvIHNhdmVcbiAgY3JlYXRlKGRhdGE6IFRGdWxsLCBjYWxsYmFjaz86IChyZXM6IFRGdWxsKSA9PiBhbnkpOiBURnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShkYXRhLCBjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlQ1JVREJhc2UudHMiLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXNvdXJjZU1vZGVsPFI+IHtcblxuICAkcmVzb2x2ZWQ6IGJvb2xlYW47XG4gICRvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gICRhYm9ydFJlcXVlc3Q6ICgpID0+IHZvaWQ7XG4gICRyZXNvdXJjZTogUjtcbiAgJHByaW1hcnlLZXk6IHN0cmluZyA9ICdpZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kcmVzb3VyY2UgPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgncmVzb3VyY2UnLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoZGF0YTogYW55ID0ge30sIGNvbW1pdDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNb2RlbCBzdGF0aWMgY3JlYXRlIGlzIG5vdCBhdmFpbGFibGUgYW55bW9yZS4gUGxlYXNlIHVzZSBuZXcgWW91ck1vZGVsKCkgaW5zdGVhZCcpO1xuICB9XG5cbiAgcHVibGljICRzZXREYXRhKGRhdGE6IGFueSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG4gIHB1YmxpYyAkc2F2ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzTmV3KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuJHVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljICRjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgnc2F2ZScpO1xuICB9XG5cbiAgcHVibGljICR1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHJlc291cmNlX21ldGhvZCgndXBkYXRlJyk7XG4gIH1cblxuICBwdWJsaWMgJHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kcmVzb3VyY2VfbWV0aG9kKCdyZW1vdmUnKTtcbiAgfVxuXG4gIHB1YmxpYyB0b0pTT04oKTphbnkge1xuICAgIGxldCByZXRPYmo6IGFueSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gdGhpcykge1xuXG4gICAgICBpZiAoISgoPGFueT50aGlzKVtwcm9wTmFtZV0gaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgIShwcm9wTmFtZS5jaGFyQXQoMCkgPT09ICckJykpIHtcbiAgICAgICAgcmV0T2JqW3Byb3BOYW1lXSA9ICg8YW55PnRoaXMpW3Byb3BOYW1lXTtcbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gcmV0T2JqO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzTmV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKDxhbnk+dGhpcylbdGhpcy4kcHJpbWFyeUtleV07XG4gIH1cblxuICBwcml2YXRlICRyZXNvdXJjZV9tZXRob2QobWV0aG9kTmFtZTogc3RyaW5nKSB7XG5cbiAgICBpZiAoIXRoaXMuJHJlc291cmNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBZb3VyIFJlc291cmNlIGlzIG5vdCBzZXQuIFBsZWFzZSB1c2UgcmVzb3VyY2UuY3JlYXRlTW9kZWwoKSBtZXRob2QgdG8gY3JlYXRlIG1vZGVsLmApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKCEoPGFueT50aGlzLiRyZXNvdXJjZSlbbWV0aG9kTmFtZV0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdXIgUmVzb3VyY2UgaGFzIG5vIGltcGxlbWVudGVkICR7bWV0aG9kTmFtZX0gbWV0aG9kLmApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgKDxhbnk+dGhpcy4kcmVzb3VyY2UpW21ldGhvZE5hbWVdKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZXNvdXJjZVBhcmFtc0Jhc2UsIFJlc291cmNlU3RvcmFnZVBhcmFtc30gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCB7IFJlc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi9SZXNvdXJjZVByb3ZpZGVycyc7XG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHtSZXNvdXJjZVN0b3JhZ2V9IGZyb20gXCIuL1Jlc291cmNlU3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNvdXJjZVBhcmFtcyhwYXJhbXM6IFJlc291cmNlUGFyYW1zQmFzZSA9IHt9KSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IFR5cGU8UmVzb3VyY2U+KSB7XG5cbiAgICAoPGFueT50YXJnZXQpLmluaXQgPSAoPGFueT50YXJnZXQpLl9pbml0LmFzT2JzZXJ2YWJsZSgpLmZpbHRlcigoaW5zdGFuY2U6IFJlc291cmNlKSA9PiAhIWluc3RhbmNlKTtcblxuICAgICg8YW55PnRhcmdldCkuZ2V0U3RvcmFnZSA9IChzdG9yYWdlUGFyYW1zOiBSZXNvdXJjZVN0b3JhZ2VQYXJhbXMpID0+IHtcbiAgICAgIGlmICghISg8YW55PnRhcmdldCkuX3N0b3JhZ2UpIHtcbiAgICAgICAgKDxhbnk+dGFyZ2V0KS5fc3RvcmFnZS51cGRhdGVQYXJhbXMoc3RvcmFnZVBhcmFtcyk7XG4gICAgICAgIHJldHVybiAoPGFueT50YXJnZXQpLl9zdG9yYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZVN0b3JhZ2UodGFyZ2V0LCBzdG9yYWdlUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGFyZ2V0LnByb3RvdHlwZS5nZXRSZXNvdXJjZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLmFkZDJQcm92aWRlcyAhPT0gZmFsc2UpIHtcbiAgICAgIFJlc291cmNlUHJvdmlkZXJzLmFkZCh0YXJnZXQsIHBhcmFtcy5wcm92aWRlcnNTdWJTZXQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnJlbW92ZVRyYWlsaW5nU2xhc2ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLnJlbW92ZVRyYWlsaW5nU2xhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIXBhcmFtcy5yZW1vdmVUcmFpbGluZ1NsYXNoO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnVybCkge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnVybDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5wYXRoKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXRQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnBhdGg7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaGVhZGVycykge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0SGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5oZWFkZXJzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnBhcmFtcykge1xuICAgICAgdGFyZ2V0LnByb3RvdHlwZS5fZ2V0UGFyYW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnBhcmFtcztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5kYXRhKSB7XG4gICAgICB0YXJnZXQucHJvdG90eXBlLl9nZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRhdGE7XG4gICAgICB9O1xuICAgIH1cblxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL1Jlc291cmNlUGFyYW1zLnRzIiwiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4vSW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RTdG9yYWdlKHJlc291cmNlOiBUeXBlPFJlc291cmNlPiwgcGFyYW1zPzogUmVzb3VyY2VTdG9yYWdlUGFyYW1zKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSAoPGFueT5yZXNvdXJjZSkuZ2V0U3RvcmFnZShwYXJhbXMpO1xuXG4gICAgc3RvcmFnZS5fcmVzdWx0U3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAoPGFueT50YXJnZXQpW3Byb3BlcnR5S2V5XSA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvU2VsZWN0U3RvcmFnZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=