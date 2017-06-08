"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ForeignKey(params) {
    params.resourceGetAction = !!params.resourceGetAction ? params.resourceGetAction : 'get';
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                var foreignId = target[params.keyField];
                var foreignModel;
                if (foreignId) {
                    var foreignResource = Reflect.getMetadata('resource', params.target);
                    if (!!foreignResource && !!foreignResource.storage) {
                        foreignModel = foreignResource.storage.resultData.find(function (item) { return item[item.$primaryKey] === foreignId; });
                        if (!!foreignModel) {
                            return foreignModel;
                        }
                    }
                    else if (!!foreignResource) {
                        var action = foreignResource[params.resourceGetAction];
                        if (!!action) {
                            var queryParams = {};
                            queryParams[(new params.target()).$primaryKey] = foreignId;
                            return action.bind(foreignResource)(queryParams);
                        }
                        ;
                    }
                    ;
                }
            }
        });
    };
}
exports.ForeignKey = ForeignKey;
