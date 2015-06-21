/// <references path="../node_modules/angular2/angular2.d.ts" />
/// <references path="../node_modules/angular2/http.d.ts" />
/// <references path="../node_modules/angular2/router.d.ts" />
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
var di_1 = require('angular2/di');
var change_detection_1 = require('angular2/change_detection');
var pipes_1 = require('app/components/pipes/pipes');
var customers_1 = require('app/components/customers/customers');
var orders_1 = require('app/components/orders/orders');
var http_1 = require('angular2/http');
var App = (function () {
    function App(router, browserLocation) {
        this.router = router;
        this.browserLocation = browserLocation;
        this.router = router;
        //Manual navigation for now
        var url = this.browserLocation.path();
        router.navigate(url);
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet],
            template: "<router-outlet></router-outlet>"
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/customers' },
            { path: '/customers', as: 'customers', component: customers_1.Customers },
            { path: '/orders', as: 'orders', component: orders_1.Orders }
        ]), 
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object, (typeof BrowserLocation !== 'undefined' && BrowserLocation) || Object])
    ], App);
    return App;
})();
exports.App = App;
//Bootstrap App
angular2_1.bootstrap(App, [
    http_1.httpInjectables,
    router_1.routerInjectables,
    //Hook custom pipe into the PipeRegistry
    di_1.bind(change_detection_1.PipeRegistry).toValue(new change_detection_1.PipeRegistry(pipes_1.pipes))
]);
//# sourceMappingURL=app.js.map