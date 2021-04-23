<template>
	<div class="DynamicFormPart">
		<DynamicFormItem
			v-for="item in items"
			:item="item"
			:key="item.id"
		></DynamicFormItem>
	</div>
</template>
<script>
import DynamicFormItem from './DynamicFormItem'
export default {
	name: 'DynamicFormPart',
	components: {
		DynamicFormItem
	},
	props: {
		items: {
			required: true
		}
	}
}
</script>
<style lang="scss">
.DynamicFormPart {
	// height: calc(100% - 44px);
	overflow-y: auto;
}
</style>
