export function configure( config ) {
  config.globalResources([
    './elements/input-range',
    './elements/input-select',
    './elements/piano-roll',
    './elements/webmidi-access',

    './mdl/mdl-card',
    './mdl/mdl-card-supporting-text',
    './mdl/mdl-card-title',
    './mdl/mdl-cell',
    './mdl/mdl-grid',
    './mdl/mdl-layout',
    './mdl/mdl-layout-content',
    './mdl/mdl-layout-drawer',
    './mdl/mdl-layout-header',
    './mdl/mdl-layout-title',
    './mdl/mdl-navigation',
    './mdl/mdl-slider',
    './mdl/mdl-textfield',

    './tone/tone-amplitude-envelope',
    './tone/tone-filter',
    './tone/tone-frequency-envelope',
    './tone/tone-mono-synth',
    './tone/tone-omni-oscillator'
  ]);
}
