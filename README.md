# vue-vant-dynamic-form

介绍：

基于`vue、vant`的移动端动态表单

参数格式：

```javascript
{
    type: '', // 类型
    id:'',
	  label: '',
    placeholder: '',
    disabled: false,
    required: false,
    methodOfGetInitVal: '', // 获取初始值的方式，默认是空，正常获取；function：通过方法获取；request：通过ajax请求获取
    initValue: [ // 单选、多选、下拉框等的初始值
		  { key: '', name:'', value: '测试一' },
			{ key: '', name:'', value: '测试二' },
			{ key: '', name:'', value: '测试三' }
		],
	  value: '', // 后台返回的值
    showVal: '', // 多选、下拉框等默认显示的中文值
    options:'' // 其它配置，类型自定
    
}
```



## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
