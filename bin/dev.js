const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const compiler = webpack(webpackServerConfig);
const path = require('path');
const webpackDevMiddlware = require('webpack-dev-middleware');
const webpackHotMiddlware = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);
hmrServer.use(webpackDevMiddlware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
        ignore: '/dist/',
    },
    writeToDisk: true,
    stats: 'errors-only',
}))

hmrServer.use(webpackHotMiddlware(clientCompiler, {
    path: '/static/__webpack_hmr'
}))
hmrServer.listen(3001, () => {
    console.log('HMR SERVER succesfully started');
})

compiler.run((err) => {
    if (err) {
        console.log("HMR server succesfully started")
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log("Compilation failed: ", err);
        }
        console.log("Compilation was successfull");
    });
    
    nodemon({
        script: path.resolve(__dirname, "../dist/server/server.js"),
        watch: [
            path.resolve(__dirname, "../dist/server"),
            path.resolve(__dirname, "../dist/client"),
        ],
    });
    
})

