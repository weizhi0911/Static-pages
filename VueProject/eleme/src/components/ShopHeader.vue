<template>
     <div>
         <!-- 头部 -->
    <div class="app-dps8r">
      <div class="index-2guaN">
        <nav
          class="index-2g0nR index-2TCKU"
          style="background-image: url(&quot;//fuss10.elemecdn.com/3/fc/85d6134e4f58cd2a8fa54e813aa88jpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/&quot;);"
        >
          <router-link to="order">
          <a href="javascript:;" class="index--iRT3"></a>
          </router-link>
          <!---->
        </nav>
        <div class="index-ccm5A">
          <div class="index-3X8sl">
            <!---->
            <img
              class="index-3eDRn"
              src="//fuss10.elemecdn.com/3/fc/85d6134e4f58cd2a8fa54e813aa88jpeg.jpeg?imageMogr/format/webp/thumbnail/150x/"
            >
          </div>
          <!---->
          <div class="index-2uv7r">
            <h2 class="index-3jRsK">
              <span class="index-UYhnL">潇湘农家木桶饭</span>
              <i class="index-1_VRD"></i>
            </h2>
            <div class="index-24KTi">
              <span class="index-2u0xV">评价4.3</span>
              <span class="index-2u0xV">月售1790单</span>
              <span class="index-2u0xV">
                商家配送
                <span>约25分钟</span>
              </span>
            </div>
          </div>
          <div class="index-3Zu2B">
            <div ubt-click="102425" class="index-2R-Ax index-Y5OU8">
              <p class="index-3woYK">
                <span class="index-2sM0U">
                  <small>¥</small>6
                </span>
                <span>
                  <svg class="index-30ifM">
                    <use xlink:href="#svip-icon"></use>
                  </svg>无门槛
                </span>
              </p>
              <p class="index-Omlr_">领取</p>
            </div>
          </div>
          <div ubt-click="101178" class="index-2Ea3o">
            <div class="index-2Gi26">
              <div class="activity-1hPHa activity-2JHFT">
                <span
                  class="mini-tag-1Lyw4 activity-N5WvH"
                  style="background-color: rgb(240, 115, 115);"
                >
                  满减
                  <span
                    class="activity-yP-9y mini-tag-1ezSQ"
                    style="color: rgb(255, 255, 255);"
                  >满减</span>
                </span>
                <span class="activity-3dUjU">满15减3，满25减4，满48减6，满55减7</span>
              </div>
            </div>
            <div class="index-jk0Mt">3个优惠</div>
          </div>
          <p class="index-TmrYy">公告：欢迎各位新老顾客订餐。为避免用餐高峰，请您避免高峰期，提前35分钟订餐，感谢各位新老顾客。</p>
        </div>
      </div>
      <!---->
      <!---->
    </div>

    <!-- shoptab -->
    <div id="shoptab"  style="position: sticky; top: 0px; z-index: 4;">
      <div class="shop-tab-1MgBk" :class="{ishopTab : isshopTab}" :style="{top:isshopTab? '0px': '0px'}" >
        <div class="shop-tab-2ipt1" v-for="(i,idx) in titlelist" :key="idx" :class="{'shop-tab-nD6jp' : idx===num}">
          
          <div @click="tool(idx)">
          <p class="shop-tab-2H0qT" v-text="i.title">
            <span class="shop-tab-1GaSq" style="background-color: rgb(35, 149, 255);" ></span>
          </p>
        </div>

        </div>
        
      </div>
    </div>
    </div>
 
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return{
      num : 0,
      titlelist: [{
                    title: '点餐',
                    url: 'diancan',
                },
                {
                    title: '评价',
                    url: 'merchant',
                },
                {
                    title: '商家',
                    url: 'shangjia',
                },
                ],
    };
  },
  computed : {
    isshopTab() {
      return this.$store.state.isshopTab;
    },
  },
  methods : {
    // tabShow(idx) {

    //   this.num = idx;
    //   console.log(this.num)
    //   // 编程式导航
    //   // this.$router.push({
    //   //   name: this.titlelist[idx].url
    //   // })
    // },
    // 传入索引
    tool(inde) {
      this.num = inde;
      this.$store.state.onl = inde;
    },
  },

});
</script>

<style>
@import "../assets/css/shop.css";

</style>

