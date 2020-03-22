## react 文档

### 组件
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

### 知识点
1、props
2、state
3、JSX
4、Virtual DOM：数据更新通过虚拟DOM上的diff算法，找到需要变更的DOM节点。
5、Data Flow：“单向数据绑定”是 React 推崇的一种应用架构的方式。

### 警告⚠️
1、因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

::: tip
例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。
:::

### 元素
```js
const element = <div />;
```

### 组件
1、函数组件
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

