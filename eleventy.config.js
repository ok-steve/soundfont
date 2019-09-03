module.exports = (eleventyConfig) => {
  eleventyConfig.setWatchJavaScriptDependencies(false);
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/service-worker.js');

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
