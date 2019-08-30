# Symbol
::: tip
一定要总结下这个知识点，因为我对Symbol的疑问太多了，见到的次数频率很高，每次脑子里都打满了问号，所以Symbol在我心里是重要但不紧急的知识点！
:::
## 作用：
为了防止命名冲突，增加的第七种数据类型。

## 应用场景
Symbol的应用场景并不多，Symbol不支持 new Symbol()，所以Symbol生成的值是不相等的。
1、Symbol可以用作对象中的键名。
2、防止命名冲突。
3、模拟私有属性。

``` js{1}
var shapeType = {triangle: 'Triangle};
function getArea() {
    var area = 0;
    switch () {
        case shapeType.triangle:
        are = .5 * options.width * options.height;
        break;
    }
    return area;
}

getArea(shapeType.triangle, {width: 100, height:100});
```
::: tip
只区分形状，不需要给这个形状取名字 ———— 是`取名字困难户`的一大福利
:::
```{2}
const shapeType = {
    triangle: Symbol()
}
```