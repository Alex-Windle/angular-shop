function ProductService ($http, SERVER) {

  this.allProducts = allProducts;
  this.addProduct = addProduct;

  function allProducts () {
    return $http.get(`${SERVER}/products`);
  }

  function addProduct () {
    console.log("TODO: write this code");
  }

};

ProductService.$inject = ['$http', 'SERVER'];
export { ProductService };
