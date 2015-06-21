var change_detection_1 = require('angular2/change_detection');
var currency_1 = require('app/components/pipes/currency');
exports.pipes = Object.assign({}, change_detection_1.defaultPipes, {
    'currency': [new currency_1.CurrencyPipe()]
});
//# sourceMappingURL=pipes.js.map