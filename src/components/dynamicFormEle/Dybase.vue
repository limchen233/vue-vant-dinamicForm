<template>
	<div></div>
</template>
<script>
import { toJson } from '../../utils/utils'
export default {
	name: 'DyBase',
	props: ['item'],
	data () {
		return {
			initValue: this.initData(),
			value: this.$props.item.value,
			showVal: this.$props.item.showVal
		}
	},
	computed: {
		label: function () {
			let name = this.$props.item.label
			if (name.indexOf('(') > 0) {
				name = name.substr(0, name.indexOf('('))
			} else if (name.indexOf('（') > 0) {
				name = name.substr(0, name.indexOf('（'))
			}
			return name
		},

		disabled: function () {
			if (this.$props.item.disabled) { // disabled存在但值是字符串'0'时返回false
				if (this.$props.item.disabled === '0') {
					return false
				}
			} else { // disabled为空时返回false
				return false
			}
			return true
		},

		required: function () {
			if (this.$props.item.required) {
				if (this.$props.item.required === '0') {
					return false
				}
			} else {
				return false
			}
			return true
		}
	},
	methods: {
		initData () {
			let initValue
			if (this.$props.item.methodOfGetInitVal === 'request') { // 通过ajax请求获取初始值
				initValue = toJson(this.$props.item.initValue)
			} else if (this.$props.item.methodOfGetInitVal === 'function') { // 通过函数获取初始值
				initValue = this.$props.item.initValue
			} else {
				initValue = toJson(this.$props.item.initValue)
			}

			return initValue
		}
	}
}
</script>
<style lang="scss">
</style>
