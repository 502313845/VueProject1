const path=require('path')
const htmlwebpack = require('html-webpack-plugin')
module.exports={

    entry:path.join(__dirname,'./src/main.js'),
    output:{

        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[


        new htmlwebpack({


            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],

    module:{
        rules:[
            {test:/\.css$/, use:['style-loader','css-loader'] },
            {test:/\.jpg|png|gif|jpeg|bmp$/, use:['url-loader'] },
            {test:/\.js$/, use:['babel-loader'],exclude:/node_modules/ },
            {test:/\.vue$/, use:'vue-loader' },
            {test:/\.ttf|eot|svg|woff|woff2$/, use:'url-loader' },
        ],

    }



    
}