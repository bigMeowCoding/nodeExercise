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

    static getByName(name, fn) {
        this.getId(name,  (err, id) =>{
            if (err) {
                return fn(err);
            }
            if (id) {
                this.get(id, fn);
            } else {
                fn(null, null);
            }
        });
    }

    static getId(name, fn) {
        db.get('user:id:' + name, fn);
    }

    static get(id, fn) {
        db.hgetall('user:' + id, function (err, user) {
            if (err) {
                return fn(err);
            }
            fn(null, new User(user));
        });
    }

    static authenticate(name, pass, fn) {
        User.getByName(name, (error, user) => {
            if (error) {
                return fn(error);
            }
            if (!user.id) {
                return fn();
            }
            bcrypt.hash(pass, user.salt, function (err, hash) {
                if (err) {
                    return fn(err);
                }
                if (hash === user.pass) {
                    return fn(null, user);
                }
                fn();
            });
        });
    }


}


module.exports = User;