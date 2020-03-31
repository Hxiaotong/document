# react 文档

## 组件
:::tip
注意： 
1、组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签。例如: ```<div /> ```代表 HTML 的 div 标签，而 ```<Welcome /> ```则代表一个组件，并且需在作用域内使用 Welcome。

2、所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
:::

1、函数组件
```js
import React, { Component } from 'react'
import {render} from 'react-dom'

class HelloMessage extends Component {
    render () {
        return <div>Hello {this.props.name}</div>;
    }
}

render(<HelloMessage name="Jone">, mountNode);
```

## sate
state 是私有的，并且完全受控于当前组件。

### 知识点
1、props
2、state：this.setState
3、JSX
4、Virtual DOM：数据更新通过虚拟DOM上的diff算法，找到需要变更的DOM节点。
5、Data Flow：“单向数据绑定”是 React 推崇的一种应用架构的方式。

## 警告⚠️
1、因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

::: tip
例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。
:::

## 元素
```js
const element = <div />;
```

## 组件
```js
function componentName () {
    return <div>Hello</div>
}
```
2、class组件
```js
class componentName extends React.Component {
    render() {
        return <div>Hello</div>
    }
}
```
## 无状态组件
你也可以用纯粹的函数来定义无状态的组件(stateless function)，这种组件没有状态，没有生命周期，只是简单的接受 props 渲染生成 DOM 结构。无状态组件非常简单，开销很低，如果可能的话尽量使用无状态组件。

## 生命周期
componentDidMount()：方法会在组件已经被渲染到 DOM 中后运行。
componentWillUnmount()：
componentDidUpdate：

### setState()
用来修改state的方法

## 事件
1、onClick：注意要显式调用 bind(this) 将事件函数上下文绑定要组件实例上。
2、e.preventDefault(); —— 不需要考虑跨浏览器兼容问题。
3、需要将事件处理函数声明为 class 中的方法。

## 表单

## 状态提升

## 组合
1、props.children 类似于vue的slot
2、可自行约定，作为引用组件的属性，该属性是个React 元素。

注意⚠️：在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递。

大重点🏁：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

## question
1、函数组件和class组件的区别？
2、什么是有状态组件、什么是无状态组件？
3、props是否能定义初始值？