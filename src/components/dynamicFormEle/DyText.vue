<template>
	<div>
		<van-field
			v-if="item.type === 'text'"
			clearable
			:label="item.label"
			name="text"
			:placeholder="item.placeholder"
			v-model="item.value"
			:disabled="item.disabled"
			:rules="[{ required: item.required, message: '此项不能为空' }]"
		/>
		<van-field
			v-if="item.type === 'number'"
			type="number"
			:label="item.label"
			v-model="item.value"
			:placeholder="item.placeholder"
			:disabled="item.disabled"
			:required="item.required"
			:rules="[{ required: item.required, message: '请填写数字' }]"
			clearable
		/>
		<van-field
			v-if="item.type === 'phone'"
			type="tel"
			:label="item.label"
			v-model="item.value"
			:placeholder="item.placeholder"
			:disabled="item.disabled"
			clearable
			:required="item.required"
			:rules="[
				{ required: item.required, message: '请填写您的手机号码！' },
				{ pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' }
			]"
		></van-field>
		<van-field
			v-if="item.type === 'email'"
			type="tel"
			:label="item.label"
			v-model="item.value"
			:placeholder="item.placeholder"
			:disabled="item.disabled"
			clearable
			:required="item.required"
			:rules="[
				{ required: item.required, message: '请填写您的邮箱！' },
				{
					pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
					message: '邮箱格式错误！'
				}
			]"
		></van-field>
	</div>
</template>
<script>
export default {
	props: {
		item: {
			required: true
		}
	},
	data () {
		return {
			name: 'DyText'
		}
	},
	methods: {
	}
}
</script>>
<style lang="scss">
.van-cell {
	border-bottom: 1px solid #ebedf0;
}
.van-field__label {
	margin-right: 0 !important;
	width: 5em !important;
}
</style>
