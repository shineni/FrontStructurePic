const path = require('path');
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {HtmlWebpackPulgin}  = require('html-webpack-plugin');
// 通过模板生成网站的首页，并将打包的文件自动嵌入

module.exports = {

    // 1. 打包的入口文件

    entry: './src/index.js',

    // 2. 打包文件的输出

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extentions:['.js', '.ts', '.tsx']
    },

    // 3. 环境

    // mode: 'production',

    module: {

        // 4. Loader 配置 （数组）

        rules: [
            {
                test:/\.jsx?$/,               
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.tsx?$/,               
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/.(jpg|jpeg|png|gif)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10240   //===>图片如果小于10M会自动base64
                        }
                    }
                ]
            },

        ],

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin()
         new HtmlWebpackPulgin({

         })
    ],
    devServer:{
        contentBase: './dist',
        hot: true
    },
    mode: 'development'

}