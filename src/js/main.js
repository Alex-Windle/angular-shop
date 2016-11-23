import angular from 'angular';

import { SERVER } from './server';

import './app.core';
import './app.products';

angular
  .module('app', ['app.core', 'app.products'])
  .constant('SERVER', SERVER);
