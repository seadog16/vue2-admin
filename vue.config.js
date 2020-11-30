const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
    publicPath: "./",
    productionSourceMap: process.env.NODE_ENV !== "production",
    pluginOptions: {
        // 公共变量
        "style-resources-loader": {
            preProcessor: "stylus",
            patterns: [path.resolve(__dirname, "src/style/var.styl")]
        }
    },
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "后台管理系统";
            return args;
        });
    },
    configureWebpack: {
        plugins: [
            // 打包gzip
            new CompressionWebpackPlugin({
                test: /\.(js|css|svg|woff|ttf|json|html)$/,
                threshold: 8192
            })
        ]
    },
    devServer: {
        // 反向代理
        proxy: {
            "/api": {
                target: "http://192.168.xxx:xxx",
                ws: true,
                changeOrigin: true
            }
        }
    }
};
