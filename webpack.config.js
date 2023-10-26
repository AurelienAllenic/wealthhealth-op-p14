const path = require('path');

module.exports = {
  entry: './src/index.js', // Le chemin de votre point d'entrée
  output: {
    filename: 'bundle.js', // Le nom de votre fichier de sortie
    path: path.resolve(__dirname, 'dist') // Le dossier de destination
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
};
