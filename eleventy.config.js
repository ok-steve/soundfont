module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/manifest.json');
  eleventyConfig.addPassthroughCopy('src/service-worker.js');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'templates',
    },
  };
};
