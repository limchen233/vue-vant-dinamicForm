import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	Button,
	Cell,
	CellGroup,
	Field,
	Form,
	Toast,
	Icon,
	Uploader,
	Tabbar,
	TabbarItem,
	DatetimePicker,
	Checkbox,
	CheckboxGroup,
	RadioGroup,
	Radio,
	Area,
	Popup,
	Overlay,
	Picker,
	Tab,
	Tabs,
	Col,
	Row
} from 'vant'

// 引入vant样式文件
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Button)
	.use(Cell)
	.use(CellGroup)
	.use(Field)
	.use(Form)
	.use(Toast)
	.use(Icon)
	.use(Uploader)
	.use(Tabbar)
	.use(TabbarItem)
	.use(DatetimePicker)
	.use(Checkbox)
	.use(CheckboxGroup)
	.use(RadioGroup)
	.use(Radio)
	.use(Area)
	.use(Popup)
	.use(Overlay)
	.use(Picker)
	.use(Tab)
	.use(Tabs)
	.use(Col)
	.use(Row)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
