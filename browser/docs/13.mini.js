(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(t,s,a){"use strict";a.r(s);var e=a(211),r=a(146);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return r[t]}))}(n);var l=a(10),v=Object(l.a)(r.default,e.a,e.b,!1,null,null,null);s.default=v.exports},146:function(t,s,a){"use strict";a.r(s);var e=a(147),r=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s.default=r.a},147:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{formModel:{parentId:""},treeParams:{path:"cbaseinfo/g-statistic-categorys",serviceId:"node-cbaseinfo-service",parentId:-1}}},methods:{_getCurrentNode:function(t){console.log(t)},renderContent:function(t,s){var a=s.node;s.data,s.store;return t("span",{class:"custom-tree-node"},[t("span",[t("el-button",{attrs:{size:"mini",type:"text"}},[a.label]),t("el-button",{attrs:{size:"mini",type:"text"}},["Delete"])])])}}};s.default=e},211:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return r}));var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h4",{attrs:{id:"commontreepanel-%E9%80%9A%E7%94%A8%E6%A0%91%E9%9D%A2%E6%9D%BF%E9%80%89%E6%8B%A9%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commontreepanel-%E9%80%9A%E7%94%A8%E6%A0%91%E9%9D%A2%E6%9D%BF%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("#")]),t._v(" CommonTreePanel 通用树面板选择器")]),t._v(" "),a("blockquote",[a("p",[t._v("标签：  "),a("code",{pre:!0},[t._v("<yl-common-tree-panel></yl-common-tree-panel>")])])]),t._v(" "),a("p",[a("strong",[t._v("功能：")]),t._v("  通用树面板选择器组件")]),t._v(" "),a("p",[a("strong",[t._v("代码示例：")])]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-common-tree-panel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"selectTree"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"formModel.parentId"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rootName")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"根节点"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"220px"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":queryParams")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"treeParams"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":renderContent")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"renderContent"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@getCurrentNode")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_getCurrentNode"')]),t._v("\n    />")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n   data(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("formModel")]),t._v(":{\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("parentId")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v("\n       },\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("treeParams")]),t._v(": {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("path")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'cbaseinfo/g-statistic-categorys'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//apiurl")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("serviceId")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'node-cbaseinfo-service'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//serviceId")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("parentId")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//根节点")]),t._v("\n      },\n     }\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n     _getCurrentNode(node){\n       "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(node)\n     },\n     renderContent(h, { node, data, store }) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" (\n        "),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"custom-tree-node"')]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mini"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" >")]),t._v("{node.label}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mini"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" >")]),t._v("Delete"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")])]),t._v(");\n      },\n    },\n }\n ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"css"')]),t._v(" >")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n\n")])]),t._v(" "),a("p",[a("strong",[t._v("属性")])]),t._v(" "),a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("面板标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v('"逐步加载树"')]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("240px")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("rootName")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("根节点名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("根节点")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("queryParams")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询参数")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("{ path: '', serviceId: '', parentId: -1,orgId: ''}")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("renderContent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("文本渲染")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])])])]),t._v(" "),a("p",[a("strong",[t._v("事件")])]),t._v(" "),a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("事件")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("getCurrentNode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("点击节点时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("当前节点对象")])])])]),t._v(" "),a("hr")])}]}}]);
//# sourceMappingURL=13.mini.js.map