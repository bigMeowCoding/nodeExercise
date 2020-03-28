const client = require('mongodb').MongoClient,
    {ObjectId} = require('mongodb'),
    url = "mongodb://localhost:27017";

client.connect(url, {
    // 不加这个配置会报错
    useUnifiedTopology: true
}, function (err, db) {
    if (err) throw err;
    // 建立数据库
    const dbase = db.db('runoob');
    dbase.createCollection('site', function (error) { // 建表
        if (error) throw error;
        console.log('集合');
    });
    const myobj = {name: "菜鸟教程", url: "www.runoob"};
    /**
     * 增加
     */
    dbase.collection("site").insertOne(myobj, function (err,obj) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });

    /**
     * 删除，objectId要使用mongo提供的方法
     */
    dbase.collection('site').deleteOne({
        _id: ObjectId('5e5b814cbc774e6e735c24df')
    }, function (error, data) {
        if(error) throw error;
        console.log(data);
    });
    /**
     * 修改数据
     * 不能直接修改要使用$set
     */
    dbase.collection('site').updateOne({
        _id: ObjectId('5e5b85938906ca7b4f9a846a')
    }, {
        $set: {
            name: '我擦擦'
        }
    }, function (error, data) {
        if (error) throw error;
        console.log(data);
    });
    /**
     * 查询，要使用toArray方法
     */
    dbase.collection('site').find({
    }).toArray( function (error, data) {
        if(error) throw error;
        console.log(data);
    });
});
