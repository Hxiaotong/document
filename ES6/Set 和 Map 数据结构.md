# Set 和 Map 数据结构

::: tip
Q：JavaScript有多少种数据结构呢？
A：Array，object，Set，WeakSet，Map，WeakMap，JSON，Function
:::

## Set 作用


## Set 应用场景
一、去除数组重复成员
```js
[...new Set(array)]
```
二、去除字符串里面的重复字符
```js
[...new Set('ababbc')].join('')
```
三、通过add方法，判断NaN等于NaN
四、通过add方法，判断两个空对象不相等
五、Array.from 方法可以将Set结构转为数组
```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```
六、可用于遍历操作
```js
keys()，values()，entries()，forEach()
```
七、Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）



## Map 作用
Map是键值对的集合，与JavaScript的Object不同的是，Map的键不局限于字符串，可以是任何类型的值。

## Map 应用场景
一、处理网络错误
```js
let errors = new Map([
    [400, 'InvalidParameter'],
    [404, 'Not found'],
    [500, 'InternalError']
]);
```
