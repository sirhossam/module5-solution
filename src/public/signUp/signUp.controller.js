(function() {
  "use strict";
  angular.module("public").controller("SignUpController", SignUpController);
  SignUpController.$inject = ["$rootScope", "creatUser", "MenuService"];
  function SignUpController($rootScope, creatUser, MenuService) {
    let signUpCtrl = this;
    signUpCtrl.name = "";
    signUpCtrl.lastName = "";
    signUpCtrl.emailAddress = "";
    signUpCtrl.phoneNumber = "";
    signUpCtrl.shortName = "";
    signUpCtrl.formSbmitted = false;

    signUpCtrl.submit = () => {
      signUpCtrl.formSbmitted = true;

      let user = {
        name: signUpCtrl.name,
        lastName: signUpCtrl.lastName,
        email: signUpCtrl.emailAddress,
        phoneNumber: signUpCtrl.phoneNumber,
        shortName: signUpCtrl.shortName
      };

      MenuService.getFavItem(signUpCtrl.shortName).then(
        resolve => {
          console.log(resolve);
          signUpCtrl.faveItemFound = true;
          user.FavItemData = resolve;
        },
        reject => {
          console.log("didnt found");
          signUpCtrl.faveItemFound = false;
        }
      );
      creatUser.creat(user);
    };
  }
})();
