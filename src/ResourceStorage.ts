import {ResourceStorageParams, SelectedStorage} from "./Interfaces";
import {Resource} from "./Resource";
import {EventEmitter, Type} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class ResourceStorage {
  private queryActionName = 'query';
  private queryParams = {};
  private loadImmediately = true;

  onResultChange: EventEmitter<SelectedStorage<any>> = new EventEmitter();

  result: SelectedStorage<any>;
  private _resultSubject: BehaviorSubject<SelectedStorage<any>>;

  constructor(private resource: Type<Resource>, params: ResourceStorageParams) {
    this.updateParams(params);
    this.result = Object.assign({$load: this.load.bind(this), $resolved: false}, []);
    this._resultSubject = new BehaviorSubject(this.result);
    this.result.$observable = this._resultSubject.asObservable();
    (<any>resource).init.subscribe(() => {
      if (this.loadImmediately) {
        this.load();
      }
       this.result.$resource = (<any>this.resource).instance;
    });


  }

  updateParams(params: ResourceStorageParams = <any>{}) {
    this.queryActionName = params.queryActionName || 'query';
    this.queryParams = params.queryParams || {};
    this.loadImmediately = params.loadImmediately === false ? false : true;
  }

  load(args?: any) {
    const qp = !!args ? args : this.queryParams;
    const action = (<any>this.resource).instance[this.queryActionName].bind((<any>this.resource).instance);
    action(qp).$observable.subscribe((result: any[]) => {
      Object.assign(this.result, result.filter(item => !!item));
      this._resultSubject.next(this.result);
    });
  }

}
