import { Observable } from 'rxjs/Rx';
import { Resource } from "./Resource";
export declare abstract class ResourceModel {
    $resolved: boolean;
    $observable: Observable<any>;
    $abortRequest: () => void;
    $resource: Resource;
    $primaryKey: string;
    constructor();
    static create(data?: any, commit?: boolean): void;
    $setData(data: any): this;
    $save(): this;
    $create(): this;
    $update(): this;
    $remove(): this;
    toJSON(): any;
    protected isNew(): boolean;
    private $resource_method(methodName);
}
