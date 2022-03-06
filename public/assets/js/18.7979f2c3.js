(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{576:function(s,t,a){"use strict";a.r(t);var r=a(13),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Docker是一个容器化平台，它以容器的形式将您的应用程序及其所有依赖项打包在一起，以确保您的应用程序在任何环境中无缝运行。")]),s._v(" "),a("p",[a("strong",[s._v("虚拟机")]),s._v("更擅长于"),a("strong",[s._v("彻底隔离整个运行环境")]),s._v("。例如，云服务提供商通常采用虚拟机技术隔离不同的用户。")]),s._v(" "),a("p",[s._v("而"),a("strong",[s._v("Docker")]),s._v("通常用于"),a("strong",[s._v("隔离不同的应用")]),s._v(" ，例如前端，后端以及数据库。")]),s._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" "),a("strong",[s._v("基本概念")])]),s._v(" "),a("ul",[a("li",[s._v("Docker的工作原理：")])]),s._v(" "),a("p",[s._v("镜像（Image）、容器（Container）、仓库（Repository）")]),s._v(" "),a("ul",[a("li",[s._v("镜像构建：-- "),a("strong",[s._v("分层存储")])])]),s._v(" "),a("blockquote",[a("p",[s._v("一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。")]),s._v(" "),a("p",[s._v("删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("镜像是静态的类，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等 。\n容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的命名空间。")]),s._v(" "),a("p",[s._v("容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用数据卷（Volume）、或者绑定宿主目录；")])]),s._v(" "),a("li",[a("p",[s._v("仓库：把构建后的镜像上传到服务器")])])]),s._v(" "),a("blockquote",[a("p",[s._v("每个容器都在自己的命名空间中运行，但使用与所有其他容器完全相同的内核。\n发生隔离是因为内核知道分配给进程的命名空间，\n并且在API调用期间确保进程只能访问其自己的命名空间中的资源。")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Docker工作流程")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" docker build "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" docker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" docker exec "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Dockerfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Image "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Container "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Bash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Dockerfile")])]),s._v(" "),a("p",[s._v("一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明")]),s._v(" "),a("p",[s._v("FROM、ENV、RUN、ADD、CMD、EXPOSE（容器对外映射的本地端口）、")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基础源镜像   docker images -a |grep nginx  查看nginx的版本对应修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.19")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TZ")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Shanghai\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RUN")]),s._v(" ln "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("snf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zoneinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TZ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localtime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" echo $"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TZ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("timezone\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ADD")]),s._v(" dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -R  “递归”放开权限！ 否则可能出现404 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RUN")]),s._v(" chmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  CMD -- 启动容器时指定了运行的命令，则会覆盖掉CMD指定的命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// daemon off是指nginx服务不运行在后端，即后台进程 守护进程，而是在前台运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CMD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-g"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Docker Compose")])]),s._v(" "),a("p",[s._v("https://blog.csdn.net/weixin_47153988/article/details/108739622")]),s._v(" "),a("p",[s._v("实现对Docker容器集群的快速编排，需要多个容器相互配合来完成某项任务的情况，例如一个Web项目，还需要后端的数据库服务容器、负载均衡容器等。\nCompose通过docker-compose.yml模板文件来定义一组相关联的应用容器为一个项目")]),s._v(" "),a("ul",[a("li",[s._v("使用 Dockerfile 定义应用程序的环境。")]),s._v(" "),a("li",[s._v("使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行。")]),s._v(" "),a("li",[s._v("最后，执行 docker-compose up 命令来启动并运行整个应用程序。")])]),s._v(" "),a("blockquote",[a("p",[s._v("build dockerfile context\t指定Dockerfile文件名构建镜像上下文路径\nimage\t\t\t\t指定镜像\ncommand\t\t执行命令，覆盖默认命令\ncontainer name\t\t指定容器名称，由于容器名称是唯一的，如果指定自定义名称，则无法scale\t\ndeploy\t\t\t\t指定部署和运行服务相关配置，只能在swarm模式适用\nenvironment\t添加环境变量\nnetworks\t\t\t加入网络\nports\t\t\t\t\t暴露容器端口，与-p相同，但端口不能低于60\nvolumes\t\t\t挂载宿主机路径或命令卷\nrestart\t\t\t\t重启策略，默认no,always,no-failure,unless-stoped\nhostname\t\t\t容器主机名")])]),s._v(" "),a("p",[s._v("Docker-Compose标准模板文件应该包含version、services、networks 三大部分")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("// vim docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose.yml\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./nginx\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dockerfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Dockerfile\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 1111"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 2222"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" web\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./wwwroot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/nginx/html\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tomcat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tomcat\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./tomcat\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dockerfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Dockerfile\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9527"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" web\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./ROOT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/tomcat9/webapps/ROOT\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[a("code",[s._v("docker-compose -f docker-compose.yml up -d '启动docker-compose'")])]),s._v(" "),a("ul",[a("li",[s._v("Docker Compose常用命令")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("build")]),s._v(" "),a("th",[s._v("重新构建服务")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ps")]),s._v(" "),a("td",[s._v("列出容器")])]),s._v(" "),a("tr",[a("td",[s._v("up")]),s._v(" "),a("td",[s._v("创建和启动容器")])]),s._v(" "),a("tr",[a("td",[s._v("exec")]),s._v(" "),a("td",[s._v("在容器里面执行命令")])]),s._v(" "),a("tr",[a("td",[s._v("scale")]),s._v(" "),a("td",[s._v("指定一个服务容器启动数量")])]),s._v(" "),a("tr",[a("td",[s._v("top")]),s._v(" "),a("td",[s._v("显示容器进程")])]),s._v(" "),a("tr",[a("td",[s._v("logs")]),s._v(" "),a("td",[s._v("查看容器输出")])]),s._v(" "),a("tr",[a("td",[s._v("down")]),s._v(" "),a("td",[s._v("删除容器、网络、数据卷和镜像")])]),s._v(" "),a("tr",[a("td",[s._v("stop/start/restart")]),s._v(" "),a("td",[s._v("停止/启动/重启服务")])])])]),s._v(" "),a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("基本命令")])]),s._v(" "),a("ul",[a("li",[s._v("打镜像")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("docker build "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t  hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\ndocker images "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("grep my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web\n\ndocker push hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果打镜像和部署的服务器不在同一台  或者  yaml文件指定nodeName，并不是打镜像的这台服务器 ")]),s._v("\ndocker save hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gzip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\nscp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz   apps@"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.222")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".102")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fuzuxian\n\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\ndocker images "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("grep my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web\ndocker push hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dw"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docker tag hub.dw/library/my-vue-web:v1.0   hub.dw/library/my-vue-web:v1.1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("容器生命周期管理：run、start/stop/restart、kill、rm、pause/unpause、create、exec")])]),s._v(" "),a("li",[a("p",[s._v("容器操作：ps、inspect、top、attach、events、logs、wait、export、port")])]),s._v(" "),a("li",[a("p",[s._v("容器rootfs命令：commit、cp、diff")])]),s._v(" "),a("li",[a("p",[s._v("镜像仓库：login、pull、push、search")])]),s._v(" "),a("li",[a("p",[s._v("本地镜像管理：images、rmi、tag、build、history、save、load、import")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docker run ：创建一个新的容器并运行一个命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以后台模式启动，并将容器命名为mynginx")]),s._v("\ndocker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("name mynginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("latest\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -p: 指定端口映射，格式为：主机(宿主)端口:容器端口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docker commit :从容器创建一个新的镜像。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将容器a404c6c174a2 保存为新的镜像,并添加提交人信息和说明信息。")]),s._v("\ndocker commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my apache"')]),s._v(" a404c6c174a2  mymysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("v1 \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docker cp :用于容器与主机之间的数据拷贝。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将主机/www/runoob目录拷贝到容器96f7f14e99ab的/www目录下。")]),s._v("\ndocker cp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("runoob 96f7f14e99ab"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("www")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/-HpOuI2Y-YMjK2IBnZo0CQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章1111"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰教程docker"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://www.cocoachina.com/articles/28320",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考222"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1648265135539345290&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows下通过DockerToolbox安装Docker"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker hub官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);