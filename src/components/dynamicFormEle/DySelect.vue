<template>
	<div>
		<!-- vant没有专门的下拉选择框，所以用输入框、弹出框、选择器模拟 -->
		<van-field
			readonly
			clickable
			:label="label"
			:value="item.showVal"
			:disabled="item.disabled"
			:rules="[{ required: item.required, message: '请选择' }]"
			:required="item.required"
			right-icon="arrow-down"
			placeholder="请选择"
			@click="_click"
		></van-field>
		<van-popup v-model="showPicker" position="bottom">
			<van-picker
				show-toolbar
				:default-index="selectedIndex"
				:columns="columns"
				@confirm="onConfirm"
				@cancel="onCancel"
			></van-picker>
		</van-popup>
	</div>
</template>
<script>
import DyBase from './DyBase'
export default {
	name: 'DySelect',
	extends: DyBase,
	props: {
		item: {
			required: true
		}
	},
	data () {
		return {
			columns: [],
			showPicker: false,
			selectedIndex: 0
		}
	},
	mounted () {
		console.log(this.$props.item)
		// 初始化下拉选的值
		this.initValue.forEach((item, index) => {
			// 添加数据
			this.columns.push(item.value)
			// 根据返回的value值回显数据
			if (item.key === this.$props.item.value) {
				// 确定索引
				this.selectedIndex = index
				// 中文名称
				this.$props.item.showVal = item.value
			}
		})
	},
	methods: {
		// 点击输入框弹出popup
		_click () {
			this.showPicker = !this.showPicker
		},

		// 确认选项
		onConfirm (value, index) {
			this.showPicker = false
			// 根据点击的数据索引找到要绑定的key
			this.$props.item.value = this.initValue[index].key
			// 点击时显示的中文名称
			this.$props.item.showVal = value
		},

		// 关闭popup
		onCancel () {
			this.showPicker = false
		}
	}
}
</script>
<style lang="scss">
</style>
