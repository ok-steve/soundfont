'use strict';

import angular from 'angular';

import PolySynthFactory from './poly-synth.factory';

const module = angular.module( 'app.synth', []);

module.factory( 'polySynth', PolySynthFactory );
