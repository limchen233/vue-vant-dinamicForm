<template>
	<div>
		<van-cell :title="label" class="labelStyle">
			<van-uploader
				class="imgUploader"
				multiple
				v-model="imgList"
				:after-read="afterRead"
			></van-uploader>
		</van-cell>
	</div>
</template>
<script>
import DyBase from './DyBase'
export default {
	name: 'DyUpload',
	extends: DyBase,
	data () {
		return {
			imgList: [],
			refProp: this.$props.item
		}
	},
	methods: {
		// 文件上传完毕后会触发 after-read 回调函数
		afterRead (file) { }
	}
}
</script>
