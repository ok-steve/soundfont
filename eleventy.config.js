const pkg = require('./package.json');

module.exports = function (eleventyConfig) {
  const pathPrefix =
    process.env.ELEVENTY_RUN_MODE === 'build' ? `/${pkg.name}/` : '/';

  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');
  eleventyConfig.addPassthroughCopy('./public');

  return {
    pathPrefix,
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
