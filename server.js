const http = require('http'), fs = require('fs');

function handleError(err, res) {
    console.error(err);
    res.end('net error')
}

function renderTemplateHtml(templateData, configContent, res) {
    const templateDataString = templateData.toString();
    const html = templateDataString.replace('%', () => {
        return configContent.join('</li><li>')
    });
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(html);
}

function getTemplateHtmlAndRender(err, res, configContent) {
    fs.readFile('./assets/template.html', (error, templateData) => {
        if (err) {
            handleError(err, res);
        }
        renderTemplateHtml(templateData, configContent, res);
    })
}

function renderConfigContent(res) {
    fs.readFile('./assets/content.json', ((err, data) => {
        if (err) {
            handleError(err, res);
        }
        const configContent = JSON.parse(data.toString());
        getTemplateHtmlAndRender(err, res, configContent);
    }))
}

http.createServer(
    (req, res,) => {
        if (req.url === '/') {
            renderConfigContent(res);
        }
    }
).listen(3000);

console.log('serve open');
