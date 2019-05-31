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
    var output = format('<div class="ss-code"><pre><code class="{0}">{1}</code><button class="cpbtn">Copy</button></pre></div>', [language, renderedCode]);

    return output + extraOutput;
};

const styleguide = function (input, options, cb) {
    options = Object.assign({
        template: path.join(__dirname, 'template.html')
    }, options);

    // Read input file
    const inputFile = fs.readFileSync(path.join(process.cwd(), input));
    // The divider for pages is four newlines
    let pages = inputFile.toString().replace(/(?:\r\n)/mg, '\n').split('\n\n\n\n');

    // Process each page
    pages = pages.map(function (page, i) {
    // Convert Markdown to HTML
        let body = marked(page, { renderer: renderer });

        // Find the title of the page by identifying the <h1>
        // The second match is the inner group
        const foundHeadings = body.match('<h1.*>(.*)</h1>');
        const title = foundHeadings && foundHeadings[1] ? foundHeadings[1] : 'Page ' + (i + 1);
        const anchor = title.toLowerCase().replace(/[^\w]+/g, '-');

        let subheadings = null;
        if (options.includeSubheadings) {
            const subheadRe = /(<h2.*?>(.*?)<\/h2>)/g;

            const foundSubheadings = [];
            let match;
            let i = 0;
            while ((match = subheadRe.exec(body)) !== null) {
                i += 1;
                const subTitle = match[2];
                const subAnchor = `${anchor}-sub-${i}`;
                foundSubheadings.push({title: subTitle, anchor: subAnchor, content: match[1]});
            }
            if (foundSubheadings.length) {
                subheadings = foundSubheadings.map(function (subheading) {
                    body = body.replace(subheading.content, `<section id="${subheading.anchor}"></section>${subheading.content}`);
                    return {title: subheading.title, anchor: subheading.anchor};
                });
            }
        }

        const results = { title: title, anchor: anchor, body: body };
        if (subheadings) { results.subheadings = subheadings; };

        return results;
    });

    // Write file to disk
    const templateFile = fs.readFileSync(path.join(process.cwd(), options.template));
    const template = handlebars.compile(templateFile.toString(), { noEscape: true });
    const outputPath = path.join(process.cwd(), options.output);

    fs.writeFile(outputPath, template({ pages: pages }), cb);
};

configs.styleguide.src.forEach(kitPath => {
    const uikit = path.basename(kitPath);
    const uikitPath = path.dirname(kitPath);

    styleguide(`${uikitPath}/${uikit}.md`, {
        output: `${configs.styleguide.dest}/${uikit}.html`,
        template: configs.styleguide.template
    }, () => {});
});
