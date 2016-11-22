const SERVER = 'https://hidden-wildwood-99939.herokuapp.com';

function UserService ($http, $cookies) {

  this.login = login;
  this.create = create;
  this.isLoggedIn = isLoggedIn;
  this.setUser = setUser;

  function create (user) {
    return $http.post(`${SERVER}/users`, user);
  };

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  }

  function isLoggedIn () {
    return $cookies.get('username') ? true : false;
  }

  function setUser (data) {
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
  }

};

UserService.$inject = ['$http', '$cookies'];
export { UserService };
