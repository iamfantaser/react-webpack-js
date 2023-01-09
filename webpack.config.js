const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    console.log(env, argv, process.env.APP_PORT);
    return {
        entry: path.join(__dirname, "src", "index.tsx"),
        output: { publicPath: '/', path: path.join(__dirname, argv.mode == "production" ? "build" : "dist"), filename: "index.bundle.js" },
        mode: process.env.NODE_ENV || "development",
        resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
        devServer: { static: path.join(__dirname, "src"), historyApiFallback: true },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        },
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: ["ts-loader"],
                },
                {
                    test: /\.s?css$/i,
                    use: [
                        argv.mode === 'production' ?
                        MiniCssExtractPlugin.loader :
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.less$/i,
                    use: [
                        argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext][query]'
                    }
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: argv.mode == 'development' ? '[name].css' : '[name].[contenthash].css',
                chunkFilename: argv.mode == 'development' ? '[id].css' : '[id].[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "src", "index.html"),
            }),
        ],
    }
};