const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const devMode = process.env.NODE_ENV === 'development' //模式判斷

module.exports = {
    entry: {
        index: './src/index.jsx' //程式進入點
    },
    output: {
        filename: devMode ? './js/[name].js' : './js/[name].[contenthash].js', //輸出檔案名稱
        path: path.resolve(__dirname, devMode ? 'dist' : 'build'), //輸出位址
        publicPath: ''
    },
    plugins: [

        new HtmlWebapckPlugin({
            template: './public/index.html' //模板路徑
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? './css/[name].css' : './css/[name].[hash].css',
            chunkFilename: devMode ? './css/[id].css' : './css/[name].[hash].css'
        }),
        new CleanWebpackPlugin(), //用系統管理員執行vscode才能正常運作

    ],
    module: {
        rules: [
            {   //js、jsx
                test: /\.j(s|sx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {  //sass、scss
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            //prependData:`@import "${path.resolve(__dirname,'src/scss/index.scss')}";`
                        }
                    },
                    {
                        loader: 'sass-resources-loader', //共用scss檔
                        options: {
                            resources: './src/scss/index.scss'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: devMode ? '/asset/images/' : '/build/asset/images',
                            outputPath: 'asset/images/'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                vendors: {   //抽離第三方函示庫
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',   //名稱
                    chunks: 'all'  //所有都抽取出來
                }
            }
        }
    }
}