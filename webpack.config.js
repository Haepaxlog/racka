const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: { 
        alias: { 
          "react": "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",     // Must be below test-utils
          "react/jsx-runtime": "preact/jsx-runtime"
        },
        extensions: ['.tsx', '.ts', '.js']
      },
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, 'src/index.tsx'),
        popup: path.resolve(__dirname, 'src/popup.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ['ts-loader'],
        }, ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/template.html'),
            filename: 'index.html',
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/template.html'),
            filename: 'popup.html',
            chunks: ["popup"]
        })
    ],
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};
