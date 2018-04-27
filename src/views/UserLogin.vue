<template>
  <div class="z-content">
    <div class="address-edit-wrap">
      <x-input v-model="username" title="用户名" name="username" placeholder="请输入用户名" is-type="china-name"></x-input>
      <x-input v-model="password" title="密码" name="password" type="password" placeholder="请输入密码"></x-input>
      <x-input v-model="kaptcha" title="验证码">
        <img @click="refreshKaptcha" slot="right-full-height" :src="kaptchaUrl">
      </x-input>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="login" type="primary">登录</x-button>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from 'vux'
import { db } from 'lib/db'
export default {
  components: {
    XInput,
    XButton
  },
  data () {
    return {
      username: 'demo',
      password: 'demo',
      kaptcha: 'demo',
      kaptchaUrl: 'http://aaebike.com:9090/kaptcha/image'
    }
  },
  methods: {
    async login () {
      const parms = {
        username: this.username,
        password: this.password,
        kaptcha: this.kaptcha
      }
      const result = await this.post('/api/user/login', parms)
      if (result.success) {
        this.$router.go(-1)
        alert('登录成功')
      }
    },
    // 刷新验证码
    refreshKaptcha () {
      this.kaptchaUrl = this.kaptchaUrl + '?'
    }

  },
  mounted () {

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
