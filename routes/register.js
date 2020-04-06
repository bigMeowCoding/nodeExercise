const User = require('../models/User');

exports.form = function (req, res) {
    res.render('rejester', {
        title: 'register'
    });
};
exports.submit = function (req, res,next) {
    const data = req.body;
    User.getByName(data.name,(error, user) => {
        if(error) {
            return next(error);
        }
        if(user) {
            res.error('user name has already used');
        } else {
            user = new User({
                name:data.name,
                pass:data.pass
            });
            user.save((err)=> {
                if(err) {
                    return next(err);
                }
                req.session.uid = user.id;
                res.redirect('/login');
            });
        }
    });
};