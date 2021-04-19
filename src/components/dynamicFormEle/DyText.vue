<template>
  <div>
    <van-field v-model="text" label="文本" placeholder="请输入文本" clearable name="text"
               :rules="[{ required: true, message: '此项不能为空' }]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'DyText',
      text: ''
    }
  },
  methods: {}
}
</script>>
<style lang="scss">
</style>
