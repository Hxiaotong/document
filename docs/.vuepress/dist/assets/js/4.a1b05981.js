(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(t,s,a){t.exports=a.p+"assets/img/sentry_5.ee3d6123.jpeg"},250:function(t,s,a){t.exports=a.p+"assets/img/sentry_9.4c02f964.jpeg"},251:function(t,s,a){t.exports=a.p+"assets/img/sentry_10.7429e2a7.jpeg"},252:function(t,s,a){t.exports=a.p+"assets/img/sentry_4.9f93856d.jpeg"},253:function(t,s,a){t.exports=a.p+"assets/img/sentry_6.6104b932.jpeg"},254:function(t,s,a){t.exports=a.p+"assets/img/sentry_7.bd28eece.jpeg"},299:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"sentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentry"}},[t._v("#")]),t._v(" sentry")]),t._v(" "),n("h3",{attrs:{id:"vue项目接入sentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue项目接入sentry"}},[t._v("#")]),t._v(" VUE项目接入sentry")]),t._v(" "),n("h4",{attrs:{id:"一、公司sentry网址：http-werr-xxx-net-fe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、公司sentry网址：http-werr-xxx-net-fe"}},[t._v("#")]),t._v(" 一、公司sentry网址：http://werr.XXX.net/FE/")]),t._v(" "),n("h4",{attrs:{id:"二、sentry网址主要操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、sentry网址主要操作"}},[t._v("#")]),t._v(" 二、sentry网址主要操作")]),t._v(" "),n("h5",{attrs:{id:"新建项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建项目"}},[t._v("#")]),t._v(" 新建项目")]),t._v(" "),n("p",[n("img",{attrs:{src:a(250),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(251),alt:"An image"}})]),t._v(" "),n("h4",{attrs:{id:"三、项目引入sentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、项目引入sentry"}},[t._v("#")]),t._v(" 三、项目引入sentry")]),t._v(" "),n("h5",{attrs:{id:"安装依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),n("div",{staticClass:"language-javscript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yarn add @sentry/browser @sentry/integrations\n")])])]),n("h5",{attrs:{id:"_1、main-js配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、main-js配置"}},[t._v("#")]),t._v(" 1、main.js配置")]),t._v(" "),n("h6",{attrs:{id:"获取dsn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取dsn"}},[t._v("#")]),t._v(" 获取dsn")]),t._v(" "),n("p",[n("img",{attrs:{src:a(178),alt:"An image"}})]),t._v(" "),n("h6",{attrs:{id:"全局配置release"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局配置release"}},[t._v("#")]),t._v(" 全局配置release")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js文件中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gitSha "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child_process'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("execSync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git rev-parse HEAD'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SentryWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@sentry/webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RELEASE_VERSION")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gitSha"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js文件中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Sentry "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@sentry/browser'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Integrations "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@sentry/integrations'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    release"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RELEASE_VERSION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dsn"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://XXXX@werr.wecash.net/9'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    integrations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integrations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        attachProps"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"接入source-maps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接入source-maps"}},[t._v("#")]),t._v(" 接入Source Maps")]),t._v(" "),n("h5",{attrs:{id:"安装依赖-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖-2"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),n("div",{staticClass:"language-javscript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yarn add @sentry/webpack-plugin --dev\n")])])]),n("h5",{attrs:{id:"_1、vue-config-js配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、vue-config-js配置"}},[t._v("#")]),t._v(" 1、vue.config.js配置")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.sj文件中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        release"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RELEASE_VERSION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        include"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist/js/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        urlPrefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/js/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ignore"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue.config.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        configFile"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.sentryclirc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        deleteAfterCompile"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h5",{attrs:{id:"_2、建立-sentryclirc文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、建立-sentryclirc文件"}},[t._v("#")]),t._v(" 2、建立.sentryclirc文件")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("defaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nurl"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/werr.XXX.net/")]),t._v("\nproject"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("capital"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("platform"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("admin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fronten\norg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FE")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntoken"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXXX")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlevel"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug\n")])])]),n("h5",{attrs:{id:"在sentry网站中获取的配置参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在sentry网站中获取的配置参数"}},[t._v("#")]),t._v(" 在sentry网站中获取的配置参数")]),t._v(" "),n("p",[n("img",{attrs:{src:a(252),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(178),alt:"An image"}})]),t._v(" "),n("h3",{attrs:{id:"项目正常接入sentry后，踩到的坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目正常接入sentry后，踩到的坑"}},[t._v("#")]),t._v(" 项目正常接入sentry后，踩到的坑")]),t._v(" "),n("h5",{attrs:{id:"一、项目在jerkins上部署失败"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、项目在jerkins上部署失败"}},[t._v("#")]),t._v(" 一、项目在jerkins上部署失败")]),t._v(" "),n("p",[n("img",{attrs:{src:a(253),alt:"An image"}}),t._v("\n是服务器内存不足，找运维解决了。")]),t._v(" "),n("h5",{attrs:{id:"一、项目报错全组人都能收到邮件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、项目报错全组人都能收到邮件"}},[t._v("#")]),t._v(" 一、项目报错全组人都能收到邮件")]),t._v(" "),n("h6",{attrs:{id:"解决办法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),n("p",[n("img",{attrs:{src:a(254),alt:"An image"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);