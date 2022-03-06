(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{579:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"pod-健康检查-探针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-健康检查-探针"}},[s._v("#")]),s._v(" pod 健康检查--探针")]),s._v(" "),a("p",[a("strong",[s._v("livenessProbe(存活探针)")]),s._v("：容器是否正在运行，如果存活探测失败，则 kubelet 会杀死容器，并进行重启机制；")]),s._v(" "),a("p",[a("strong",[s._v("readinessProbe(就绪探针)")]),s._v("：判断容器是否准备好接受请求，如果就绪探测失败，端点控制器将从与 Pod 匹配的所有 Service 的端点中删除该 Pod 的 IP 地址")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Probe三种检查方法")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("exec：在容器内执行 指定一段命令。如果命令退出时 返回码为 0 则认为诊断成功。")]),s._v(" "),a("li",[s._v("tcpSocket：对指定端口上的容器的IP地址 进行TCP检查（三次握手）。如果端口打开，TCP 连接成功，则诊断被认为是成功的。")]),s._v(" "),a("li",[s._v("httpGet：对指定的端口和路径上的容器的 IP 地址执行 HTTP Get 请求。如果响应的状态码在 200~400 之间，则诊断被认为是成功的。监测的是 路径上的文件在不在。")])])])])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yaml 文件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("readinessProbe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("httpGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /healthcheck\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("initialDelaySeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("periodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("livenessProbe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("httpGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /healthcheck\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("initialDelaySeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("periodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default.conf")]),s._v("\nlocation ~ ^/healthcheck "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    access_log /var/log/nginx/health_access.log main;\n    default_type text/html;\n    return 200 'ok"),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!';")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue路由配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/healthcheck'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" resolve ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" require("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../views/404.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resolve)\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("在vue项目中，路由增加/healthcheck路径，随便指向一个页面；")])]),s._v(" "),a("li",[a("p",[s._v("nginx配置文件--路径如果包含/healthcheck，则返回状态码200；")])]),s._v(" "),a("li",[a("p",[s._v("k8s的yaml文件--存活探针和就绪探针，让其执行 HTTP Get请求/healthcheck。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);