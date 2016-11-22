function LoginController (UserService, $cookies, $state) {
  let vm = this;

  vm.activate = activate;

  function activate (user) {
    UserService.login(user).then(
      resp => {
        let data = resp.data;
        $cookies.put('username', data.username);
        $cookies.put('access_token', data.access_token);
        $state.go('root.home');
      },
      errors => {
        console.log(errors.data.error);
      }
    );
  };

};

LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };
