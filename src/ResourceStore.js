import { ResourceStorage } from "./ResourceStorage";
export function ResourceStore(resource) {
    return function (target, propertyKey) {
        target[propertyKey] = ResourceStorage.instances[resource.toString()].data;
    };
}
