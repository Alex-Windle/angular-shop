import angular from 'angular';

import { ProductsController } from "./controllers/products";

import { ProductService } from "./services/product";

angular
  .module('app.products', [])
  .controller('ProductsController', ProductsController)
  .service('ProductService', ProductService);

