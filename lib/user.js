const User = require('../models/User')
module.exports = function (req, res, next) {
    const uid = req.session.uid;
    if (!uid) {
        return next();
    }
    User.get(uid, (error, user) => {
        if (error) {
            return next(error);
        }
        req.user = res.locals.user = user;
        next();
    });
};