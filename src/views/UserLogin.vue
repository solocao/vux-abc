<template>
  <div class="z-content">
    <div class="address-edit-wrap">
      <x-input v-model="username" title="用户名" name="username" placeholder="请输入用户名" is-type="china-name">
        <span slot="label" class="slot-label-icon">
          <icon slot="icon" name="user"></icon>
        </span>
      </x-input>
      <x-input v-model="password" title="密码" name="password" type="password" placeholder="请输入密码">
        <span slot="label" class="slot-label-icon">
          <icon slot="icon" name="key"></icon>
        </span>
      </x-input>
      <x-input v-model="kaptcha" title="验证码" placeholder="请输入验证码">
        <span slot="label" class="slot-label-icon">
          <icon slot="icon" name="keyboard"></icon>
        </span>
        <img @click="refreshKaptcha" slot="right-full-height" :src="kaptchaUrl">
      </x-input>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="login" type="primary">登录</x-button>
    </div>
    <toast v-model="toastShow" type="text" position="middle" width="20em">{{toastText}}</toast>
  </div>
</template>
<script>
import { XInput, XButton, Toast } from 'vux'
import { db } from 'lib/db'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    XInput,
    XButton,
    Toast
  },
  data () {
    return {
      username: 'demo',
      password: 'demo',
      kaptcha: 'demo',
      kaptchaUrl: 'http://aaebike.com:9090/kaptcha/image',
      toastText: '',
      toastShow: false
    }
  },
  computed: {
    ...mapState({
      demo: 'demo'
    })
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    async login () {
      const parms = {
        username: this.username,
        password: this.password,
        kaptcha: this.kaptcha
      }
      const result = await this.post('/api/user/login', parms)
      if (result.success) {
        db.set('login', true).write()
        db.set('user', result.data).write()
        console.log('user')
        console.log(db.get('user').value())
        return this.$router.push('/index')
      } else {
        this.toastText = result.errorMsg
        this.toastShow = true
      }
    },
    // 刷新验证码
    refreshKaptcha () {
      this.kaptchaUrl = this.kaptchaUrl + '?'
    }

  },
  mounted () {
    this.set({ haha: 'ceshi', niubi: 1231 })
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
.slot-label-icon {
  width: 30px;
  height: 100%;
  padding-right: 10px;
  display: flex;
  justify-content: center;
}
</style>
