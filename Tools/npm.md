# npm
::: tip
我的NPM网址：https://www.npmjs.com/~xiaotong.hu  
用户名：xiaotong.hu  
密码：webdevelop  
:::
 
::: tip
GitHub的地址：https://github.com/four-leaf-clover  
登录名：xiaotong.hu@yahoo.com  
密码：0912webdevelop  
:::

 ## npm publish 发布示例
```
初始化 

package.json：npm init
```
```
验证你在 npmjs.org 上的账号

npm adduser
```
# <font size="3" color="red">发布：npm publish .  注意事项</font>
* 如果你以后修改了代码，然后想要同步到npm上的话请修改 package.json中的version然后再次publish。
* 使用 cnpm 的注意报错：  
    ``` js
    no_perms Private mode enable, only admin can publish this module 
    ```
* 设置回原本的就可以了：  
    ``` js
    npm config set registry http://registry.npmjs.org  
    ```

## example
1. 编写模块
``` javascript
exports.sayHello = function () { 
    return 'Hello World'; 
} 

保存为index.js  
```
2. 初始化包描述文件
``` js
$ npm init 
```
``` json
package.json文件

{ 
    "name": "wu_xx", 
    "version": "1.0.1", 
    "description": "wu_xx first demo", 
    "main": "index.js", 
    "scripts": { 
        "test": "make test" 
    }, 
    "repository": { 
        "type": "Git", 
        "url": "git+https://github.com/blackwuxin/testdemo.git" 
    }, 
    "keywords": ["demo" ], 
    "author": "wu_xx", 
    "license": "ISC", 
    "bugs": { 
        "url": "https://github.com/blackwuxin/testdemo/issues" 
    }, 
    "homepage": "https://github.com/blackwuxin/testdemo#readme", 
} 
```
3. 注册npm仓库账号
``` js
https://www.npmjs.com 上面的账号
``` 
```
$ npm adduser
```
4. 上传包
```
$ npm publish
```
5. 安装包
```
$ npm install wu_xx
```
6. 管理包权限
* 查看模块拥有者 
    ``` js
    $ npm owner ls <package_name> 
    ```
* 添加一个发布者 
    ``` js
    $ npm owner add <user> <package_name> 
    ```
* 删除一个发布者 
    ``` js
    $ npm owner rm <user> <package_name>
    ```
7. 分析包，查看当前项目引用了哪些包 
    ``` js
    npm ls
    ```
8. 使用引入包
``` Javascript
var hello = require('wu_xx'); 

hello.sayHello();
```
[语义化版本](https://semver.org/lang/zh-CN/)

 ## npm 版本号格式
```
版本格式：主版本号（major）.次版本号（minor）.修订号（patch），版本号递增规则如下：

主版本号：当你做了不兼容的 API 修改，
次版本号：添加功能或者废弃功能，向下兼容，
修订号：bug 修复，向下兼容。
有时候为了表达更加确切的版本，还会在版本号后面添加标签或者扩展，来说明是预发布版本或者测试版本等。比如 3.2.3-beta-3。
版本的比较依次比较 主版本 → 次版本 → 补丁版本 → 先行版本，直到第一个能得出比较结果为止。
```
### 常见的标签和意义
::: tip
dev（开发版）：开发阶段使用，bug多，体积较大等，功能不完善。
beta（测试版）：还是有bug。
stable（稳定版）。
csp（内容安全装版）：js库常用。
latest（最新版本）：不指定版本和标签，默认安装新版。
:::
#### 版本运算符
一、主要有~、^、-、<、<=、>、>=、=版本运算符
二、解析
1、~ 版本号 ----- 指定主版本号或者次版本号相同
eg:
~3：3.x或者3.0.0 <= v < 4.0.0 【指定主版本号相同】
~3.1：3.1.x或者 3.1.0 <= v <3.2.0 【指定主版本号和次版本号相同】
~3.1.2：3.1.2 < v < 3.2.0 【指定主版本号和次版本号相同】

注：指定的版本范围含有预发布版本，只会匹配和完整版本号相同的预发布版本。
~3.1.3-beta.2 匹配 3.1.3-beat.3 不匹配 3.1.4-beat-2
```
npm i lodash@~3 # 安装 3.10.1
npm i lodash@~3.9 # 安装 3.9.3
npm i lodash@~3.9.1 # 安装 3.9.3
npm i lodash@~3.8.0 # 安装 3.8.0
```
2、^ 版本号 --- 第一个非零 版本号相同
eg：
^3.1.5：3.1.5 <= v < 4.0.0
^0.3.6：0.3.6 <= v < 0.4.0
^0.0.2：0.0.2 <= v < 0.0.3
^3.x.x：3.0.0 <= v < 4.0.0
^4.2.x：4.2.0 <= v < 4.3.0 【？？？？？？？这个解释不通，按照非零匹配原则，应该是4.2.0 <= v < 5.0.0】

注：npm 安装包时，默认使用 ^ 匹配版本。
```
npm i lodash@^3 # 安装 3.10.1
npm i lodash@^3.9 # 安装 3.10.1
npm i lodash@^3.8.0 # 安装 3.10.1
```
[资料来源](http://www.fly63.com/article/detial/2636)
2、

### npm不常用的查看文件命令
```
vi查看.npmrc的内容：npm config edit
查看.npmrc的文件位置：npm config ls -l
查看npm缓存位置的目录：npm config get cache
npm的全局node包在哪里：npm config get prefix
当然对于全局包路径的查看，还可以使用下面的命令: npm root -g
```








