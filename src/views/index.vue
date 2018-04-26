<template>
  <div class="z-page">

    <div class="z-head life-index-head">
      <div class="logo">
        <img :src="shop.logo" alt="">
      </div>
      <span class="title">{{shop.title}}</span>
      <div class="icon-tool">
        <router-link class="zui-icon zui-icon-SEARCH_1" :to="{name: 'searchResult'}">
        </router-link>

        <share-popup :shareCls="'zui-icon-SHARE2'" :share="shop.shareInfo">
        </share-popup>
      </div>
    </div>

    <view-box class="z-content">
      <div class="life-index-banner">
        <swiper :list="shopBanner">
        </swiper>
      </div>

      <cat-box :cats="shopCat" :title="'美的一笔'">
      </cat-box>

      <sale-floor :type="'floorA'" :hasAll="true" :floorTitle="'精选好物'" :floorData="floor1">
      </sale-floor>

      <recommend :type="'INDEXGOODRECOMMEND'" :recommendTitle="'优物推荐'" :recommendData="recommendGoods">
      </recommend>

      <ending-tip :showLoading="false"></ending-tip>

    </view-box>

  </div>
</template>
<script>
import { shopBanner, shopCat, floor1, recommendGoods } from '../data/data.js'

import SharePopup from 'components/SharePopup.vue'
import CatBox from 'components/CatBox.vue'
import SaleFloor from 'components/SaleFloor.vue'
import EndingTip from 'components/EndingTip.vue'
import Recommend from 'components/Recommend.vue'
import ScrollerBox from 'components/ScrollerBox.vue'
import GoodGrid from 'components/GoodGrid.vue'
import { Swiper, SwiperItem, Popup, ViewBox } from 'vux'

export default {
  components: {
    Popup,
    CatBox,
    SaleFloor,
    EndingTip,
    Recommend,
    GoodGrid,
    Swiper,
    SwiperItem,
    ScrollerBox,
    SharePopup,
    ViewBox
  },
  data () {
    return {
      // shop: shop,
      shopBanner: shopBanner,
      shopCat: shopCat,
      floor1: floor1,
      recommendGoods: recommendGoods
    }
  },
  created () {
    this.initShop()
  },
  computed: {
    shop () {
      return {
        logo: '/static/img/life-index-logo.png',
        shareInfo: {
          qrcode: '/static/img/good-default.jpg',
          title: '长按二维码分享' },
        title: '极物商城'
      }
      // return this.$store.getters.shop
    }
  },
  methods: {
    initShop () {
      this.$store.dispatch('initShop')
    }
  }
}
</script>

<style lang='less'>
.life-index-head {
  box-sizing: border-box;
  height: 44px;
  line-height: 2;
  padding: 5px 10px;
  background: #fff;
  border-bottom: 1px solid #f8f8f8;
  z-index: 502;
}
.life-index-head .logo {
  float: left;
  width: 34px;
  height: 34px;
}
.life-index-head .logo img {
  width: 100%;
  display: block;
}
.life-index-head .title {
  font-size: 18px;
  padding-left: 10px;
  overflow: hidden;
}
.life-index-head .icon-tool {
  float: right;
}
.life-index-head .icon-tool .zui-icon {
  display: inline-block;
  text-align: center;
  width: 30px;
  height: 30px;
  color: #404040;
  line-height: 1.6;
  font-size: 24px;
}

.life-index-banner {
  margin-top: 44px;
  background-color: #fff;
}
</style>
