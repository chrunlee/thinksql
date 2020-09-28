# thinksql
修改 think-model 作为可以独立引用后的mysql连接查询工具类，脱离thinkjs框架使用，作为处理小程序时使用。

喜欢 thinkjs 里面model的使用方式，但是又不想再写写程序的时候跑个框架，只是连接做个查询和插入，将think-model提取出来稍作修改使用。

当然，里面的代码删删减减去掉不少，也不太清楚里面的关系逻辑，简单做了个查询可以使用。

---

不推荐使用到生产环境。

# 安装
```
npm install thinksql
```

# 使用
```
//引入
let model = require('thinksql');
//配置数据库
model({
    database: '',
    prefix: '',
    encoding: 'utf8mb4',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    dateStrings: true,
    logSql: true
})
//使用，使用方法与thinkjs 应该基本一致吧，没变动过什么东西
let object = await model.model('table').where({id : '1'}).find();
```