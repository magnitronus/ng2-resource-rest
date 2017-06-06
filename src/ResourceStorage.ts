import {ResourceStorageParams, SelectedStorage} from "./Interfaces";
import {Resource} from "./Resource";
import {EventEmitter, Type} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class ResourceStorage {
  private queryActionName = 'query';
  private queryParams = {};
  private loadImmediately = true;

  onResultChange: EventEmitter<SelectedStorage<any>> = new EventEmitter();

  private _result: SelectedStorage<any>;
  private _resultSubject: BehaviorSubject<SelectedStorage<any>>;

  constructor(private resource: Type<Resource>, params: ResourceStorageParams) {
    this.updateParams(params);
    (<any>resource).init.subscribe(() => {
      if (this.loadImmediately) {
        this.load();
      }
       this._result = Object.assign({$load: this.load.bind(this), $resource: (<any>this.resource).instance, $resolved: false}, []);
       this._resultSubject = new BehaviorSubject(this._result);
       this._result.$observable = this._resultSubject.asObservable();
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
      this._result = Object.assign(this._result, result.filter(item => !!item));
      this._resultSubject.next(this._result);
    });
    this.result = Object.assign({$load: this.load.bind(this)}, action(qp));
  }

  get result() {
    return this._result;
  }

  set result(val: any) {
    this._result = val;
    this.onResultChange.emit(val);
  }


}
