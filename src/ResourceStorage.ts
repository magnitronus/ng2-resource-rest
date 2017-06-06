import {ResourceStorageParams, SelectedStorage} from "./Interfaces";
import {Resource} from "./Resource";
import {Type} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class ResourceStorage {
  private queryActionName: string;
  private queryParams = {};
  private loadImmediately = true;
  private _resultSubject: BehaviorSubject<SelectedStorage<any>>;

  result: SelectedStorage<any>;
  resultData: any[] = [];


  constructor(private resource: Type<Resource>, params: ResourceStorageParams) {
    this.updateParams(params);
    this.result = Object.assign({$load: this.load.bind(this), $resolved: false}, this.resultData);
    this.result[Symbol.iterator] = () => {
      let pointer = 0;
      let items = this.resultData;
      return {
        next(): IteratorResult<any> {
          if (pointer < items.length) {
            return {
              done: false,
              value: items[pointer++]
            };
          } else {
            return {
              done: true,
              value: null
            };
          }
        }
      };
    };

    this._resultSubject = new BehaviorSubject(this.result);
    this.result.$observable = this._resultSubject.asObservable();
    (<any>resource).init.subscribe(() => {
      (<any>this.resource).instance.storage = this;
      if (this.loadImmediately) {
        this.load();
      }
      this.result.$resource = (<any>this.resource).instance;
    });


  }

  updateParams(params: ResourceStorageParams = <any>{}) {
    this.queryParams = params.queryParams || {};
    this.loadImmediately = params.loadImmediately === false ? false : true;
  }

  load(args?: any) {
    const qp = !!args ? args : this.queryParams;
    this.queryActionName = (<any>this.resource).instance.storageLoadRA;
    const action = (<any>this.resource).instance[this.queryActionName].bind((<any>this.resource).instance);
    action(qp).$observable.subscribe((result: any[]) => {
      this.resultData = result.filter(item => !!item);
      this.forceRefresh();
    });
  }

  forceRefresh() {
    Object.assign(this.result, this.resultData);
    this.result.$resolved = true;
    this._resultSubject.next(this.result);
  }

}
