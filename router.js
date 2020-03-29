const parse = require("url").parse;
module.exports = function (param) {
    return function (req, res, next) {
        if (!param[req.method]) {
            next();
            return;
        }

        const routes = param[req.method], url = parse(req.url), keys = Object.keys(routes);
        for (const routeUrl of keys) {
            const fn = routes[routeUrl];
            const path = routeUrl.replace(/\//g, '\\/').replace(/:(\w+)/g, '([^\\/]+)');
            const re = new RegExp('^'+ path + '$');
            const capture =  url.pathname.match(re);
            if(capture) {
                const args =[req, res].concat(capture.slice(1));
                fn.apply(null, args);
                return;
            }
        }
        next();
    };
};