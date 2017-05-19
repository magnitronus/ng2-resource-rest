import { ResourceStorage } from "./ResourceStorage";
export function ResourceStore(resource) {
    return function (target, propertyKey) {
        ResourceStorage.stores.addStore(resource.name, { target: target, propertyKey: propertyKey });
    };
}
