/**
 * 扩展 VuePress 应用
 */
import Vue from "vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

// 使用异步函数也是可以的
export default ({
	Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
	// 全局注入组件
	Vue.use(ElementUI)
}
