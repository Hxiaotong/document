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


### 数组排序
1. 三目运算符
```js
arr.sort((prev,next) => prev < next ? 1: -1)
```
2. localeCompare
```js
arr.sort((prev,next) => next.localeCompare(prev))
```
3. charCodeAt
```js
arr.sort((prev,next) => next.charCodeAt() - prev.charCodeAt())
```