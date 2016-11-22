const SERVER = 'https://hidden-wildwood-99939.herokuapp.com';

function UserService ($http) {

  this.create = function (user) {
    return $http.post(`${SERVER}/users`, user);
  };

};

UserService.$inject = ['$http'];
export { UserService };
