import { Injector, ModuleWithProviders } from '@angular/core';
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
export * from './src/Interfaces';
export declare class ResourceModule {
    private _injector;
    constructor(_injector: Injector);
    static forRoot(): ModuleWithProviders;
    static forChild(subSet: string): ModuleWithProviders;
}
