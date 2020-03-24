### 组件
注意： 

1、组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

2、所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

### sate
state 是私有的，并且完全受控于当前组件。


### 生命周期
componentDidMount()：方法会在组件已经被渲染到 DOM 中后运行。
componentWillUnmount()：
componentDidUpdate：

### setState()
用来修改state的方法

### 事件
onClick、
1、e.preventDefault(); —— 不需要考虑跨浏览器兼容问题。
2、需要将事件处理函数声明为 class 中的方法。

### question
1、函数组件和class组件的区别？
2、什么是有状态组件、什么是无状态组件？
3、props是否能定义初始值？


### 涉及到页面逻辑的操作
1、HTML的条件渲染
2、css的条件渲染
3、循环列表：map
4、key：识别哪些元素改变了；在 map() 方法中的元素需要设置 key 属性。