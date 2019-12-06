//second controller
(function() {
  "use strict";
  angular.module("public").controller("MyInfoController", MyInfoController);
  MyInfoController.$inject = ["$rootScope", "creatUser"];
  function MyInfoController($rootScope, creatUser) {
    let myInfo = this;
    myInfo.data = creatUser.getUser();
  }
})();