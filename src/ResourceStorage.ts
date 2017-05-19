
import {ResourceStorageParamsBase} from "./Interfaces";
import {Resource} from "./Resource";


export class ResourceStorage<ModelType> {

  private _storage: ModelType[] = [];
  private _initialized: boolean;

  static instances: {[key: string]: ResourceStorage<any>} = {};
  static stores: {[key:string]: {target: any, propertyKey: string;}[]} = {};

  constructor(private _resource: Resource, private _params: ResourceStorageParamsBase) {
    ResourceStorage.instances[_resource.constructor.name] = this;
    const resourceStores = ResourceStorage.stores[_resource.constructor.name] || [];
    resourceStores.forEach(store => store.target[store.propertyKey] = this.data);
  }

  get data() {
    if (!this._initialized) {
      this._initialized = true;
      const action = (<any>this._resource)[this._params.action];
      action(this._params.actionParams)
        .bind(this._resource)
        .subscribe((models: ModelType[]) => this._storage = models);
    }
    return this._storage;
  }

}
