const dev = './dev/';
const app = './app/';
const build = './build/';
const pkg = './node_modules/';

const dest = (process.env.NODE_ENV == 'prod') ? build : app;

module.exports = {
    paths: {
        dev: {
            base: dev,
            js: dev + 'js/',
            scss: dev + 'scss/*.scss',
            images: dev + 'images/',
            svg: dev + 'svg/',
            fonts: {
                filesource: dev + 'fonts/',
                tempdest: './fontdest/',
                scssdest: dev + 'scss/configs/',
                scssname: '_fonts.scss',
                urlReplace: {
                    from: 'url("',
                    to: 'url("fonts/',
                }
            }
        },
        dest: {
            base: dest,
            scripts: dest + 'scripts/',
            styles: dest + 'styles/',
            media: dest + 'media/',
            uikit: dest + 'uikit/',
            fonts: dest + 'styles/fonts/'
        },
        vendors: [
            // pkg + 'jquery/dist/jquery.min.js',
            // pkg + 'foundation-sites/dist/js/foundation.min.js',
            // pkg + 'what-input/dist/what-input.min.js'
        ]
    },
    uikit: [
        "uikit",
        "widgets"
    ],
    sassdoc: {
        src: './node_modules/foundation-sites/scss/**/*.scss',
        dest: './docs/styles/'
    },
    todowatch: [
        dev + '*.{html|njk}',
        dev + 'js/**/*.js',
        dev + 'scss/**/*.scss'
    ],
    webpack: {
        entries: [
            dev + 'js/main.js'
        ]
    },
    alfred: {
        filesize: [
            dest + 'scripts/main.min.js'
        ]
    }
}
