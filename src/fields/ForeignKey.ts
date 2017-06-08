
import { ResourceModel } from '../ResourceModel';
import { Type } from '@angular/core';
import { Resource } from '../Resource';

export function ForeignKey(params: {target: Type<ResourceModel<any>>, keyField: string, resourceGetAction?: string}) {
  params.resourceGetAction = !!params.resourceGetAction ? params.resourceGetAction : 'get';

  return function (target: ResourceModel<any>, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        get: function () {
            const foreignId = (<any>target)[params.keyField];
            let foreignModel: ResourceModel<any>;
            if (foreignId) {
              const foreignResource: Resource = (<any>Reflect).getMetadata('resource', params.target);
              if (!!foreignResource && !!foreignResource.storage) {
                foreignModel = foreignResource.storage.resultData.find((item) => item[item.$primaryKey] === foreignId);
                if (!!foreignModel) {
                  return foreignModel;
                }
              } else if (!!foreignResource) {
                const action = (<any>foreignResource)[params.resourceGetAction];
                if (!!action) {
                  const queryParams = {};
                  (<any>queryParams)[(new params.target()).$primaryKey] = foreignId;
                  return action.bind(foreignResource)(queryParams);
                };
              };
            }
        }
    });
  };
}
