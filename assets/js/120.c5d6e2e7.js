(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{362:function(e,a,t){"use strict";t.r(a);var n=t(0),c=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("此 FAQ 来自 "),t("a",{attrs:{href:"https://github.com/apache/skywalking/issues/2652",target:"_blank",rel:"noopener noreferrer"}},[e._v("社区讨论和反馈"),t("OutboundLink")],1),e._v(".\n该用户在 WebSphere 7.0.0.11, JDK 1.8_20160719 和 JDK 1.7.0_20150407 上安装 SkyWalking Java 探针,\n然后出现了以下错误日志")]),e._v(" "),e._m(1),t("p",[e._v("该问题已经确定是 WebSphere 上的访问权限导致.\n可以按如下解决")]),e._v(" "),e._m(2)])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"在-websphere-上安装-agent-时-抛出异常-illegalstateexception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-websphere-上安装-agent-时-抛出异常-illegalstateexception"}},[this._v("#")]),this._v(" 在 WebSphere 上安装 Agent 时, 抛出异常 IllegalStateException")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("WARN 2019-05-09 17:01:35:905 SkywalkingAgent-1-GRPCChannelManager-0 ProtectiveShieldMatcher : Byte-buddy occurs exception when match type.\njava.lang.IllegalStateException: Cannot resolve type description for java.security.PrivilegedAction\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.pool.TypePool$Resolution$Illegal.resolve(TypePool.java:144)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.pool.TypePool$Default$WithLazyResolution$LazyTypeDescription.delegate(TypePool.java:1392)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.description.type.TypeDescription$AbstractBase$OfSimpleType$WithDelegation.getInterfaces(TypeDescription.java:8016)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.description.type.TypeDescription$Generic$OfNonGenericType.getInterfaces(TypeDescription.java:3621)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.HasSuperTypeMatcher.hasInterface(HasSuperTypeMatcher.java:53)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.HasSuperTypeMatcher.hasInterface(HasSuperTypeMatcher.java:54)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.HasSuperTypeMatcher.matches(HasSuperTypeMatcher.java:38)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.HasSuperTypeMatcher.matches(HasSuperTypeMatcher.java:15)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.ElementMatcher$Junction$Conjunction.matches(ElementMatcher.java:107)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.ElementMatcher$Junction$Disjunction.matches(ElementMatcher.java:147)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.ElementMatcher$Junction$Disjunction.matches(ElementMatcher.java:147)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.ElementMatcher$Junction$Disjunction.matches(ElementMatcher.java:147)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.ElementMatcher$Junction$Disjunction.matches(ElementMatcher.java:147)\nat org.apache.skywalking.apm.dependencies.net.bytebuddy.matcher.ElementMatcher$Junction$Disjunction.matches(ElementMatcher.java:147)\n...\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("ol",[a("li",[this._v("设置探针的 owner 为 WebSphere 的 owner")]),this._v(" "),a("li",[this._v("在文件 "),a("code",[this._v("server.policy")]),this._v(" 中添加 "),a("code",[this._v('grant codeBase "file:${agent_dir}/-" { permission java.security.AllPermission; };')]),this._v('".')])])}],!1,null,null,null);a.default=c.exports}}]);