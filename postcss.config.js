const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['src/**/*.njk', 'src/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize')(),
    require('tailwindcss'),
    require('postcss-preset-env'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
