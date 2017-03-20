---
title: JavaScript中的闭包
date: 2015-04-26
tags:
- JavaScript
- 闭包
---

`JavaScript`中，闭包是非常神秘的，也是很难理解的。

<!--more-->

### 闭包和变量
在闭包中，每次取得包含函数中的任何变量的值都是变量的最后一个值，因为闭包所保存的是整个变量对象，而不是某个特殊的变量。例如：

```javascript
function getArray(){
	var r = new Array();
	for(var i = 0; i < 10; i++){
		r[i] = function(){
			return i;
		}
	}
	return r;
}

for(var i = 0; i < 10; i++){
	console.log(getArray()[i]())  // 10 个10
}
```
这个函数会返回一个函数数组，表面上看，每个函数会返回自己的索引值，即位置0的函数返回0，位置1的函数返回1。但实际上，每个函数都会返回10。（高设第三版-181）


### 闭包中的`this`

在闭包中，`this`指向的是全局`windows`对象，这点在闭包中有时很难发现。如：

```javascript
var name = 'My name is Windows';

var o = {
	name : 'My name is Object',

	getName: function(){
		return function(){
			return this.name;
		}
	}
}

alert(o.getName()());// "My name is Windows"
```
为什么上面的匿名函数没有取得其包含作用域中的`this`对象呢？原因在于：每个函数在被调用时都会自动获取连个特殊变量`this`和`arguments`. 内部函数在搜索这两个变量时，只会搜索到起活动对象为止。因此永远不可能直接访问外部函数中的这两个变量。（高设第三版 - 182）

注意上面的代码与下面的不同点：


```javascript
var name = 'My name is Windows';

var o = {
	name : 'My name is Object',

	getName: function(){
		//此处较上面没有匿名函数
		return this.name;
	}
}

alert(o.getName())// "My name is Object"
```

