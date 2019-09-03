const htmlmin = require('html-minifier');

module.exports = (eleventyConfig) => {
  eleventyConfig.setWatchJavaScriptDependencies(false);
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/service-worker.js');

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (process.env.ELEVENTY_ENV === 'production' && outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJs: true,
      });

      return minified;
    }

    return content;
  });

  return {
    pathPrefix:
      process.env.ELEVENTY_ENV === 'production' ? `/${process.env.npm_package_name}/` : '/',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
