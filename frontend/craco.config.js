const CracoAlias = require('craco-alias');

module.exports = async function ({ env }) {
  return {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          baseUrl: '.',
          tsConfigPath: './tsconfig.extend.json',
        },
      },
    ],
  };
};
