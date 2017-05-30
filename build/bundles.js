module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-event-aggregator",
        "material-design-lite",
        "material-design-lite/material.css!text",
        "rxjs/Observable",
        "rxjs/add/observable/fromEvent",
        "rxjs/add/observable/fromPromise",
        "rxjs/add/observable/merge",
        "rxjs/add/operator/filter",
        "rxjs/add/operator/map",
        "rxjs/add/operator/mergeMap",
        "tone",
        "fetch"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
