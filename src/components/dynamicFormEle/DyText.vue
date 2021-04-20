<template>
	<div>
		<van-field
			:rules="[{ required: true, message: '此项不能为空' }]"
			clearable
			label="文本"
			name="text"
			placeholder="请输入文本"
			v-model="text"
		/>
	</div>
</template>
<script>
export default {
	data () {
		return {
			name: 'DyText'
		}
	},
	methods: {}
}
</script>>
<style lang="scss"></style>
