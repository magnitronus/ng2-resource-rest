
import {ResourceStorageParamsBase} from "./Interfaces";
import {Resource} from "./Resource";

export class ResourceStorage<ModelType> {

  private _storage: ModelType[] = [];
  private _initialized: boolean;

  constructor(private _resource: Resource, private _params: ResourceStorageParamsBase) {

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
