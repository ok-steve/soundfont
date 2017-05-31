export function configure(config) {
  config.globalResources([
    './elements/input-range',
    './elements/input-select',
    './elements/piano-roll',
    './elements/soundfont',
    './elements/webmidi-access',

    './mdl/mdl-cell',
    './mdl/mdl-grid',
    './mdl/mdl-layout',
    './mdl/mdl-layout-content',
    './mdl/mdl-layout-drawer',
    './mdl/mdl-layout-header',
    './mdl/mdl-layout-title',
    './mdl/mdl-navigation',
    './mdl/mdl-slider',
    './mdl/mdl-spinner',
    './mdl/mdl-textfield'
  ]);
}
