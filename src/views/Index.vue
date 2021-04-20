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
				{ type: 'text', label: '文本' },
				{ type: 'number', label: '数字' }
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
		width: 30px;
		height: 30px;
	}
}
</style>
