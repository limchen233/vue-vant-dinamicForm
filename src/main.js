import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Cell, CellGroup, Field, Form, Toast, Icon, Uploader, DatetimePicker, Checkbox, CheckboxGroup, RadioGroup, Radio, Area, Popup } from 'vant'

// 引入vant本地字体文件
import 'vant/lib/icon/local.css'

Vue.config.productionTip = false
Vue.use(Button).use(Cell).use(CellGroup).use(Field).use(Form).use(Toast).use(Icon).use(Uploader).use(DatetimePicker).use(Checkbox).use(CheckboxGroup).use(RadioGroup).use(Radio).use(Area).use(Popup)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
