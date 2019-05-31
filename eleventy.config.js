module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('capitalize', value => value.charAt(0).toUpperCase() + value.slice(1));

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
