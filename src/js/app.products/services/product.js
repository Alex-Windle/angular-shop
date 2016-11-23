function ProductService ($http, SERVER, UserService) {

  this.allProducts = allProducts;
  this.addProduct = addProduct;

  function allProducts () {
    return $http.get(`${SERVER}/products`);
  }

  function addProduct (product) {
    let req = {
      url: `${SERVER}/products`,
      data: product,
      method: 'POST',
      headers: UserService.getHeaders()
    };

    return $http(req);
  }

};

ProductService.$inject = ['$http', 'SERVER', 'UserService'];
export { ProductService };
