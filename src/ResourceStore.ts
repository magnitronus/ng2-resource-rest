import {Resource} from "./Resource";
import {ResourceStorage} from "./ResourceStorage";
import {Type} from "@angular/core";


export function ResourceStore(resource: Type<Resource>) {

  return function (target: any, propertyKey: string) {
    if (!ResourceStorage.stores[resource.name]) {
      ResourceStorage.stores[resource.name] = [];
    };
    ResourceStorage.stores[resource.name].push({target: target, propertyKey: propertyKey});
  };

}
