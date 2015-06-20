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
var forms_1 = require('angular2/forms');
var async_1 = require('angular2/src/facade/async');
var FilterTextbox = (function () {
    function FilterTextbox() {
        this.model = {
            filter: null
        };
        this.changed = new async_1.EventEmitter();
    }
    FilterTextbox.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.next(this.model.filter); //Raise changed event
    };
    FilterTextbox.prototype.onChange = function (changes) {
        //alert(changes);
    };
    FilterTextbox = __decorate([
        angular2_1.ComponentAnnotation({
            selector: 'filter-textbox',
            events: ['changed'],
            properties: { labelText: 'labelText' },
            lifecycle: [angular2_1.onChange]
        }),
        angular2_1.ViewAnnotation({
            template: "\n    <form>\n         Filter:\n         <input type=\"text\" ng-control=\"filter\"\n                [(ng-model)]=\"model.filter\" (keyup)=\"filterChanged($event)\"  />\n    </form>\n  ",
            directives: [forms_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterTextbox);
    return FilterTextbox;
})();
exports.FilterTextbox = FilterTextbox;
//# sourceMappingURL=filterTextbox.js.map