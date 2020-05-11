(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{336:function(t,e,_){"use strict";_.r(e);var s=_(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("在通过Internet传输数据时，传输层安全（TLS）是一种非常常见的安全方式\n用户可能会在一些场景下遇到这样的情形:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("开启 "),_("strong",[t._v("服务直连")]),t._v(" 功能, 详情参考 "),_("router-link",{attrs:{to:"./Direct-uplink-CN.html"}},[t._v("文档")]),t._v(".")],1),t._v(" "),_("p",[t._v("由于通过公网直接上报数据，由于安全问题，名称(naming)服务机制并不适合这种情况.所以我们在HTTP服务的名称服务中不支持TLS。")]),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("5.0.0-beta +")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),_("p",[t._v("请使用其他安全方式确保不能访问  VPC 区域外的其他端口，例如防火墙，代理等。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"支持传输层安全tls-transport-layer-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持传输层安全tls-transport-layer-security"}},[this._v("#")]),this._v(" 支持传输层安全TLS(Transport Layer Security)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("被监控(部署探针)的应用中部署在同一个私有云(VPC)区域当中,与此同时, SkyWalking 的服务端部署在另一个私有云(VPC)区域中")]),this._v(" "),e("p",[this._v("在这种情况下,就非常有必要做一些传输安全认证.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置要求"}},[this._v("#")]),this._v(" 配置要求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"版本支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本支持"}},[this._v("#")]),this._v(" 版本支持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"认证模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证模式"}},[this._v("#")]),this._v(" 认证模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("仅仅支持 "),e("strong",[this._v("非双向认证")]),this._v(".")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("如果你比较熟悉如何生成 key 文件,可以使用 "),_("a",{attrs:{href:"../../tools/TLS/tls_key_generate.sh"}},[t._v("脚本")]),t._v(" .")]),t._v(" "),_("li",[t._v("在客户端使用 "),_("code",[t._v("ca.crt")]),t._v("文件")]),t._v(" "),_("li",[t._v("在服务端使用 "),_("code",[t._v("server.crt")]),t._v(" 和 "),_("code",[t._v("server.pem")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置并开启-tls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置并开启-tls"}},[this._v("#")]),this._v(" 配置并开启 TLS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"探针配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#探针配置"}},[this._v("#")]),this._v(" 探针配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("将 "),e("code",[this._v("ca.crt")]),this._v(" 放置在探针文件夹的 "),e("code",[this._v("/ca")]),this._v(" 文件夹中. 需要注意的是,发行的版本中不包含"),e("code",[this._v("/ca")]),this._v("文件夹,需要自行创建.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果探针检测到文件 "),e("code",[this._v("/ca/ca.crt")]),this._v(" ,会自动开启 TLS.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"collector-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collector-配置"}},[this._v("#")]),this._v(" Collector 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("agent_gRPC/gRPC")]),this._v(" 模块支持 TLS. 并且现在只有这个模块支持.")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("将"),_("code",[t._v("application.yml")]),t._v("中的 "),_("code",[t._v("ssl_cert_chain_file")]),t._v(" 和 "),_("code",[t._v("ssl_private_key_file")]),t._v("  配置打开.")]),t._v(" "),_("li",[_("code",[t._v("ssl_cert_chain_file")]),t._v(" 配置为 "),_("code",[t._v("server.crt")]),t._v("的绝对路径.")]),t._v(" "),_("li",[_("code",[t._v("ssl_private_key_file")]),t._v(" 配置为 "),_("code",[t._v("server.pem")]),t._v("的绝对路径.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"避免端口共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免端口共享"}},[this._v("#")]),this._v(" 避免端口共享")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("在大多数情况下，我们建议在"),_("code",[t._v("agent_gRPC / gRPC")]),t._v("和"),_("code",[t._v("remote / gRPC")]),t._v("模块中共享所有gRPC服务的端口。\n但是，当你在"),_("code",[t._v("agent_gRPC / gRPC")]),t._v("模块中打开TLS时不要这样做，原因就是无论是否开始TLS,你都无法监听端口。\n解决方案, 换一个端口 "),_("code",[t._v("remote/gRPC/port")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"其他端口监听如何操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他端口监听如何操作"}},[this._v("#")]),this._v(" 其他端口监听如何操作?")])}],!1,null,null,null);e.default=r.exports}}]);