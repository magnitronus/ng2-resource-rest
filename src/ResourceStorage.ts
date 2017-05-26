import {ResourceStorageParams} from "./Interfaces";
import {Resource} from "./Resource";


export class ResourceStorage {
  private queryActionName = 'query';
  private queryParams = {};
  private loadImmediately = true;

  private _data = {};

  constructor(private resource: Resource, params: ResourceStorageParams) {
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
    const action = (<any>this.resource)[this.queryActionName].bind(this.resource);
    action(qp).$observable
      .subscribe((items: any) => {
        this._data = items;
      });
  }

  get result(): any {
    return Object.assign({}, this._data, { $load: this.load.bind(this) });
  }

}
