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
2、state：this.setState
3、JSX
4、Virtual DOM：数据更新通过虚拟DOM上的diff算法，找到需要变更的DOM节点。
5、Data Flow：“单向数据绑定”是 React 推崇的一种应用架构的方式。

### 无状态组件
你也可以用纯粹的函数来定义无状态的组件(stateless function)，这种组件没有状态，没有生命周期，只是简单的接受 props 渲染生成 DOM 结构。无状态组件非常简单，开销很低，如果可能的话尽量使用无状态组件。

### 生命周期

### 事件
1、onClick：注意要显式调用 bind(this) 将事件函数上下文绑定要组件实例上。

### 

