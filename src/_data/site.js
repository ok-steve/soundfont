const pkg = require('../../package.json');

module.exports = () => {
  return {
    env:
      process.env.ELEVENTY_RUN_MODE === 'build' ? 'production' : 'development',
    name: pkg.name
      .split('-')
      .map(
        (str) => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
      )
      .join(' '),
  };
};
