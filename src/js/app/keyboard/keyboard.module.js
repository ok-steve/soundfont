'use strict';

import angular from 'angular';

import KeyboardInputFactory from './keyboard-input.factory';

const module = angular.module( 'app.keyboard', []);

module.factory( 'keyboardInput', KeyboardInputFactory );
