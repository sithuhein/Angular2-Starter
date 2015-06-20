var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getCustomers = function () {
        return this.http.get('customers.json');
    };
    return DataService;
})();
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map