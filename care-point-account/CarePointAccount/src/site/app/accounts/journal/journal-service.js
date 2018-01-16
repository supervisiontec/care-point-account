(function () {
    var service = function ($http, systemConfig) {
        
        
        this.loadAccAccounts = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/account/master/acc-account/find-only-account");
        };
        this.loadBranch = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/master/branch");
        };
        this.currentBranch = function () {
            return $http.get(systemConfig.apiUrl + "/api/care-point/master/branch/current-branch");
        };
        this.setAccFlow = function (acc) {
            return $http.get(systemConfig.apiUrl + "/api/care-point/account/master/acc-account/get-account-flow/"+acc);
        };
        this.saveJournal = function (journalList) {
            return $http.post(systemConfig.apiUrl + "/api/care-point/transaction/journal/save", journalList);
        };
        this.getPermission = function (form) {
            return $http.get(systemConfig.apiUrl + "/api/care-point/account/account-setting/user-permission/by-form/"+form);
        };
    };
    angular.module("appModule")
            .service("journalService", service);
}());