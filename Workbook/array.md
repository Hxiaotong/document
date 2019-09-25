# Array

## 2019年09月23日
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
