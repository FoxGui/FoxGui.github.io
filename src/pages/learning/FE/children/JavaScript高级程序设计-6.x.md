## 第六章 集合引用类型

### Object
表达式上下文（Object赋值时），同样if后面出现的叫语句上下文

### 6.2 Array
大小是动态的，会自动增长

#### 6.2.1 创建数组
```js
let a;
a = new Array() // []
a = new Array(20) // [empty*20]
a = new Array('grey') // ['grey']
a = new Array('r', 'g', 'b') // ['r', 'g', 'b']
a = [] // []
a = [1, 2, ] // [1, 2]
```
Array.from(iterator)
```js
let a;
a = Array.from('Matt') // ['M', 'a', 't', 't']
const m = new Map().set(1, 2).set(3, 4); 
const s = new Set().add(1) .add(2) .add(3).add(4);

console.log(Array.from(m)); // [[1, 2], [3, 4]] 
console.log(Array.from(s)); // [1, 2, 3, 4]

 // Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4]; 10 const a2 = Array.from(a1);
console.log(a1); // [1, 2, 3, 4] 
alert(a1 === a2); // false

// 可以使用任何可迭代对象 
const iter = {
*[Symbol.iterator]() { yield 1;
    yield 2;
    yield 3;
    yield 4;
} };
console.log(Array.from(iter)); // [1, 2, 3, 4]
```
#### 6.2.2 数组空位


### 6.6 Set
const m = new Set();创建一个集合
```js
m.add('Mazz').add('Frisbie');
m.has('Mazz'); // true;
m.size; // 2
m.delete('Mazz');
m.clear();
```
add() 和 delete()操作是幂等的，执行参数相同的操作，结果一致，add的变量名是set中的key，变量值是set中的value

#### 6.6.2 顺序与迭代
```js
const s = new Set(["val1", "val2", "val3"]);
for (let pair of s.entries()) { console.log(pair);
 }
// ["val1", "val1"]
// ["val2", "val2"]
// ["val3", "val3"]
```

### 6.7 WeakSet
WeakSet中的value只能是Object或者继承自Object的类型（WeakMap是key)，当value为null时自动回收WeakSet中key的内存

### 6.8 迭代与扩展操作
