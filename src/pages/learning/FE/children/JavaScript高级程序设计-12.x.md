## 第12章 浏览器对象
### 12.1 window对象
top指向顶层window

parent指向父层window

screenLeft, screenRight, screenX, screenY

outerWidth, outerHeight, innerWidth, innerHeight

#### 12.1.4 窗口大小
确定浏览器窗口精确尺寸
```js
let pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if (typeof pageWidth != "number") { 
  if (document.compatMode == "CSS1Compat"){
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight; 
  } else {
    pageWidth = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}
```

#### 12.1.5 视口位置
pageXoffset/scrollX, pageYoffset/scrollY

#### 12.6 导航与打开新窗口
window.open(url, targetString, 特性字符串)

特性字符串表
| 特性 | 值 | 说明 |
|:---:|:---:|:---:|
| fullscreen | 'yes' or 'no' | only ie |
| height | number | 新窗口高度 >= 100 |
| left | number |
| location | 'yes' or 'no' |