
import {ResourceStorageParamsBase} from "./Interfaces";
import {Resource} from "./Resource";

export class Stores {
  private _stores: {target: any, propertyKey: string;}[] = [];
  private _storage: ResourceStorage<any>;

  constructor(store?: {target: any, propertyKey: string;}) {
    if (store) {
      this._stores.push(store);
    }
  }

  push(val: {target: any, propertyKey: string;}) {
    if (this._storage) {
      val.target[val.propertyKey] = this._storage.data;
    }
    this._stores.push(val);
  }

  setData(storage: ResourceStorage<any>) {
    this._storage = storage;
    this._stores.forEach(store => store.target[store.propertyKey] = storage.data)
  }

  get stores() {
    return this._stores;
  }
}

export class StoresHash {
  private _storesHash: {[key:string]: Stores} = {};

  addStore(resourceName: string, store?: {target: any, propertyKey: string;}) {
    if (this._storesHash[resourceName] && store) {
      this._storesHash[resourceName].push(store);
    } else if (!this._storesHash[resourceName]) {
      this._storesHash[resourceName] = new Stores(store);
    }
    return this._storesHash[resourceName];
  }

}


export class ResourceStorage<ModelType> {

  private _storage: ModelType[] = [];
  private _initialized: boolean;

  static instances: {[key: string]: ResourceStorage<any>} = {};
  static stores: StoresHash = new StoresHash();

  constructor(private _resource: Resource, private _params: ResourceStorageParamsBase) {
    ResourceStorage.instances[_resource.constructor.name] = this;
    const resourceStores = ResourceStorage.stores.addStore(_resource.constructor.name);
    resourceStores.setData(this);
  }

  get data() {
    if (!this._initialized) {
      this._initialized = true;
      this._resource.initialized
        .filter(val => val)
        .subscribe(() => {
          const action = (<any>this._resource)[this._params.action];
          action.bind(this._resource)(this._params.actionParams)
            .$observable
            .subscribe((models: ModelType[]) => this._storage = models);
        });
    }
    return this._storage;
  }

}
