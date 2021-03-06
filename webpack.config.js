const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'client', 'app-client.js'),
	output: {
	    path: path.join(__dirname, 'src', 'static', 'js'),
	    filename: 'bundle.js'
	  },
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: [/node_modules/, /bower_components/],
	      use: [{
	        loader: 'babel-loader',
	        options: { presets: ['es2015', 'react'] }
	      }],
	    }
	  ]
	}
}
