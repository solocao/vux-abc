<template>
  <div class="z-page">

    <div class="z-head life-index-head">
      <div class="logo">
        <img :src="shop.logo" alt="">
      </div>
      <span class="title">{{shop.title}}</span>
      <div class="icon-tool">
        <router-link :to="{name: 'searchResult'}">
          <icon name="sync"></icon>
        </router-link>
        <share-popup :shareCls="'zui-icon-SHARE2'" :share="shop.shareInfo">
        </share-popup>
      </div>
    </div>

    <view-box class="z-content">
      <!-- swiper 导航栏目 -->
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
  data() {
    return {
      shop: {
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525357369&di=2717825c23b0fa14fccd3cafeb20a099&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201502%2F19%2F20150219180534_MZkMk.jpeg',
        title: 'AA电单车'
      },
      shopBanner: shopBanner,
      shopCat: shopCat,
      floor1: floor1,
      recommendGoods: recommendGoods
    }
  },
  created() {
    this.advCarousel()
  },
  computed: {
    shop() {
      return {
        logo: '/static/img/life-index-logo.png',
        shareInfo: {
          qrcode: '/static/img/good-default.jpg',
          title: '长按二维码分享'        },
        title: '极物商城'
      }
      // return this.$store.getters.shop
    }
  },
  methods: {
    async advCarousel() {
      const result = await this.get('/api/adv/carousel')
      if (result.success) {
        this.shopBanner = result.data.map(x => ({
          img: 'http://www.aaebike.com:9090' + x,
          title: '送你一辆车',
          url: 'javascript:'
        }))
      }
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
  border-radius: 50%;
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
  background-color: #fff;
}
</style>
