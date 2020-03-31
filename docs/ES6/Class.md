## 类

### __proto__ 属性会改写原型

### constructor构造方法
```js
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```
::: tip
类的数据类型就是函数，类本身就是指向构造函数。
:::
