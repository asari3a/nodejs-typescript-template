import { resolve } from 'node:path';

import type { Configuration } from 'webpack';
import WebpackLicensePlugin from 'webpack-license-plugin';

export default {
  mode: 'production',
  target: 'node',
  context: import.meta.dirname,
  entry: './src/handler.ts',
  devtool: 'source-map',
  experiments: { outputModule: true },
  output: {
    path: resolve(import.meta.dirname, 'dist'),
    filename: 'index.mjs',
    library: { type: 'module' },
  },
  resolve: {
    extensions: ['.ts', '...'],
    extensionAlias: { '.js': ['.ts', '.js'] },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
      },
    ],
  },
  plugins: [new WebpackLicensePlugin({ outputFilename: 'oss-licenses.json' })],
} satisfies Configuration;
