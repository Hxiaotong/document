# Array

## 2019年09月23日 倒推一周
::: tip
写一个方法，返回一个数组,从今天算起，倒推一周，总共七个元素，数组的每个元素是日期加周几。
:::
```js
var weekTextMap = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    0: '日'
}

function sevenDays() {
    var weeks = []
    var weekString = ''
    for(var step = 0 ; step<=10; step++) {
        var nowDate = new Date()
        var newDate = new Date(nowDate)
        newDate.setDate(nowDate.getDate()+step)
        weekString = newDate.getFullYear()+"/"+(newDate.getMonth()+1)+"/"+newDate.getDate()+" 星期"+weekTextMap[newDate.getDay()];
        weeks.push(weekString)
    }
    return weeks
}
var b = sevenDays()
```

## 2019年09月26日 洗牌算法
```js
function randomSort(arr) {
	var newArray = []
	newArray = arr.sort(function() {
		return Math.random() - 0.5
	})
	return newArray
}
```
```js 
function sort(arr) {
    var newArr = [];
    for(var i = 0, len = arr.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = arr[j];
        arr.splice(j, 1)
    }
    return newArr;
}
```
```js
/*huzhifu*/
function shuffle(arr) {
    for(var i = 0;i<arr.length;i++){
      let ranIndex = Math.floor(Math.random()*arr.length)
      let t = arr[i]
      arr[i] = arr[ranIndex]
        arr[ranIndex] = t 
    }
    return arr
}
```