var Stores = (function () {
    function Stores(store) {
        this._stores = [];
        if (store) {
            this._stores.push(store);
        }
    }
    Stores.prototype.push = function (val) {
        if (this._storage) {
            val.target[val.propertyKey] = this._storage.data;
        }
        this._stores.push(val);
    };
    Stores.prototype.setData = function (storage) {
        this._storage = storage;
        this._stores.forEach(function (store) { return store.target[store.propertyKey] = storage.data; });
    };
    Object.defineProperty(Stores.prototype, "stores", {
        get: function () {
            return this._stores;
        },
        enumerable: true,
        configurable: true
    });
    return Stores;
}());
export { Stores };
var StoresHash = (function () {
    function StoresHash() {
        this._storesHash = {};
    }
    StoresHash.prototype.addStore = function (resourceName, store) {
        if (this._storesHash[resourceName] && store) {
            this._storesHash[resourceName].push(store);
        }
        else if (!this._storesHash[resourceName]) {
            this._storesHash[resourceName] = new Stores(store);
        }
        return this._storesHash[resourceName];
    };
    return StoresHash;
}());
export { StoresHash };
var ResourceStorage = (function () {
    function ResourceStorage(_resource, _params) {
        this._resource = _resource;
        this._params = _params;
        this._storage = [];
        ResourceStorage.instances[_resource.constructor.name] = this;
        var resourceStores = ResourceStorage.stores.addStore(_resource.constructor.name);
        resourceStores.setData(this);
    }
    Object.defineProperty(ResourceStorage.prototype, "data", {
        get: function () {
            var _this = this;
            if (!this._initialized) {
                this._initialized = true;
                this._resource.initialized
                    .filter(function (val) { return val; })
                    .subscribe(function () {
                    var action = _this._resource[_this._params.action];
                    action.bind(_this._resource)(_this._params.actionParams)
                        .$observable
                        .subscribe(function (models) { return _this._storage = models; });
                });
            }
            return this._storage;
        },
        enumerable: true,
        configurable: true
    });
    return ResourceStorage;
}());
export { ResourceStorage };
ResourceStorage.instances = {};
ResourceStorage.stores = new StoresHash();
