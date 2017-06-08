export function ResourceModelParams(params) {
    return function (target) {
        Reflect.defineMetadata('resource', params.resource, target);
    };
}
