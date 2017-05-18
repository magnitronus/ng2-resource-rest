import {Injector, ModuleWithProviders, NgModule, ReflectiveInjector} from '@angular/core';
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
export * from './src/Interfaces';

@NgModule({
  imports: [CommonModule, HttpModule]
})
export class ResourceModule {

  constructor(private _injector: Injector) {
    console.log(this._injector);
    let providers = ResourceProviders.providers[ResourceProviders.mainProvidersName];
    let injector = ReflectiveInjector.resolveAndCreate(providers);
    providers.forEach(provider => injector.get(provider));
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ResourceModule,
      providers: ResourceProviders.providers[ResourceProviders.mainProvidersName]
    };
  }

  static forChild(subSet: string): ModuleWithProviders {
    return {
      ngModule: ResourceModule,
      providers: ResourceProviders.providers[subSet] ? ResourceProviders.providers[subSet] : []
    };
  }

}
