import { Type } from '@angular/core';
import { ResourceModelParamsBase } from './Interfaces';
import { ResourceModel } from "./ResourceModel";


export function ResourceModelParams(params: ResourceModelParamsBase) {

  return function (target: Type<ResourceModel>) {
    (<any>Reflect).defineMetadata('resource', params.resource, target);
  };
}
