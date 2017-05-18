import { Resource } from "./Resource";
import { Type } from "@angular/core";
export declare function ResourceStore(resource: Type<Resource>): (target: any, propertyKey: string) => void;
