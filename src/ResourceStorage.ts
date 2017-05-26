import {ResourceStorageParams, SelectedStorage} from "./Interfaces";
import {Resource} from "./Resource";
import {Type} from "@angular/core";


export class ResourceStorage {
  private queryActionName = 'query';
  private queryParams = {};
  private loadImmediately = true;

  result: SelectedStorage<any>;

  constructor(private resource: Type<Resource>, params: ResourceStorageParams) {
    this.updateParams(params);
    this.result = {$load: this.load.bind(this)};
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
    this.result = Object.assign({$load: this.load.bind(this)}, action(qp));
  }


}
