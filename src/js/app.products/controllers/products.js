function ProductsController (ProductService) {
  console.log("Hello from app.products!");

  let vm = this;

  vm.products = [];

  function init () {
    ProductService.allProducts().then((resp) => {
      vm.products = resp.data;
    });
  }

  init();
};

ProductsController.$inject = ['ProductService'];
export { ProductsController };
