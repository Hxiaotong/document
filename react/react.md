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



