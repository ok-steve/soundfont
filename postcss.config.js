const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['src/**/*.njk'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
