'use strict';

import angular from 'angular';

import PianoRollDirective from './piano-roll.directive';

const module = angular.module( 'app.piano', []);

module.directive( 'pianoRoll', PianoRollDirective );
