const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    //publicPath: "",
    //outputDir: "",
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production")
            config.optimization = {
                minimizer: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                drop_console: true
                            }
                        }
                    })
                ]
            }
    }
}