var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
var webpack = require("webpack");
var path = require("path");

var basePath = __dirname;

module.exports = {
	context: path.join(basePath, "src"),
	resolve: {
		alias: {
			layouts: path.resolve(basePath, "./src/layouts/"),
			scenes: path.resolve(basePath, "./src/scenes/"),
			core: path.resolve(basePath, "./src/core/")
		},
		extensions: [".js", ".ts", ".tsx"]
	},
	entry: ["./index.tsx"],
	devtool: "source-map",
	devServer: {
		contentBase: "./dist", // Content base
		inline: true, // Enable watch and live reload
		host: "localhost",
		port: 8080,
		stats: "errors-only"
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: "awesome-typescript-loader",
				options: {
					useBabel: true,
					useCache: true,
					babelCore: "@babel/core" // needed for Babel v7
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
				options: {
					name: "assets/img/[name].[ext]?[hash]"
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: "all",
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					enforce: true
				}
			}
		}
	},
	plugins: [
		//Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: "index.html", //Name of file in ./dist/
			template: "index.html" //Name of template in ./src
		}),
		new CheckerPlugin()
	]
};
