<template>
	<div>
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
