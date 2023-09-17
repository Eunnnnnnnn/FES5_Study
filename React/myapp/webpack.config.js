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

//webpack 최적화가 적용된 이유
//- npm start로 프로젝트를 실행하고 Lighthouse 검사에서 성능이 향상된 것을 볼 수 있는 이유는 개발 서버(`webpack-dev-server`)를 사용하기 때문
//- 개발 서버는 코드 변경 시 자동으로 새로 고침을 수행하고, HMR(Hot Module Replacement)을 통해 변경된 모듈만 업데이트하여 개발 시간을 단축시킴. 이로 인해 개발 환경에서는 더 나은 성능을 경험할 수 있음
//- 하지만 npm run build 명령어는 실제로 프로덕션용으로 애플리케이션을 빌드하며, 번들링 및 최적화 과정을 수행함. 따라서 실제 배포 환경에서는 npm run build 명령어로 빌드를 실행해야 최적화된 결과를 얻을 수 있음