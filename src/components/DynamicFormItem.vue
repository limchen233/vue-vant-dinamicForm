<script type="text/jsx">
import DyText from './dynamicFormEle/DyText'
import DyRadio from './dynamicFormEle/DyRadio'
import DySelect from './dynamicFormEle/DySelect'
import DyCheckbox from './dynamicFormEle/DyCheckbox'
import DyDate from './dynamicFormEle/DyDate'
import DyUpload from './dynamicFormEle/DyUpload'
export default {
	name: 'DynamicFormItem',
	components: {
		DyText, DyRadio, DySelect, DyCheckbox, DyDate, DyUpload
	},
	props: {
		item: {
			required: true
		}
	},
	methods: {},
	// eslint-disable-next-line vue/require-render-return
	render () {
		const item = this.$props.item
		// 进行类型判断,类型字段自己定义
		if (item.type === 'text') {
			return (<DyText item={item}></DyText>)
		} else if (item.type === 'number') {
			return (<DyText item={item}></DyText>)
		} else if (item.type === 'phone') {
			return (<DyText item={item}></DyText>)
		} else if (item.type === 'email') {
			return (<DyText item={item}></DyText>)
		} else if (item.type === 'radio') {
			return (<DyRadio item={item}></DyRadio>)
		} else if (item.type === 'select') {
			return (<DySelect item={item}></DySelect>)
		} else if (item.type === 'checkbox') {
			return (<DyCheckbox item={item}></DyCheckbox>)
		} else if (item.type === 'date') {
			return (<DyDate item={item}></DyDate>)
		} else if (item.type === 'upload') {
			return (<DyUpload item={item}></DyUpload>)
		} else {
			return (<div style="font-size:16px;color:red;">未识别的组件类型：【{item.type}】</div>)
		}
	}
}
</script>
