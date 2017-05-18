import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ResourceProviders } from './src/ResourceProviders';
export * from './src/Resource';
export * from './src/ResourceAction';
export * from './src/ResourceCRUD';
export * from './src/ResourceCRUDBase';
export * from './src/ResourceGlobalConfig';
export * from './src/ResourceModel';
export * from './src/ResourceParams';
export * from './src/ResourceProviders';
export * from './src/ResourceStorage';
export * from './src/ResourceStorageParams';
export * from './src/ResourceStore';
var ResourceModule = (function () {
    function ResourceModule(_injector) {
        var _this = this;
        this._injector = _injector;
        var providers = ResourceProviders.providers[ResourceProviders.mainProvidersName];
        providers.forEach(function (provider) { return _this._injector.get(provider); });
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule,
            providers: ResourceProviders.providers[ResourceProviders.mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule,
            providers: ResourceProviders.providers[subSet] ? ResourceProviders.providers[subSet] : []
        };
    };
    return ResourceModule;
}());
export { ResourceModule };
ResourceModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpModule]
            },] },
];
/** @nocollapse */
ResourceModule.ctorParameters = function () { return [
    { type: Injector, },
]; };
