## 第八章 对象、类与面向对象编程

### 8.1 理解对象
通常创建对象方法有： new Object();当然我们也可以使用对象字面量创建对象{}

### 8.2 属性的类型
1. 数据属性
 [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特 性，以及是否可以把它改为访问器属性。
 [[Enumerable]]：表示属性是否可以通过 for-in 循环返回
 [[Writable]]:表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
 [[Value]]:包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined。

使用(在非严格模式下尝试给这个属性重新赋值会被忽略。在严格模式下，尝试修改只读属性 的值会抛出错误。)
```js
let p = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'Nigulasidaweige'
})
console.log(person.name); 
// "Nigulasidaweige" 
person.name = "Greg"; 
console.log(person.name); // "Nigulasidaweige"
```
我们可以通过```Object.defineProperty()```多次配置同一个属性，但是，一旦配置属性时设置了configurable: false则不可以再配置属性了，同样，调用```Object.defineProperty()```时，[[configurable]], [[enumerable]], [[writable]]的值默认均为false。

2. 访问器属性 （getter， setter）
```js
let p = {
  get kk () {
    return 0
  },
  set kk (value) {
    this.pp = value;
  }
}

let book = {
  year_: 2017,
  edition: 1
};
Object.defineProperty(book, "year", { 
  get() {
    return this.year_; 
  },
  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue;
      this.edition += newValue - 2017;
    }
  } 
});
book.year = 2018; 
console.log(book.edition); // 2
```

#### 8.1.2 定义多个属性
```js
let book = {}; 
Object.defineProperties(book, {
  year_: {
    value: 2017
  },
  edition: {
    value: 1
  },
  year: {
    get() {
      return this.year_; 
    },
    set(newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017; 
      }
    }
  }
})
```
以上数据属性的 configurable、enumerable 和 writable 特性值都是 false。

#### 8.1.3 读取属性的特性
方法： ```Object.getOwnPropertyDescriptor(obj, key)``` 和 ```Object.getOwnPropertyDescriptors(obj)```
```js
/**
 * @descriptor {
 *  value: obj[key],
 *  configurable: boolean,
 *  enumerable: boolean,
 *  writable: boolean,
 *  get: function,
 *  set: function
 * }
*/
let descriptor = Object.getOwnPropertyDescriptor(obj, key);
```

#### 8.1.4 合并对象（merge | mixin)
Object.assign(obj1, obj2, obj3);初值以后一个为准,它执行的是浅拷贝
注意
```js
let p = {
  get kk () {
    return 0
  },
  set kk (value) {
    this.pp = value;
  }
}
Object.assign(p, { kk: 99, pp: 88 }) // { kk: { get()... }, pp: 88 }
Object.assign(p, { pp: 88, kk: 99 }) // { kk: { get()... }, pp: 99 }
```
Object.assign()没有“回滚”之前 赋值的概念，因此它是一个尽力而为、可能只会完成部分复制的方法。

#### 8.1.5 对象表示及相等判定
Object.is(NaN, NaN) // true

### 8.2 创建对象
