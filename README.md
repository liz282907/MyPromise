## MyPromise

repository按照[Promise A+的标准](https://promisesaplus.com/)写成，并且通过了[配套的测试脚本](https://github.com/promises-aplus/promises-tests)，共872个测试用例。

### 文件目录
- MyPromise: src文件夹
    - Promise.js  主文档
    - util.js    辅助的工具函数模块

- out: 测试脚本输出
    -  如何运行test： 
    ```
    npm run start --reporter markdown > out/testReport.md
    ```
具体其他的配置看[mocha官网](https://mochajs.org/#reporters)跟测试repository的说明

    说明： 在node环境下本来不用编译，但是node-inspector 貌似在当前chrome 版本下无法运行，idea里面也类似的情况，因此楼主编译后用浏览器调试的代码。（test.html文件里面引入了打包后的文件,用test.html文件去调试即可）

    **注意**： 因为用es6写的，跟测试脚本引入模块有点问题..因此要用浏览器调试的话还要去Promise.js里面改最后一行：

```
// window.MyPromise = MyPromise   //浏览器调试时解开注释，并打包

exports.default = MyPromise   //用test 脚本时换成该句，adapter里面要用commonjs的方法引入，不是很清楚为什么export default class 会无效，只能换成了exports.default...
```

- test文件夹: 主要是[adapter的配置](https://github.com/promises-aplus/promises-tests/#user-content-how-to-run)

### todo
Promise.all,race等其他函数

