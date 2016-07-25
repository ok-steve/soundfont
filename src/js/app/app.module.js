'use strict';

import angular from 'angular';
import AppRoutes from './app.routes';
import IndexController from './index.controller';
import SettingsController from './settings.controller';

import 'angular-route';
import 'angular-material';

import './keyboard/keyboard.module';
import './midi/midi.module';
import './piano/piano.module';
import './synth/synth.module';

const app = angular.module( 'app', [
  'ngRoute',
  'ngMaterial',

  'app.keyboard',
  'app.midi',
  'app.piano',
  'app.synth'
]);

app.config( AppRoutes );

app.controller( 'IndexController', IndexController );
app.controller( 'SettingsController', SettingsController );
