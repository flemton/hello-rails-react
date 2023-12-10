const { environment } = require('@rails/webpacker');

const babelLoader = environment.loaders.get('babel');

environment.loaders.prepend('babel', babelLoader);

module.exports = environment;
