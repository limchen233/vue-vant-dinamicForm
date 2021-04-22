<template>
	<div class="mainPage">
		<img alt="Vue logo" src="../assets/logo.png" />
		<DynamicFormPart :items="formItems" />
		<div class="formSubmitBtn">
			<van-button round type="info" native-type="submit">提&emsp;交</van-button>
		</div>
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
				{ type: 'phone', label: '联系方式', placeholder: '请输入手机号码' },
				{ type: 'email', label: 'Email', placeholder: '请输入邮箱地址' },
				{
					type: 'radio',
					label: '单选按钮',
					initValue: [
						{ key: '0', name: '0', value: '否' },
						{ key: '1', name: '1', value: '是' }
					],
					value: ''
				},
				{
					type: 'select',
					label: '选择城市',
					initValue: [
						{ key: '0', value: '北京' },
						{ key: '1', value: '上海' },
						{ key: '2', value: '广州' }
					],
					showVal: '',
					value: ''
				},
				{
					type: 'checkbox',
					label: '多选框',
					initValue: [
						{ key: '0', value: '测试一' },
						{ key: '1', value: '测试二' },
						{ key: '2', value: '测试三' }
					],
					value: []
				},
				{ type: 'date', label: '请选择日期', placeholder: '请选择日期', value: '' }
			]
		}
	},
	methods: {}
}
</script>
<style lang="scss">
.mainPage {
	height: 100vh;
	padding: 5px 10px;
	position: relative;
	img {
		width: 5rem;
		height: 5rem;
		transform: scale(0.8);
	}
	.formSubmitBtn {
		position: absolute;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
	}
	.van-button--info {
		width: 300px;
	}
}
</style>
