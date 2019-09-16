# Vuex

## Module
::: tip
Vuex也就是考察这个模块和源码了吧。
————————————————————————————————

问题：vuex多个模块，state名相同，getters名相同，actions名相同，mutations名相同，分别会怎么样，会报错嘛， 报错的话怎么解决，不会报错的话，会有啥样的状态？
:::
回答：多个模块，state名相同，互不影响，都是局部的。

getters名相同，actions名相同，mutations名相同后定义的会覆盖先定义的内容。





