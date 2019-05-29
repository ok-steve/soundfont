module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/service-worker.js');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'templates'
    }
  };
};
