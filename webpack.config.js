const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './app/Main.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({template: './app/index.html'})],
    devServer: {
       port: 3000,
       //contentBase: path.resolve(__dirname, "app"), //this gave error..[webpack-cli] Invalid options object. Dev Server has been initialized using an options object 
        // so included below property i.e static:{}  // contentBase is outdated its replaced by static : { directory: path.resolve(__dirname, "app")}
        static: {
            directory: path.resolve(__dirname, 'app')
        },
        // injecting the newest copy of our Javascript without refreshing the whole page
        hot: true       // this enables hot module replacement
    },
    mode: "development",
    // inorder to use a loader we need the below property
    module: {
        rules: [
            { // adding css support, css rules where we use our loaders
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // only apply the babel loader to Javascript files
            {
                test: /\.js$/,
                exclude: /(nodule_modules)/,
                //which loader we want to use
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}

if(currentTask == "build") {
    config.mode = "production"
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({filename: 'main.css'}))
}

module.exports = config