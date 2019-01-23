Python&MATLAB
========
学习Python, 简单入门编程, 了解什么是面向对象, Python和MATLAB有很多共通之处

|<img src="https://i2.hdslb.com/bfs/archive/9a8f816fdadd1b814c5ce51e7ead25319166eb92.jpg@320w_200h.webp" alt="Python" title="Python image" width="60%"/>|
|:-:|
|[小甲鱼的Python入门](https://www.bilibili.com/video/av4050443?from=search&seid=1496318060419049403"Python入门")|
|[课后习题提取码：e9xc](https://pan.baidu.com/s/1bXkNaveiYIFxelvIEN9G8g)| 
<img src="https://ww2.mathworks.cn/etc/designs/mathworks/img/pic-header-mathworks-logo.svg" title="MathWorks" width="30%"/>
以下链接均为代码操作simulink模型的方法

+ [Stateflow编程接口](https://ww2.mathworks.cn/help/stateflow/programmatic-manipulation.html)
  + [Stateflow部分API提供的命令](https://ww2.mathworks.cn/help/stateflow/api/quick-start-for-the-stateflow-api.html)
  + [通过Stateflow提供的API创建和访问Chart](https://ww2.mathworks.cn/help/stateflow/api/quick-start-for-the-stateflow-api.html)
+ 模块及模型参数相关(这些参数可在set_param()以及add_block()中使用)
  + [模型参数](https://ww2.mathworks.cn/help/simulink/slref/model-parameters.html)(暂无使用记录)
  + [常见模块特定的参数](https://ww2.mathworks.cn/help/simulink/slref/block-specific-parameters.html#mw_c89fb247-a4eb-4a4f-bcc4-d27a68502cb4)(如：设置Switch'Saturate on integer overflow'属性的参数'SaturateOnIntegerOverflow'(参数换行可以写到一行)等)
  + [模块的通用属性](https://ww2.mathworks.cn/help/simulink/slref/common-block-parameters.html)(模块背景色参数'BackgroundColor'、显示或隐藏模块名称参数'ShowName'等等)
  + [设置系统和模块参数值(set_param)](https://ww2.mathworks.cn/help/simulink/slref/set_param.html?s_tid=doc_ta)
  + [获取函数名称和值(get_param)](https://ww2.mathworks.cn/help/simulink/slref/get_param.html?searchHighlight=get_param&s_tid=doc_srchtitle)
+ Matlab对Simulink模块和线条的操作
  + [模块、信号线、系统、端口以及注释定位(find_system)](https://ww2.mathworks.cn/help/simulink/slref/find_system.html?s_tid=doc_ta)
  + 判断路径是否为期望路径可采用字符串/字符串数组匹配[strcmp()](https://ww2.mathworks.cn/help/matlab/ref/strcmp.html?searchHighlight=strcmp&s_tid=doc_srchtitle)以及[find()](https://ww2.mathworks.cn/help/matlab/ref/find.html?s_tid=doc_ta)组合
  + 操作信号线
    + [add_line](https://ww2.mathworks.cn/help/simulink/slref/add_line.html?searchHighlight=add_line&s_tid=doc_srchtitle)
    + [delete_line](https://ww2.mathworks.cn/help/simulink/slref/delete_line.html?s_tid=doc_ta)
  + 操作模块
    + [add_block](https://ww2.mathworks.cn/help/simulink/slref/add_block.html?s_tid=doc_ta) Inport等模块的插入可以在第一个参数中设置如: 'built-in/Inport'插入，如不确定模块路径则可以在第一个参数中设置完整路径，如: 'simulink/Logic and Bit Operations/Compare To Zero'
    + [delete_block](https://ww2.mathworks.cn/help/simulink/slref/delete_block.html?s_tid=doc_ta)
+ 其他
  + [最大数组维度的长度(length)](https://ww2.mathworks.cn/help/matlab/ref/length.html?searchHighlight=length&s_tid=doc_srchtitle)
  + [查询图形对象属性(get)](https://ww2.mathworks.cn/help/matlab/ref/get.html?searchHighlight=get&s_tid=doc_srchtitle)
  + [清除工作区项目,释放系统内存(clear)](https://ww2.mathworks.cn/help/matlab/ref/clear.html?searchHighlight=clear&s_tid=doc_srchtitle)
