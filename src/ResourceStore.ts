import {Resource} from "./Resource";
import {ResourceStorage} from "./ResourceStorage";
import {Type} from "@angular/core";


export function ResourceStore(resource: Type<Resource>) {

  return function (target: any, propertyKey: string) {
    ResourceStorage.stores.addStore(resource.name, {target: target, propertyKey: propertyKey});
  };

}
