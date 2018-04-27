<template>
  <div class="z-content">
    <div class="address-edit-wrap">
      <x-input title="用户名" name="username" placeholder="请输入用户名" is-type="china-name"></x-input>
      <x-input title="密码" name="password" type="password" placeholder="请输入密码"></x-input>
      <x-input title="验证码">
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="style = 'color:red;'" type="primary">登录</x-button>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from 'vux'
export default {
  components: {
    XInput,
    XButton
  }

}
</script>
<style lang="less">
.address-edit-wrap {
  background-color: #fff;
  color: #404040;
}
.address-edit-wrap .weui-label {
  color: #404040;
}
.address-edit-wrap textarea {
  font-size: 15px;
  color: #404040;
}
.address-edit-btn {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  display: block;
  width: 100%;
  background-color: #ed7a5d;
  color: #fff;
  text-align: center;
}
</style>
