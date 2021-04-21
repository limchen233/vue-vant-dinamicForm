<template>
	<div class="mainPage">
		<img alt="Vue logo" src="../assets/logo.png" />
		<DynamicFormPart :items="formItems" />
	</div>
</template>

<script>
// @ is an alias to /src
import DynamicFormPart from '../components/DynamicFormPart'

export default {
	name: 'Index',
	components: {
		DynamicFormPart
	},
	data () {
		return {
			formItems: [
				{ type: 'text', label: '文本', placeholder: '请输入文本' },
				{ type: 'number', label: '数字', placeholder: '请输入数字' },
				{ type: 'number', label: '联系方式', placeholder: '请输入手机号码' },
				{ type: 'radio', label: '单选按钮', initValue: [{ key: 0, name: '0', value: '否' }, { key: 1, name: '1', value: '是' }], value: '' },
				{ type: 'select', label: '选择城市', initValue: [{ key: 0, value: '北京' }, { key: 0, value: '上海' }, { key: 0, value: '广州' }] },
				{ type: 'number', label: 'Email', placeholder: '请输入邮箱地址' }
			]
		}
	},
	methods: {}
}
</script>
<style lang="scss">
.mainPage {
	padding: 5px 10px;
	img {
		width: 5rem;
		height: 5rem;
		transform: scale(0.8);
	}
}
</style>
