## 第七章 迭代器与生成器

### 7.1 理解迭代

### 7.2 迭代器模式
迭代器是按需创建的一次性对象，每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代其关联可迭代对象的 API。迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。

#### 7.2.1 可迭代协议
实现 Iterable 接口(可迭代协议)要求同时具备两种能力:支持迭代的自我识别能力和创建实现 Iterator 接口的对象的能力。在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而 且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂 函数，调用这个工厂函数必须返回一个新迭代器。

对象拥有可迭代值Symbol.iterator,该值是个生成器

实际生产中不需要显示的调用Symbol.iterator

 for-of 循环  数组解构
 扩展操作符
 Array.from()
 创建集合
 创建映射
 Promise.all()接收由期约组成的可迭代对象
 Promise.race()接收由期约组成的可迭代对象
 yield*操作符，在生成器中使用

这些原生语言结构会在后台调用提供的可迭代对象的工厂函数Symbol.iterator

#### 7.2.2 迭代器协议
迭代器是一次性使用的对象，用于迭代与其关联的可迭代对象，使用next()方法遍历数据，成功调用会返回IteratorResult对象{ value: undefined, done: true }

#### 7.2.3 自定义迭代器
与 Iterable 接口类似，任何实现 Iterator 接口的对象都可以作为迭代器使用。

### 7.3 生成器
生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的

#### 7.3.2 通过yield中断执行
yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方。生成器函数在遇到 yield 关键字之前会正常执行.遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生 成器函数只能通过在生成器对象上调用 next()方法来恢复执行

通过 return 关键字退出的生成器函 数会处于 done: true 状态。return 参数会作为IteratorResult 的value

1. 生成器对象作为可迭代对象
在生成器对象上显式调用 next()方法的用处并不大。其实，如果把生成器对象当成可迭代对象， 那么使用起来会更方便:
```js
function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}
for (const x of generatorFn()) { console.log(x);
}
// 1 
// 2 
// 3
```

2. 使用 yield 实现输入和输出
yield 关键字可以同时用于输入和输出，如下例所示:
```js
function* generatorFn() {
  return yield 'foo';
}
let generatorObject = generatorFn();
console.log(generatorObject.next()); // { done: false, value: 'foo' } 
console.log(generatorObject.next('bar')); // { done: true, value: 'bar' }
```

3. 产生可迭代对象
可以使用星号增强 yield 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值
```js

function* generatorFn() {
  yield* [1, 2];
  yield *[3, 4];
  yield * [5, 6];
}
for (const x of generatorFn()) {
  console.log(x);
}
// 1
// 2
// 3
// 4
// 5
// 6

```

#### 7.3.3 生成器特别适合做默认迭代器

#### 7.3.4 提前终止生成器
1. return() 提供给return的值是最终迭代器的值
```return (4) // { value: 4, done: true } ```
2. throw() 改方法会在暂停时注入error到生成器中，若未处理，生成器会关闭try...catch...处理后会调过这个值
