<template>
	<div>
		<van-field
			readonly
			clickable
			:label="label"
			:disabled="item.disabled"
			v-model="item.value"
			:rules="[{ required: item.required, message: '请选择日期' }]"
			:required="item.required"
			:placeholder="item.placeholder || '点击选择日期'"
			@click="_click"
			right-icon="calender-o"
		>
			<template #right-icon>
				<van-icon name="calender-o" size="1.2rem"></van-icon>
			</template>
		</van-field>
		<van-popup v-model="showDate" position="bottom">
			<van-datetime-picker
				v-model="currentDate"
				type="date"
				@confirm="onConfirm"
				@cancel="showDate = false"
			></van-datetime-picker>
		</van-popup>
	</div>
</template>
<script>
import DyBase from './DyBase'
import { parseTime } from '../../utils/utils'
export default {
	name: 'DyDate',
	extends: DyBase,
	props: {
		item: {
			required: true
		}
	},
	data () {
		return {
			showDate: false,
			currentDate: new Date()
		}
	},
	mounted () {
		/* 默认显示当前日期 */
		/* if (this.$props.item.value === '') {
			this.$props.item.value = parseTime(this.currentDate,'{y}-{m}-{d}')
		} */
	},
	methods: {
		/* 点击输入框弹出日期选择器 */
		_click () {
			this.showDate = true
		},

		/* 确认日期 */
		onConfirm (value) {
			this.showDate = false
			// 传入选择的日期和想要的时间样式
			this.$props.item.value = parseTime(value, '{y}-{m}-{d}')
		}
	}
}
</script>
