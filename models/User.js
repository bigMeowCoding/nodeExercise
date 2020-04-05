const redis = require('redis');
const bcrypt = require('bcrypt');
const db = redis.createClient();

class User {
    constructor(obj) {
        for (const key of Object.keys(obj)) {
            this[key] = obj[key];
        }
    }

    save(fn) {
        if (this.id) {
            this.update(fn);
        } else {
            db.incr('user:ids', (err, id) => {
                if (err) {
                    return fn(err);
                }
                this.id = id;
                this.hashPassword((error) => {
                    if (error) {
                        return fn(error);
                    }
                    this.update(fn);
                });
            });
        }
    }

    update(fn) {
        const id = this.id;
        db.set('user:id:' + this.name, id, (err) => {
            if (err) {
                return fn(err);
            }
            db.hmset('user:' + id, this, (error) => {
                if (error) {
                    return fn(error);
                }
                fn()
            });
        });
    }

    hashPassword(fn) {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                return fn(err);
            }
            this.salt = salt;
            bcrypt.hash(this.pass, salt, (error, hash) => {
                if (error) {
                    return fn(error);
                }
                this.pass = hash;
                fn();
            });
        });
    }

}


module.exports = User;