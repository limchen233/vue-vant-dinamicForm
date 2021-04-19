<template>
  <div class="mainPage">
    <img alt="Vue logo" src="../assets/logo.png">
    <DyText />
  </div>
</template>

<script>
// @ is an alias to /src
import DyText from '@/components/dynamicFormEle/DyText'

export default {
  name: 'Index',
  components: {
    DyText
  },
  methods: {}
}
</script>
<style lang="scss">
.mainPage {
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
