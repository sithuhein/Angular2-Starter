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
var filterTextbox_1 = require('app/components/filterTextbox/filterTextbox');
var sorter_1 = require('app/utils/sorter');
var sortBy_1 = require('app/components/sortBy/sortBy');
var Customers = (function () {
    function Customers(router, dataService) {
        var _this = this;
        this.router = router;
        this.title = 'Customers';
        this.customers = this.filteredCustomers = [];
        this.sorter = new sorter_1.Sorter();
        dataService.getCustomers().map(function (res) { return res.json(); }).subscribe(function (custs) {
            _this.customers = _this.filteredCustomers = custs;
        });
    }
    Customers.prototype.filterChanged = function (data) {
        if (data) {
            data = data.toUpperCase();
            var props = ['firstName', 'lastName', 'address', 'orderTotal'];
            var filtered = this.customers.filter(function (item) {
                var match = false;
                for (var _i = 0; _i < props.length; _i++) {
                    var prop = props[_i];
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            this.filteredCustomers = filtered;
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    Customers.prototype.sort = function (prop) {
        this.sorter.sort(this.filteredCustomers, prop);
    };
    Customers = __decorate([
        angular2_1.ComponentAnnotation({
            selector: 'customers',
            hostInjector: [dataService_1.DataService]
        }),
        angular2_1.ViewAnnotation({
            templateUrl: 'app/components/customers/customers.html',
            directives: [angular2_1.NgFor, router_1.RouterLink, filterTextbox_1.FilterTextbox, sortBy_1.SortBy]
        }), 
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object, dataService_1.DataService])
    ], Customers);
    return Customers;
})();
exports.Customers = Customers;
//# sourceMappingURL=customers.js.map