/* eslint-disable import/no-extraneous-dependencies */
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';

const serverOptions = {
  publicPath: '/',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  stats: 'minimal',
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
};

const compiler = webpack(webpackConfig);
WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverOptions);
const server = new WebpackDevServer(compiler, serverOptions);

server.listen(3000);
