# Vuex

## Module
::: tip
Vuex也就是考察这个模块和源码了吧。
————————————————————————————————

问题：vuex多个模块，state名相同，getters名相同，actions名相同，mutations名相同，分别会怎么样，会报错嘛， 报错的话怎么解决，不会报错的话，会有啥样的状态？

回答：
对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，所以模块之间的state互不影响，属于局部作用域。
默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。解决办法：使用命名空间
:::






