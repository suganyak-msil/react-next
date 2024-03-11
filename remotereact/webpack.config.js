const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  // mode: 'development',
  output: {
    publicPath: "http://localhost:3030/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3030,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use:{

          loader: 'file-loader',
        }
    }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remotereact',
      library: { type: 'var', name: 'remotereact' },
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
        "./Card": './src/components/Card',
        "./Landingpage": './src/components/pages/pre-login/LandingPage'
      },
      shared: {
        react: {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
        'react-dom': {
          requiredVersion: false,
          singleton: true,
          version: '0',
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});



// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const Dotenv = require('dotenv-webpack');
// const deps = require("./package.json").dependencies;

// module.exports = (_, argv) => ({
//   output: {
//     publicPath: "http://localhost:3030/",
//   },

//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
//   },

//   devServer: {
//     port: 3030,
//     historyApiFallback: true,
//   },

//   module: {
//     rules: [
//       {
//         test: /\.m?js/,
//         type: "javascript/auto",
//         resolve: {
//           fullySpecified: false,
//         },
//       },
//       {
//         test: /\.(css|s[ac]ss)$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },

//   plugins: [
//     new ModuleFederationPlugin({
//       name: "reactapp1",
//       //Todo need to know about=> library:{type:"var",name:"reactapp1"},
//       filename: "remoteEntry.js",
//       remoteType: "var",
//       remotes: {
//       },
//       exposes: {
//         "./Button": "./src/components/Button.tsx"
//       },
//       shared: {
//         // ...deps,
//         react: {
//           singleton: true, strictVersion: true,

//           // https://github.com/module-federation/module-federation-examples/blob/master/nextjs-react/remote-app/webpack.config.js
//           // version: 0,
//           // requiredVersion: deps.react,
//           // eager:true,
//           // requiredVersion: false
//         },
//         "react-dom": {
//           singleton: true, strictVersion: true,
//           // eager:true,
//           // requiredVersion: deps["react-dom"],
//           // version: 0
//           // requiredVersion: false
//         },
//       },
//     }),
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//     }),
//     new Dotenv()
//   ],
// });
