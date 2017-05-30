// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'browserconfig.xml',
    'config.js',
    'favicon.ico',
    'manifest.json',
    'service-worker.js',
    'img/favicon-150.png',
    'img/favicon-16.png',
    'img/favicon-180.png',
    'img/favicon-192.png',
    'img/favicon-32.png',
    'img/favicon.svg',
    'LICENSE',
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'styles/styles.css'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
  ]
};
