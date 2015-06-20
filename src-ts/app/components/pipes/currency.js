var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CurrencyPipe = (function (_super) {
    __extends(CurrencyPipe, _super);
    function CurrencyPipe() {
        _super.apply(this, arguments);
    }
    CurrencyPipe.prototype.supports = function (obj) {
        return true;
    };
    CurrencyPipe.prototype.transform = function (value) {
        if (value && !isNaN(value)) {
            var val = value + '';
            return '$' + parseFloat(val).toFixed(2);
        }
        return '$0.00';
    };
    CurrencyPipe.prototype.create = function () {
        return this;
    };
    return CurrencyPipe;
})(Pipe);
exports.CurrencyPipe = CurrencyPipe;
//# sourceMappingURL=currency.js.map