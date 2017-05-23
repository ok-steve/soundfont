System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.2",
    "aurelia-framework": "npm:aurelia-framework@1.1.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
    "fetch": "github:github/fetch@1.1.1",
    "material-design-lite": "github:google/material-design-lite@1.3.0",
    "rxjs": "npm:rxjs@5.4.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "tone": "npm:tone@0.10.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:rxjs@5.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:tone@0.10.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "aurelia.js": [
      "github:github/fetch@1.1.1.js",
      "github:github/fetch@1.1.1/fetch.js",
      "github:google/material-design-lite@1.3.0.js",
      "github:google/material-design-lite@1.3.0/material.css!github:systemjs/plugin-text@0.0.8.js",
      "github:google/material-design-lite@1.3.0/material.js",
      "github:jspm/nodelibs-buffer@0.1.1.js",
      "github:jspm/nodelibs-buffer@0.1.1/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.2.js",
      "npm:aurelia-fetch-client@1.1.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.2.js",
      "npm:aurelia-framework@1.1.2/aurelia-framework.js",
      "npm:aurelia-loader-default@1.0.2.js",
      "npm:aurelia-loader-default@1.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.2.1.js",
      "npm:aurelia-pal-browser@1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.1.js",
      "npm:aurelia-polyfills@1.2.1/aurelia-polyfills.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.3.0.js",
      "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.4.0.js",
      "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.4.0/compose.js",
      "npm:aurelia-templating-resources@1.4.0/css-resource.js",
      "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.4.0/focus.js",
      "npm:aurelia-templating-resources@1.4.0/hide.js",
      "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.4.0/if.js",
      "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.4.0/repeat.js",
      "npm:aurelia-templating-resources@1.4.0/replaceable.js",
      "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/show.js",
      "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/with.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js",
      "npm:base64-js@1.2.0.js",
      "npm:base64-js@1.2.0/index.js",
      "npm:buffer@5.0.6.js",
      "npm:buffer@5.0.6/index.js",
      "npm:ieee754@1.1.8.js",
      "npm:ieee754@1.1.8/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:rxjs@5.4.0/InnerSubscriber.js",
      "npm:rxjs@5.4.0/Observable.js",
      "npm:rxjs@5.4.0/Observer.js",
      "npm:rxjs@5.4.0/OuterSubscriber.js",
      "npm:rxjs@5.4.0/Subscriber.js",
      "npm:rxjs@5.4.0/Subscription.js",
      "npm:rxjs@5.4.0/add/observable/fromEvent.js",
      "npm:rxjs@5.4.0/add/observable/fromPromise.js",
      "npm:rxjs@5.4.0/add/observable/merge.js",
      "npm:rxjs@5.4.0/add/operator/filter.js",
      "npm:rxjs@5.4.0/add/operator/map.js",
      "npm:rxjs@5.4.0/add/operator/mergeMap.js",
      "npm:rxjs@5.4.0/observable/ArrayObservable.js",
      "npm:rxjs@5.4.0/observable/EmptyObservable.js",
      "npm:rxjs@5.4.0/observable/FromEventObservable.js",
      "npm:rxjs@5.4.0/observable/PromiseObservable.js",
      "npm:rxjs@5.4.0/observable/ScalarObservable.js",
      "npm:rxjs@5.4.0/observable/fromEvent.js",
      "npm:rxjs@5.4.0/observable/fromPromise.js",
      "npm:rxjs@5.4.0/observable/merge.js",
      "npm:rxjs@5.4.0/operator/filter.js",
      "npm:rxjs@5.4.0/operator/map.js",
      "npm:rxjs@5.4.0/operator/merge.js",
      "npm:rxjs@5.4.0/operator/mergeAll.js",
      "npm:rxjs@5.4.0/operator/mergeMap.js",
      "npm:rxjs@5.4.0/symbol/iterator.js",
      "npm:rxjs@5.4.0/symbol/observable.js",
      "npm:rxjs@5.4.0/symbol/rxSubscriber.js",
      "npm:rxjs@5.4.0/util/UnsubscriptionError.js",
      "npm:rxjs@5.4.0/util/errorObject.js",
      "npm:rxjs@5.4.0/util/isArray.js",
      "npm:rxjs@5.4.0/util/isArrayLike.js",
      "npm:rxjs@5.4.0/util/isFunction.js",
      "npm:rxjs@5.4.0/util/isObject.js",
      "npm:rxjs@5.4.0/util/isPromise.js",
      "npm:rxjs@5.4.0/util/isScheduler.js",
      "npm:rxjs@5.4.0/util/root.js",
      "npm:rxjs@5.4.0/util/subscribeToResult.js",
      "npm:rxjs@5.4.0/util/toSubscriber.js",
      "npm:rxjs@5.4.0/util/tryCatch.js",
      "npm:tone@0.10.0.js",
      "npm:tone@0.10.0/build/Tone.js"
    ],
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "lib/general-midi.js",
      "lib/soundfont-player.js",
      "lib/soundfont-sampler.js",
      "lib/utilities.js",
      "main.js",
      "resources/elements/input-range.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/elements/input-range.js",
      "resources/elements/input-select.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/elements/input-select.js",
      "resources/elements/piano-roll.css!github:systemjs/plugin-text@0.0.8.js",
      "resources/elements/piano-roll.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/elements/piano-roll.js",
      "resources/elements/soundfont.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/elements/soundfont.js",
      "resources/elements/webmidi-access.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/elements/webmidi-access.js",
      "resources/index.js",
      "resources/mdl/mdl-card-supporting-text.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-card-supporting-text.js",
      "resources/mdl/mdl-card-title.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-card-title.js",
      "resources/mdl/mdl-card.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-card.js",
      "resources/mdl/mdl-cell.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-cell.js",
      "resources/mdl/mdl-grid.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-grid.js",
      "resources/mdl/mdl-js.js",
      "resources/mdl/mdl-layout-content.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-layout-content.js",
      "resources/mdl/mdl-layout-drawer.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-layout-drawer.js",
      "resources/mdl/mdl-layout-header.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-layout-header.js",
      "resources/mdl/mdl-layout-title.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-layout-title.js",
      "resources/mdl/mdl-layout.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-layout.js",
      "resources/mdl/mdl-navigation.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-navigation.js",
      "resources/mdl/mdl-slider.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-slider.js",
      "resources/mdl/mdl-textfield.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/mdl/mdl-textfield.js",
      "resources/services/midimessage.js",
      "resources/services/shortcut.js",
      "resources/services/synth.js",
      "resources/tone/tone-amplitude-envelope.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/tone/tone-amplitude-envelope.js",
      "resources/tone/tone-filter.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/tone/tone-filter.js",
      "resources/tone/tone-frequency-envelope.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/tone/tone-frequency-envelope.js",
      "resources/tone/tone-mono-synth.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/tone/tone-mono-synth.js",
      "resources/tone/tone-omni-oscillator.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/tone/tone-omni-oscillator.js",
      "resources/tone/tone-synth.html!github:systemjs/plugin-text@0.0.8.js",
      "resources/tone/tone-synth.js",
      "shell/nav-bar.html!github:systemjs/plugin-text@0.0.8.js"
    ]
  },
  depCache: {
    "app.js": [
      "aurelia-framework",
      "./lib/utilities",
      "./resources/services/midimessage",
      "./resources/services/synth"
    ],
    "lib/soundfont-player.js": [
      "tone",
      "./general-midi"
    ],
    "lib/soundfont-sampler.js": [
      "tone",
      "./soundfont-player"
    ],
    "resources/elements/input-range.js": [
      "aurelia-framework"
    ],
    "resources/elements/input-select.js": [
      "aurelia-framework"
    ],
    "resources/elements/piano-roll.js": [
      "aurelia-framework"
    ],
    "resources/elements/soundfont.js": [
      "aurelia-framework",
      "../../lib/general-midi"
    ],
    "resources/elements/webmidi-access.js": [
      "aurelia-framework",
      "rxjs/Observable",
      "rxjs/add/observable/fromEvent",
      "rxjs/add/observable/fromPromise",
      "rxjs/add/observable/merge",
      "rxjs/add/operator/mergeMap"
    ],
    "resources/mdl/mdl-card-supporting-text.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-card-title.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-card.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-cell.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-grid.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-js.js": [
      "aurelia-framework",
      "material-design-lite"
    ],
    "resources/mdl/mdl-layout-content.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-layout-drawer.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-layout-header.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-layout-title.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-layout.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-navigation.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-slider.js": [
      "aurelia-framework"
    ],
    "resources/mdl/mdl-textfield.js": [
      "aurelia-framework"
    ],
    "resources/services/midimessage.js": [
      "aurelia-framework",
      "rxjs/Observable",
      "rxjs/add/observable/merge",
      "rxjs/add/operator/filter",
      "./shortcut"
    ],
    "resources/services/shortcut.js": [
      "rxjs/Observable",
      "rxjs/add/observable/fromEvent",
      "rxjs/add/observable/merge",
      "rxjs/add/operator/filter",
      "rxjs/add/operator/map"
    ],
    "resources/services/synth.js": [
      "../../lib/soundfont-sampler"
    ],
    "resources/tone/tone-amplitude-envelope.js": [
      "aurelia-framework"
    ],
    "resources/tone/tone-filter.js": [
      "aurelia-framework"
    ],
    "resources/tone/tone-frequency-envelope.js": [
      "aurelia-framework"
    ],
    "resources/tone/tone-mono-synth.js": [
      "aurelia-framework"
    ],
    "resources/tone/tone-omni-oscillator.js": [
      "aurelia-framework"
    ],
    "resources/tone/tone-synth.js": [
      "aurelia-framework"
    ]
  }
});