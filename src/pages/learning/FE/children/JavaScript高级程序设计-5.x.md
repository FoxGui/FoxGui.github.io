## 第五章基本引用类型

### 5.1 Date
| 方法 | 作用 |
|:---:|:---:|
|Date.parse() |接收日期字符串，并将字符串转为毫秒数|
|Date.now()| 返回执行日期的时间毫秒数|
|toLocaleString|返回于浏览器运行的本地环境一致的时间和日期|
|toString|返回带时区信息的日期和时间|
|valueOf|返回日期的毫秒数|


### 5.2 RegExp
```js
let expression = /pattern/flag
```
**flag**
| flag | desc |
|:---:|:---:|
| g | global |
| i | insensitive |
| m | multi line |
| y | sticky |
| u | unicode |
| s | single line |

### 5.3 原始包装类型
Boolean/Number/String<br/>
原始包装类型new出来的都是对象而非基本类型

STRING
| 方法 | 描述 |
|:---:|:---:|
|subString(start, end) | end小于0时按0算 |
|slice(start, end) |  |
|subStr(start, length) | length小于0时按0算  |
|indexOf | none时为-1 |
|lastIndexOf | none时为-1 |
|startsWith(str, from) | 以str开始，从from开始计算 |
|endsWith(str, to) | 以str结束, 从to开始倒过来计算 |
|includes(str, from) | 包含str，从from开始计算 |
|trim() | 删除前后所有空格 |
|repeat(num) | 重复赋值num次 |
|padStart(num, replace) | 赋值字符串，长度不够左边补replace(默认为空格)，可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，则会将其拼接并截断以匹配 指定长度。此外，如果长度小于或等于字符串长度，则会返回原始字符串。 |
|padEnd(num, replace) | 赋值字符串，长度不够右边补replace(默认为空格)，可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，则会将其拼接并截断以匹配 指定长度。此外，如果长度小于或等于字符串长度，则会返回原始字符串。 |
|toLowerCase() | 全部转小写 |
|toLocaleLowerCase() | 全部转小写 |
|toUpperCase() | 全部转大写 |
|toLocaleUpperCase() | 全部转大写 |
|string.match(pattern) | 同pattern.exec(string)|
|string.search(pattern) | |
|string.replace(string | pattern, string | function(match, pos, originalText)) | 替换字符串, 在只有一个匹配项时，这个函数会收到 3 个参数:与整 个模式匹配的字符串、匹配项在字符串中的开始位置，以及整个字符串 |
| string.split(string | pattern, length) | 按照string| pattern切割，返回length个 |
|localeCompare | 比较字符串前后顺序 | 
字符串可以通过for...of访问以及[...string]解构

### 5.4 单例内置对象
#### 5.4.1 Global
| 方法 | desc |
|:---:|:---:|
| encodeURI |不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、 井号 |
| encodeURIComponent |会编码它发现的所有非标准字符|
| decodeURI | 对应encodeURI |
| decodeURIComponent | 对应encodeURIComponent |
| eval | |

| 属性 | desc |
|:---:|:---:|
| undefined | 特殊值 undefined |
| NaN | 特殊值 NaN |
| Infinity | 特殊值 Infinity |
| Object | Object 的构造函数 |
| Array | Array 的构造函数 |
| Function | Function 的构造函数 |
| Boolean | Boolean 的构造函数 |
| String | String 的构造函数 |
| Number | Number 的构造函数 |
| Date | Date 的构造函数 |
| RegExp | RegExp 的构造函数 |
| Symbol | Symbol 的伪构造函数 |
| Error | Error 的构造函数 |
| EvalError | EvalError 的构造函数 |
| RangeError | RangeError 的构造函数 |
| ReferenceError | ReferenceError 的构造函数 |
| SyntaxError | SyntaxError 的构造函数 |
| TypeError | TypeError 的构造函数 |
| URIError | URIError 的构造函数 |

