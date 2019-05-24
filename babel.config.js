module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
