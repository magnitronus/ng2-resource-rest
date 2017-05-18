import { ResourceStorageParamsBase } from "./Interfaces";
import { Resource } from "./Resource";
export declare function ResourceStorageParams(storageOptions?: ResourceStorageParamsBase): (target: Resource, propertyKey: string) => void;
