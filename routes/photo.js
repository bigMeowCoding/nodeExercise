const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');
const path = require('path');
const fs = require('fs');
const join = path.join;


exports.form = function (req, res) {
    res.render('upload', {
        title: "photo upload"
    });
};
exports.list = function (req, res, next) {
    Photo.find({}, function (err,images) {
        if(err) {
            return next(err);
        }
        res.render('photo', {
            title: 'photos',
            images
        });
    });
};

exports.submit = function (photosDir) {
    return function (req, res, next) {
        const image = req.file;
        const name = req.body.name;
        const path = join(photosDir, image.originalname);
        fs.rename(image.path, path, function (err) {
            if (err) {
                console.error(err);
                return next(err);
            }
            Photo.create({
                name: name,
                path: image.originalname
            }, function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/photo');
            });
        });
    };
};
// module.exports = router;