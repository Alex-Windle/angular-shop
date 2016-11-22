const SERVER = 'https://hidden-wildwood-99939.herokuapp.com';

function UserService ($http, $cookies) {

  this.login = login;
  this.create = create;

  function create (user) {
    return $http.post(`${SERVER}/users`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  }

};

UserService.$inject = ['$http', '$cookies'];
export { UserService };
