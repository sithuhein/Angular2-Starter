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
var async_1 = require('angular2/src/facade/async');
var SortBy = (function () {
    function SortBy(el) {
        var _this = this;
        this.sortProperty = el.getAttribute('sort-by');
        el.domElement.addEventListener('click', function (event) { return _this.elementClicked(event); });
        this.sorted = new async_1.EventEmitter();
    }
    SortBy.prototype.elementClicked = function (event) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    };
    SortBy = __decorate([
        angular2_1.DirectiveAnnotation({
            selector: '[sort-by]',
            events: ['sorted']
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], SortBy);
    return SortBy;
})();
exports.SortBy = SortBy;
//# sourceMappingURL=sortBy.js.map