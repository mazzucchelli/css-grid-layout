const dev = './dev/';
const app = './app/';
const build = './build/';

const dest = (process.env.NODE_ENV === 'prod') ? build : app;

module.exports = {
    paths: {
        dev: {
            base: dev,
            temp: dev + 'temp/*.css',
            js: dev + 'js/',
            scss: dev + 'scss/*.scss',
            images: dev + 'images/',
            svg: dev + 'svg/'
        },
        dest: {
            base: dest,
            temp: dev + 'temp/',
            scripts: dest + 'js/',
            styles: dest + 'css/',
            media: dest + 'assets/'
        },
        vendors: []
    },
    styleguide: {
        template: './dev/templates/base/styleguide.hbs',
        src: [
            dev + 'uikit/card',
            dev + 'uikit/cta',
            dev + 'uikit/flexbox',
            dev + 'uikit/form',
            dev + 'uikit/grid',
            dev + 'uikit/modal',
            dev + 'uikit/typo'
        ],
        dest: dest + 'uikit'
    },
    sassdoc: {
        src: dev + 'scss/**/*.scss',
        dest: './docs/styles/'
    },
    webpack: {
        entries: [
            dev + 'js/main.js'
        ]
    }
};
