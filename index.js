// const app = require('./app')
const User = require('./models/User');
// app.listen(3000);

const user = new User({
    name:'zyj',
    pass:'123'
});
user.save(function (err) {
    if(err) {
        throw  err;
    }
    console.log('user' + user.id);
});