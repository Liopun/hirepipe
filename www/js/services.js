angular.module('myApp.services', [])

.factory("Data", ['$http',
    function ($http) { // This service connects to our REST API


        var obj = {};
        
        obj.get = function (q) {
            return $http.get(q).success(function (data) {
                return data;
            });
        };
        obj.post = function (q, object) {
            return $http({
                    url: q,
                    data: object.user,
                    method: "POST",
                    headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data) {
                    return data;
            }).error(function(err) {
                    return err;
            });
        };
        
        return obj;
}]);