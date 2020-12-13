## 第十章 函数

### 10.1 箭头函数

### 10.9 函数内部
函数内部有几个特殊的对象：arguments/this/caller/new.target(es6)
1. arguments
  arguments: 类数组，包含调用函数时传入的所有参数<br/>
  arguments.callee 指向arguments对象所在函数的指针（函数逻辑与函数名解耦）严格模式下会报错
2. this
  this指向把函数当成方法调用的上下文对象
3. caller
  指向调用当前函数的函数
4. new.target
  正常的函数调用new.target的值是undefined，通过new关键词调用的，new.target将引用被调用的构造函数

### 10.10 函数属性和方法
1. length
  保存函数定义的命名参数的个数
2. prototype
  保存所有实例方法
3. apply(this/window/instance/null, arguments/Array)
4. call(this/window/instance/null, ...arguments/...Array)

### 10.11 函数表达式