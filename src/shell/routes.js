export function routes( config ) {
  config.title = 'Synthia';
  config.options.pushState = true;

  config.map([
    { route: ['', 'settings'], name: 'settings', moduleId: './settings/settings', nav: true, title: 'Settings' },
    { route: 'piano',          name: 'piano',    moduleId: './piano/piano',       nav: true, title: 'Piano'    }
  ]);
}
