<template>
	<div>
		<van-cell :title="item.label" class="labelStyle">
			<van-checkbox-group direction="horizontal" v-model="item.value">
				<van-checkbox
					v-for="option of initValue"
					style="margin: 0 0.18rem 0.3rem 0"
					:key="option.key"
					:shape="item.shape || 'square'"
					:icon="item.icon || ''"
					:checkedColor="item.checkedColor || '#1989fa'"
					:disabled="disabled"
					:name="option.key"
					:rules="[{ required: item.required, message: '请至少选择一项' }]"
					:required="item.required"
				>
					{{ option.value }}
				</van-checkbox>
			</van-checkbox-group>
		</van-cell>
	</div>
</template>
<script>
import DyBase from './DyBase'
export default {
	name: 'DyCheckbox',
	extends: DyBase,
	props: {
		item: {
			required: true
		}
	},
	data () {
		return {

		}
	}
}
</script>
