<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>我就像那一只林中的小鸟</li>
      <li>努力挣脱冲向蓝天怀抱</li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style lang='less' scoped>
.wrapper {
  position: relative;
  height: 200px;
  z-index: 1;
  background: yellow;
  overflow-y: hidden;
}
.content {
  li {
    background: red;
    height: 300px;
  }
}
</style>
