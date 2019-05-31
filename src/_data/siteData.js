const tailwindConfig = require('../../tailwind.config');

module.exports = {
  name: process.env.npm_package_name,
  description: process.env.npm_package_description,
  color: tailwindConfig.theme.extend.colors.green['600'],
  env: process.env.ELEVENTY_ENV,
};
