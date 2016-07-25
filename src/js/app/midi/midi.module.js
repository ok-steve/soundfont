'use strict';

import angular from 'angular';

import MidiAccessFactory from './midi-access.factory';
import MidiUtilitiesFactory from './midi-utilities.factory';
import MidiSelectDirective from './midi-select.directive';

const module = angular.module( 'app.midi', []);

module.directive( 'midiSelect', MidiSelectDirective );

module.factory( 'midiAccess', MidiAccessFactory );
module.factory( 'midiUtilities', MidiUtilitiesFactory );
