import { ModuleWithProviders } from '@angular/core';
export * from './src/Resource';
export * from './src/ResourceAction';
export * from './src/ResourceCRUD';
export * from './src/ResourceCRUDBase';
export * from './src/ResourceGlobalConfig';
export * from './src/ResourceModel';
export * from './src/ResourceParams';
export * from './src/ResourceProviders';
export * from './src/ResourceStorage';
export * from './src/ResourceStorages';
export * from './src/SelectStorage';
export * from './src/Interfaces';
export declare class ResourceModule {
    constructor();
    static forRoot(): ModuleWithProviders;
    static forChild(subSet: string): ModuleWithProviders;
}
