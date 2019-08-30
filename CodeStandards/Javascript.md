# Javascript
## 去重的操作方法
### 数组去重
1. 使用Set方法
```js
[...new Set(array)]
```
2. Array.from
```js
function dedupe(array) {
    return Array.from(new Set(array));
}
dedupe([1,2,3,3]) // [1,2,3]
```

### 字符串去重
1. 使用Set方法
```js
[new Set('ababbc)].join('')
// "abc"
```