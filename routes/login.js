const User = require('../models/User');

exports.form = function (req, res) {
    res.render('login', {
        title: 'login'
    });
};
exports.submit = function (req, res, next) {
    const data = req.body;
    User.authenticate(data.name, data.pass, (error, user) => {
        if (error) {
            return next(error);
        }
        if (user) {
            req.session.uid = user.id;
            res.redirect('success');
        } else {
            res.error('not valid');
            res.redirect('back');
        }
    });
};