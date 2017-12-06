(function () {
    var service = function ($http, systemConfig) {
        
        this.loadAccAccounts = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/account/master/acc-account/find-type-accounts");
        };
        this.currentBranch = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/master/branch/current-branch");
        };
        this.loadBranch = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/master/branch");
        };
        this.loadSupplier = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/master/supplier");
        };
        this.loadAccBalance = function (index) {
            return $http.get(systemConfig.apiUrl + "/api/care-point/account/master/acc-account/find-account-value/"+index);
        };
        this.loadAccTypes = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/master/account-type");
        };
        this.saveFundTransfer = function (data) {
            return $http.post(systemConfig.apiUrl + "/api/care-point/transaction/fund-transfer/save", data);
        };
        this.setAccFlow = function (acc) {
            return $http.get(systemConfig.apiUrl + "/api/care-point/account/master/acc-account/get-account-flow/"+acc);
        };
        
    };
    angular.module("appModule")
            .service("accruedBillService", service);
}());

