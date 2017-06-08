"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Resource_1 = require("./Resource");
var ResourceAction_1 = require("./ResourceAction");
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
}(Resource_1.Resource));
__decorate([
    ResourceAction_1.ResourceAction({
        isArray: true
    })
], ResourceCRUDBase.prototype, "query", void 0);
__decorate([
    ResourceAction_1.ResourceAction()
], ResourceCRUDBase.prototype, "get", void 0);
__decorate([
    ResourceAction_1.ResourceAction({
        method: http_1.RequestMethod.Post
    })
], ResourceCRUDBase.prototype, "save", void 0);
__decorate([
    ResourceAction_1.ResourceAction({
        method: http_1.RequestMethod.Put
    })
], ResourceCRUDBase.prototype, "update", void 0);
__decorate([
    ResourceAction_1.ResourceAction({
        method: http_1.RequestMethod.Delete
    })
], ResourceCRUDBase.prototype, "remove", void 0);
exports.ResourceCRUDBase = ResourceCRUDBase;
