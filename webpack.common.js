const path=require('path')

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'./js/[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:''
    },
    module:{
        rules:[
            {
                test:/\.j(s|sx)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            }
        ]
    }
}