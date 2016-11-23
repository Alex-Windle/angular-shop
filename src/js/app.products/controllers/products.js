function ProductsController (ProductService, $state) {
  console.log("Hello from app.products!");

  let vm = this;

  vm.products = [];
  vm.add = add;

  function add (product) {
    ProductService.addProduct(product).then((resp) => {
      $state.go('root.home');
    });
  }

  function init () {
    ProductService.allProducts().then((resp) => {
      vm.products = resp.data;
    });
  }

  init();
};

ProductsController.$inject = ['ProductService', '$state'];
export { ProductsController };
