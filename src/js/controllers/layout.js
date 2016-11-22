function LayoutController ($rootScope, UserService) {
  let vm = this;

  vm.loggedIn = false;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
  });

};

LayoutController.$inject = ['$rootScope', 'UserService'];
export { LayoutController };
