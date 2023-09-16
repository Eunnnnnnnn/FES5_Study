const path = require('path'); //필요한 모듈 경로를 지정하기 위해 path 모듈을 가져옴
const ImageminPlugin = require('imagemin-webpack-plugin').default; //이미지 최적화를 위한 ImageminPlugin 모듈을 가져옴

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'main.js', // 최종 번들링된 자바스크립트
        path: path.resolve(__dirname, 'dist') 
    },
    module: {
        // 파일을 올바르게 처리하기 위해 필요한 babel 로더 설정 추가
        rules: [{
            test: /\.(js|jsx)$/, // 파일 확장자가 .js 또는 .jsx인 경우에만 해당 로더를 사용하도록 설정
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    },
    plugins: [ // 이미지 최적화를 위한 플러그인 설정
        new ImageminPlugin({ // 플러그인 인스턴스
            pngquant: { 
                quality: '95-100', // 이미지 품질 설정
            },
            plugins: [{
                removeViewBox: false, // viewBox 속성 제거 여부
            }]
        })
    ]
};

//webpack
//이미지 최적화를 위해 ImageminPlugin을 사용하고 있다. 
//이 플러그인은 이미지를 압축하여 품질을 유지하면서 파일 크기를 줄여준다. 
//또한, babel-loader를 사용하여 자바스크립트 파일을 처리하는 설정도 포함되어 있다.