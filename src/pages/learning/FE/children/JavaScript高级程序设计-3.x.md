
## 3
### 3.3.1 var
var声明范围是**函数作用域**。声明变量关键字未使用时，默认创建全局变量，函数调用后，变量可以全局访问，同时变量也会被绑定到**window**上
```js
function test() {
    message = 'hi';
}
test();
console.log(message)
```
**变量提升(hoist)：**var关键字可以把变量声明拉到**函数作用域**顶端
### 3.3.2 let声明
let 声明是**块级作用域**，重复let声明变量会报错**SyntaxError**
1. 暂时性死区
在 let 声明之前访问变量会报**ReferenceError: value is not defined**（未声明的变量进行访问也会报这个错误）

### 3.3.3 const声明
变量必须初始化且不可更改
    
## 3.4 数据类型
原始类型： Undefined， Null， Boolean， Number， String， Symbol， 复杂数据类型： Object
### 3.4.1 typeof
['undefined', 'boolean', 'string', 'number', 'object', 'function', 'symbol'].includes(typeof x) === true;
### 3.4.1 Undefined
### 3.4.3 Null
代表空对象指针，为假值
### 3.4.4 Boolean
假值： false/''/0/NaN/null/undefined
### 3.4.5 Number
八进制： 077（078会当成十进制处理），十六进制：0x1a/0X1F<br/>
isNaN判断NaN<br/>

<b>数字的属性</b>
|属性 |	描述|
|----|----|
| Number.MAX_VALUE |可表示的最大值 |
|Number.MIN_VALUE|	可表示的最小值|
|Number.NaN|	特指”非数字“|
|Number.NEGATIVE_INFINITY|	特指“负无穷”;在溢出时返回|
|Number.POSITIVE_INFINITY|	特指“正无穷”;在溢出时返回|
|Number.EPSILON|	表示1和比最接近1且大于1的最小Number之间的差别|
|Number.MIN_SAFE_INTEGER|	JavaScript最小安全整数.|
|Number.MAX_SAFE_INTEGER|	JavaScript最大安全整数.|
<b>数字的方法</b>
|方法 | 描述 |
| --- | --- |
| [Number.parseFloat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) | Number.parseFloat()	把字符串参数解析成浮点数 |
| [Number.parseInt(string, radix)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) | 把字符串解析成特定基数对应的整型数字，和全局方法 parseInt() 作用一致. |
| [Number.isFinite()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)| 判断数字是否有限 |
| [Number.isInteger()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) | 判断传递的值是否为整数 |
| [Number.isNaN()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)| 判断传递的值是否为 NaN. More robust version of the original global isNaN(). |
| [Number.isSafeInteger()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) | 判断传递的值是否为安全整数。 |

<b>数字类型原型上的一些方法</b>
| 方法 | 描述 |
| --- | --- |
| [toExponential(fractionDigits)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) | 返回一个数字的指数形式字符串，like: 1.23e+2 |
| [toFixed(digits)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) | 返回指定小数位数的表示形式的**字符串** |
| [toPrecision(precision)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) | 返回一个指定精度的数字(string)。如下例子中，a=123中，3会由于精度限制消失 var a=123,b=a.toPrecision(2)//b="1.2e+2" |

<b>数字对象</b>
Math的方法

| 方法 |	描述|
| --- | --- |
| abs() |	绝对值 |
| sin(), cos(), tan()	| 标准三角函数;参数为弧度 |
| asin(), acos(), atan(), atan2()|	反三角函数; 返回值为弧度 |
| sinh(), cosh(), tanh() |	双曲三角函数; 返回值为弧度. |
| asinh(), acosh(), atanh() |	反双曲三角函数;返回值为弧度. |
| pow(), exp(), expm1(), log10(), log1p(), log2() | 指数与对数函数 |
| floor(), ceil()	|向下向上取整 |
min(), max()	
返回一个以逗号间隔的数字参数列表中的较小或较大值(分别地)

| random()	 | 返回0和1之间的随机数。 |
| round(), fround(), trunc() |	四舍五入和截断函数 |
| sqrt(), cbrt(), hypot()	 | 平方根，立方根，平方参数的和的平方根  ，两个参数平方和的平方根 |

| sign()	| 数字的符号, 说明数字是否为正、负、零。(0, 1, -1) |
| clz32(),imul()	 | 在32位2进制表示中，开头的0的数量.返回传入的两个参数相乘结果的类C的32位表现形式 |

### 3.4.6 String类型
<b>模板字面量</b>
- 模板字面量标签函数
```js
const a = 6, b = 9;
function simpleTag(strings, ...expressions) {
  console.log(strings); // ["", " + ", " = ", "", raw: Array(4)],
  console.log(expressions) // [6, 9, 15]
}
simpleTag`${a} + ${b} = ${a + b}`
```
<b>原始字符串</b>
String.raw`\u00A9`

### 3.4.7 Symbol类型
特点：
- 同样的值，Symbol后的值不相等
- Symbol.for()会执行幂等操作，Symbol.keyFor()取出Symbol.for()内的值
```
const s = Symbol.for('boo');
Symbol.keyFor(s); //'boo'
```

### 3.4.8 Object类型
