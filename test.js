const model = require('./index')({
    database: 'pan',
    prefix: '',
    encoding: 'utf8mb4',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    dateStrings: true,
    logSql: true
});
(async function(){
    let data = await model.model('pan').where({haspwd : ['!=','1']}).find();
    console.log(data);
    process.exit(0)
})();
