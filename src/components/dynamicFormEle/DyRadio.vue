<template>
	<div>
		<van-cell :title="item.label" style="text-align: left">
			<van-radio-group v-model="item.value" direction="horizontal">
				<van-radio
					style="margin: 0 0.18rem 0.25rem 0"
					v-for="option of initValue"
					:key="option.key"
					:shape="item.shape"
					:disabled="disabled"
					:name="option.key"
					:rules="[{ required: item.required, message: '请选择' }]"
					:required="item.required"
				>
					{{ option.value }}
				</van-radio>
			</van-radio-group>
		</van-cell>
	</div>
</template>
<script>
import DyBase from './DyBase'
export default {
	name: 'DyRadio',
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
