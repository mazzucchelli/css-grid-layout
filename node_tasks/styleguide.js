const fs = require('fs');
const handlebars = require('handlebars');
const marked = require('marked');
const path = require('path');
const format = require('string-template');
const hljs = require('highlight.js');
const configs = require('../gulpconfigs.js');

const renderer = new marked.Renderer();

// Prevents Marked from adding an ID to headings
renderer.heading = function (text, level) {
    return format('<h{1}>{0}</h{1}>', [text, level]);
};

// Allows for the creation of HTML examples and live code in one snippet
renderer.code = function (code, language) {
    var extraOutput = '';

    if (typeof language === 'undefined') language = 'html';

    // If the language is *_example, live code will print out along with the sample
    if (language.match(/_example$/)) {
        extraOutput = format('\n\n<div class="ss-code-live">{0}</div>', [code]);
        language = language.replace(/_example$/, '');
    }

    var renderedCode = hljs.highlight(language, code).value;
    var output = format('<div class="ss-code"><pre><code class="{0}">{1}</code><button class="cpbtn btn">Copy</button></pre></div>', [language, renderedCode]);

    return output + extraOutput;
};

const styleguide = function (input, options, cb) {
    // Read input file
    const inputFile = fs.readFileSync(path.join(process.cwd(), input));
    // The divider for sections is four newlines
    let sections = inputFile.toString().replace(/(?:\r\n)/mg, '\n').split('\n\n\n\n');

    //
    const pageHTML = marked(inputFile.toString());
    const foundTitle = pageHTML.match('<h1.*>(.*)</h1>');
    const pageTitle = foundTitle && foundTitle[1] ? foundTitle[1] : 'Page';
    console.log('pagetitle', pageTitle);
    //

    // Process each page
    sections = sections.map(function (section, i) {
    // Convert Markdown to HTML
        let body = marked(section, { renderer: renderer });

        // Find the title of the section by identifying the <h2>
        // The second match is the inner group
        const foundHeadings = body.match('<h2.*>(.*)</h2>');
        const title = foundHeadings && foundHeadings[1] ? foundHeadings[1] : 'Section ' + (i + 1);
        const anchor = title.toLowerCase().replace(/[^\w]+/g, '-');
        const results = { title: title, anchor: anchor, body: body };

        return results;
    });

    // Write file to disk
    const templateFile = fs.readFileSync(path.join(process.cwd(), options.template));
    const template = handlebars.compile(templateFile.toString(), { noEscape: true });
    const outputPath = path.join(process.cwd(), options.output);

    fs.writeFile(outputPath, template({ pages: sections }), cb);
};

configs.styleguide.src.forEach(kitPath => {
    const uikit = path.basename(kitPath);
    const uikitPath = path.dirname(kitPath);

    styleguide(`${uikitPath}/${uikit}.md`, {
        output: `${configs.styleguide.dest}/${uikit}.html`,
        template: configs.styleguide.template
    }, () => {});
});
