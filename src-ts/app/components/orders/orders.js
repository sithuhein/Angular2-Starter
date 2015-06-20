if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var dataService_1 = require('app/services/dataService');
var Orders = (function () {
    function Orders(dataService) {
        this.title = 'Orders';
    }
    Orders = __decorate([
        angular2_1.ComponentAnnotation({
            selector: 'orders',
            hostInjector: [dataService_1.DataService]
        }),
        angular2_1.ViewAnnotation({
            templateUrl: 'app/components/orders/orders.html',
            directives: [angular2_1.NgFor, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService])
    ], Orders);
    return Orders;
})();
exports.Orders = Orders;
//# sourceMappingURL=orders.js.map