const configs               = require('../gulpconfigs.js');
const chalk                 = require('chalk');
const sherpa                = require('style-sherpa');

// FIXME: UIKit not printed
configs.uikit.forEach(uikit => {
    sherpa(`${configs.paths.dev.base}uikit/${uikit}.md`, {
        output: `${configs.paths.dest.uikit}${uikit}.html`,
        template: `${configs.paths.dev.base}uikit/template-${uikit}.hbs`
    }, function() {
        console.log(chalk.blue(`🖼  UIKit Styleguide updated: ${uikit}`));
    });
});
