var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RequestMethod } from '@angular/http';
import { Resource } from './Resource';
import { ResourceAction } from './ResourceAction';
export var ResourceCRUD = (function (_super) {
    __extends(ResourceCRUD, _super);
    function ResourceCRUD() {
        _super.apply(this, arguments);
    }
    // Alias to save
    ResourceCRUD.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    __decorate([
        ResourceAction({
            isArray: true
        }), 
        __metadata('design:type', Function)
    ], ResourceCRUD.prototype, "query", void 0);
    __decorate([
        ResourceAction({
            path: '/{!id}'
        }), 
        __metadata('design:type', Function)
    ], ResourceCRUD.prototype, "get", void 0);
    __decorate([
        ResourceAction({
            method: RequestMethod.Post
        }), 
        __metadata('design:type', Function)
    ], ResourceCRUD.prototype, "save", void 0);
    __decorate([
        ResourceAction({
            method: RequestMethod.Put,
            path: '/{!id}'
        }), 
        __metadata('design:type', Function)
    ], ResourceCRUD.prototype, "update", void 0);
    __decorate([
        ResourceAction({
            method: RequestMethod.Delete,
            path: '/{!id}'
        }), 
        __metadata('design:type', Function)
    ], ResourceCRUD.prototype, "remove", void 0);
    return ResourceCRUD;
}(Resource));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VDUlVELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzb3VyY2VDUlVELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxlQUFlO09BQ3BDLEVBQUMsUUFBUSxFQUFDLE1BQU0sWUFBWTtPQUU1QixFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQjtBQUUvQztJQUF5RCxnQ0FBUTtJQUFqRTtRQUF5RCw4QkFBUTtJQWtDakUsQ0FBQztJQUxDLGdCQUFnQjtJQUNoQiw2QkFBTSxHQUFOLFVBQU8sSUFBVyxFQUFFLFFBQThCO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBOUJEO1FBQUMsY0FBYyxDQUFDO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDOzsrQ0FBQTtJQUdGO1FBQUMsY0FBYyxDQUFDO1lBQ2QsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOzs2Q0FBQTtJQUdGO1FBQUMsY0FBYyxDQUFDO1lBQ2QsTUFBTSxFQUFFLGFBQWEsQ0FBQyxJQUFJO1NBQzNCLENBQUM7OzhDQUFBO0lBR0Y7UUFBQyxjQUFjLENBQUM7WUFDZCxNQUFNLEVBQUUsYUFBYSxDQUFDLEdBQUc7WUFDekIsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOztnREFBQTtJQUdGO1FBQUMsY0FBYyxDQUFDO1lBQ2QsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1lBQzVCLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzs7Z0RBQUE7SUFRSixtQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBeUQsUUFBUSxHQWtDaEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlcXVlc3RNZXRob2R9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtSZXNvdXJjZX0gZnJvbSAnLi9SZXNvdXJjZSc7XG5pbXBvcnQge1Jlc291cmNlTWV0aG9kfSBmcm9tICcuL0ludGVyZmFjZXMnO1xuaW1wb3J0IHtSZXNvdXJjZUFjdGlvbn0gZnJvbSAnLi9SZXNvdXJjZUFjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUNSVUQ8VFF1ZXJ5LCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIGlzQXJyYXk6IHRydWVcbiAgfSlcbiAgcXVlcnk6IFJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgZ2V0OiBSZXNvdXJjZU1ldGhvZDx7aWQ6IGFueX0sIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gIH0pXG4gIHNhdmU6IFJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0LFxuICAgIHBhdGg6ICcveyFpZH0nXG4gIH0pXG4gIHVwZGF0ZTogUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5EZWxldGUsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgcmVtb3ZlOiBSZXNvdXJjZU1ldGhvZDx7aWQ6IGFueX0sIGFueT47XG5cbiAgLy8gQWxpYXMgdG8gc2F2ZVxuICBjcmVhdGUoZGF0YTogVEZ1bGwsIGNhbGxiYWNrPzogKHJlczogVEZ1bGwpID0+IGFueSk6IFRGdWxsIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==