/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
const nextConfig = {

  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remotereact: 'remotereact@http://localhost:3030/remoteEntry.js',
        },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    // const { ModuleFederationPlugin } = options.webpack.container;
    // if (true) {

    //   config.plugins.push(
    //     new ModuleFederationPlugin({
    //       name: "host",
    //       filename: "static/chunks/remoteEntry.js",
    //       remotes: {
    //         remotereact: 'remotereact@http://localhost:3030/remoteEntry.js',
    //       },
    //       shared: {

    //         react: {
    //             singleton: true,
    //             // https://github.com/module-federation/module-federation-examples/blob/master/nextjs-react/remote-app/webpack.config.js
    //             //   version: 0,
    //             // requiredVersion: false,
    //             eager: true
    //         },
    //         "react-dom": {
    //             singleton: true,
    //             // requiredVersion: false,
    //             eager: true,
    //             //   version: 0
    //         },
    //       },
    //     }),
    //   );

    // }

    return config;
  },
};

export default nextConfig;
