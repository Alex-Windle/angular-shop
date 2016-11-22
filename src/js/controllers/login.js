function LoginController () {
  let vm = this;

  vm.activate = activate;

  function activate (user) {
    console.log(user);
  };

};

LoginController.$inject = [];
export { LoginController };
