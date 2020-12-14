(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{499:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis事务"}},[t._v("#")]),t._v(" Redis事务")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("Redis不同与关系数据库，使用方法非常简单")])]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("事务基本流程")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("类比于Redis指令：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("multi")]),t._v("：begin()")]),t._v(" "),a("li",[a("code",[t._v("exec")]),t._v("：commit()")]),t._v(" "),a("li",[a("code",[t._v("discard")]),t._v("：rollback()")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("code",[t._v("discard")]),t._v("只能丢弃已缓存的指令")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("redis事务不支持原子性，只支持隔离性")])]),t._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" Watch")]),t._v(" "),a("p",[t._v("watch可以再事务开始之前监听多个变量，当服务收到exec指令，Redis会检查这些监听变量，若已被修改了则返回NULL告知客户端")]),t._v(" "),a("p",[a("img",{attrs:{src:"/16079619153470.png",alt:"-w775"}})]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("watch禁止在multi和exec之间执行，而必须在multi之间，否则保存")])])])}),[],!1,null,null,null);s.default=e.exports}}]);