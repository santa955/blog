---
title: 移动web开发填坑记
date: 2016-03-18 12:05:43
tags:
- 移动开发
- webapp
---

本文主要记录了移动web开发中遇到的各种问题。

<!-- more -->

#### 1. 移动端浏览器下`textarea` ,`input`聚焦时自动放大问题。
    
ios认为，在移动端当字体小于`16px`的时候，用户是无法看清楚页面的。所以，会自动放大页面。
解决办法有两种：

第一种是在设置文本框字体大于`16px`。当然这种情况基本不适用。
第二种在页面`<head></head>`标签中加入`<meta>`标签，如下:

```html
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
```



#### 2. IOS自带浏览器safari下文本框带内阴影

在默认情况下，safari下的表单元素会自带一层内阴影，如下图:
原因见[这篇文章博客](http://zomigi.com/blog/bug-fixes-for-removing-the-inner-shadow-on-ios-inputs/)

```css
input[type="text"] {
   -webkit-appearance: none;
   -moz-appearance:    none;
   appearance:         none;
}
```
[`appearance`（见MDN介绍）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/appearance)属性指示是否使用基于操作系统主题的平台原生的样式显示元素。

**注意:** 当`appearance`的值为`none`,时，只有表单控件的样式不再被强制显示与操作系统本地控件一样 。可以通过CSS控制。但除了表单控件以外的其他替换元素都不会受到影响。


