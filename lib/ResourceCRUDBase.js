"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require('@angular/http');
var Resource_1 = require('./Resource');
var ResourceAction_1 = require('./ResourceAction');
var ResourceCRUDBase = (function (_super) {
    __extends(ResourceCRUDBase, _super);
    function ResourceCRUDBase() {
        _super.apply(this, arguments);
    }
    // Alias to save
    ResourceCRUDBase.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    __decorate([
        ResourceAction_1.ResourceAction({
            isArray: true
        })
    ], ResourceCRUDBase.prototype, "query");
    __decorate([
        ResourceAction_1.ResourceAction()
    ], ResourceCRUDBase.prototype, "get");
    __decorate([
        ResourceAction_1.ResourceAction({
            method: http_1.RequestMethod.Post
        })
    ], ResourceCRUDBase.prototype, "save");
    __decorate([
        ResourceAction_1.ResourceAction({
            method: http_1.RequestMethod.Put
        })
    ], ResourceCRUDBase.prototype, "update");
    __decorate([
        ResourceAction_1.ResourceAction({
            method: http_1.RequestMethod.Delete
        })
    ], ResourceCRUDBase.prototype, "remove");
    return ResourceCRUDBase;
}(Resource_1.Resource));
exports.ResourceCRUDBase = ResourceCRUDBase;
