import {ResourceStorageParams} from "./Interfaces";
import {Resource} from "./Resource";
import {Type} from "@angular/core";


export class ResourceStorage {
  private queryActionName = 'query';
  private queryParams = {};
  private loadImmediately = true;

  private _data = {};

  constructor(private resource: Type<Resource>, params: ResourceStorageParams) {
    this.updateParams(params);
    if (this.loadImmediately) {
      this.load();
    }
  }

  updateParams(params: ResourceStorageParams = <any>{}) {
    this.queryActionName = params.queryActionName || 'query';
    this.queryParams = params.queryParams || {};
    this.loadImmediately = params.loadImmediately === false ? false : true;
  }

  load(args?: any) {
    const qp = !!args ? args : this.queryParams;
    const action = (<any>this.resource).instance[this.queryActionName].bind((<any>this.resource).instance);
    this._data = action(qp);
  }

  get result(): any {
    return Object.assign({}, this._data, { $load: this.load.bind(this) });
  }

}
