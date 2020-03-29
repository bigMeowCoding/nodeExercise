const userRoutes = {
    GET: {
        '/users': function (req, res) {
            res.end('jay,jack,tom');
        },
        '/users/:id': function (req, res, id) {
            res.end('users' + id);
        }

    },
    DELETE: {
        '/user/:id': function (req, res, id) {
            res.end('del' + id);
        }
    }
};
module.exports = userRoutes;