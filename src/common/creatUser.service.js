(function() {
  angular.module('common').service("creatUser", creatUser);
  function creatUser() {
    let service = this;
    service.creat = function(user) {
      service.user=user;
    };
    service.getUser=function () {
        return service.user
    }
  }
})();