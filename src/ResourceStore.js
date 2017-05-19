import { ResourceStorage } from "./ResourceStorage";
export function ResourceStore(resource) {
    return function (target, propertyKey) {
        if (!ResourceStorage.stores[resource.name]) {
            ResourceStorage.stores[resource.name] = [];
        }
        ;
        ResourceStorage.stores[resource.name].push({ target: target, propertyKey: propertyKey });
    };
}
