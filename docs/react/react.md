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
    1>、

    ```js
        import React, {Component} from 'react'
        import PropTypes from 'prop-types'

        // 有状态组件 Class：有state、有生命周期、有render、有props，用来定义交互和业务逻辑的组件
        class User extends Component {
            static defaultProps = {
                title: 'test'
            };
            // 定义属性类型
            static propTypes = {
                title: PropTypes.string.isRequired // 用来定义必传项
            };
            static defaultProps = {
                title: 'test'
            };
            render () {
                return <div>{this.props.title}</div>
            }
        }
        export default User
    ```

    ```js
        // 无状态组件 () => {}：没有render，只有props，用来展示的组件。
        // const User = ({ title }) => {
        const User = (props) => {
            const title = 'test'
            return <div>{props.title}</div>
        }
        User.defaultProps = {
            title: 'test' // 用来定义必传项
        }
        export default User
    ```
    2>、什么时候使用this.props.title，什么时候使用props.title？
    3>、constructor构造函数的作用？什么时候执行？

    ```js
        // 有状态组件 Class
        constructor() {
            super()
            this.state = {
                userName: 'huxiaotong'
            }
        }
    ```
    ```js
        <div>{this.state.userName}</div>
    ```
3、props是否能定义初始值？


## JSX语法
1、多次引用一个input组件，如何实现多个输入框各自数值的动态修改？
2、React.Fragment 是什么？什么时候用？
3、变量和表达式，使用花括号‘{}’包裹。
4、条件渲染：三目运算符、if表达式。
5、组件之间是如何传值的？
    1>、通过属性传值、组件如何接受传过来的值props。

    ```js
        // 有状态组件 Class
        <Navbar title="测试标题"></Navbar>
    ```
    ```js
        <div>{this.props.title}</div>
    ```
    2>、如何定义组件的默认值？defaultProps是什么？

    ```js
        // 设置默认属性值
        static defaultProps = {
            title: 'test' // 用来定义必传项
        }
    ```
    3>、如何定义属性类型？

    ```js
        import PropTypes from 'prop-types'

        // 定义属性类型
        static propTypes = {
            title: PropTypes.string.isRequired // 用来定义必传项
        }
    ```
6、组件里如何添加样式？有几种添加样式的方式？
    1>、行内样式: style

    ```js
        // 定义行内样式样式
        const userStyle = {
            fontSize: '14px', // 横杠变驼峰
            color: 'red'
        }

        <div style={userStyle}></div>
    ```
    2>、使用className
    3>、什么时候使用模块的方式引入样式文件，style.login-btn
7、循环渲染
    1>、map
    2>、key