(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{290:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"metrics-exporter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metrics-exporter"}},[e._v("#")]),e._v(" Metrics Exporter")]),e._v(" "),r("p",[e._v("Skywalking提供基本的，并且最为重要的度量聚合、告警和分析。\n在事件使用时，人们可能希望将数据转发到第三方系统，以便进行更深入的分析或其它任何操作。\n"),r("strong",[e._v("Metrics Exporter")]),e._v("使之成为可能。")]),e._v(" "),r("p",[e._v("Metrics Exporter是一个独立的模块，您需要手动激活它。")]),e._v(" "),r("p",[e._v("目前，我们提供下面这些exporter")]),e._v(" "),r("ol",[r("li",[e._v("gRPC exporter")])]),e._v(" "),r("h2",{attrs:{id:"grpc-exporter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grpc-exporter"}},[e._v("#")]),e._v(" gRPC exporter")]),e._v(" "),r("p",[e._v("gRPC exporter使用SkyWalking原生的exporter服务定义。下面是proto的定义。")]),e._v(" "),r("div",{staticClass:"language-proto extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("service MetricExportService {\n    rpc export (stream ExportMetricValue) returns (ExportResponse) {\n    }\n\n    rpc subscription (SubscriptionReq) returns (SubscriptionsResp) {\n    }\n}\n\nmessage ExportMetricValue {\n    string metricName = 1;\n    string entityName = 2;\n    string entityId = 3;\n    ValueType type = 4;\n    int64 timeBucket = 5;\n    int64 longValue = 6;\n    double doubleValue = 7;\n}\n\nmessage SubscriptionsResp {\n    repeated string metricNames = 1;\n}\n\nenum ValueType {\n    LONG = 0;\n    DOUBLE = 1;\n}\n\nmessage SubscriptionReq {\n\n}\n\nmessage ExportResponse {\n}\n")])])]),r("p",[e._v("要激活这个exporter，你需要把下面的加到你的"),r("code",[e._v("application.yml")]),e._v("文件中。")]),e._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("exporter")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("grpc")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("targetHost")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 127.0.0.1\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("targetPort")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("9870")]),e._v("\n")])])]),r("ul",[r("li",[r("code",[e._v("targetHost")]),e._v(":"),r("code",[e._v("targetPort")]),e._v("是期望的目标服务器地址。你可以设置gRPC服务来接收数据。")]),e._v(" "),r("li",[e._v("目标gRPC服务需要备份，否则，OAP会启动失败。")])]),e._v(" "),r("h2",{attrs:{id:"为目标exporter服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为目标exporter服务"}},[e._v("#")]),e._v(" 为目标exporter服务")]),e._v(" "),r("h3",{attrs:{id:"订阅实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#订阅实现"}},[e._v("#")]),e._v(" 订阅实现")]),e._v(" "),r("p",[e._v("返回预期的度量名称列表，所有名称都必须与OAL脚本定义匹配。如果要导出所有度量值，则返回空列表。")]),e._v(" "),r("h3",{attrs:{id:"导出实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导出实现"}},[e._v("#")]),e._v(" 导出实现")]),e._v(" "),r("p",[e._v("流服务，所有订阅的度量将根据OAP核心计划发送到这里。另外，如果OAP部署为集群，此方法同时被调用。对于度量值，您需要根据"),r("code",[e._v("#type")]),e._v(" 选择"),r("code",[e._v("#longValue")]),e._v("或"),r("code",[e._v("#doubleValue")]),e._v("。")])])}],!1,null,null,null);t.default=a.exports}}]);