<template>
  <div class="root">
      {{add? '' : '' }}

    <header class="header ElemeHeader-root_lOpLxr-_0">
      <div
        class="ElemeHeader-wrapper_2rUT4SE_0 ElemeHeader-gradientBg_3_Tu-JD_0 ElemeHeader-fixed_3OoT0dS_0"
        style="z-index: 8844;"
      >
        <router-link to="shop">
        <div class="ElemeHeader-left_7jLVUf9_0">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4="
            class="ElemeHeader-leftArrow_1PLBnDh_0"
          >
        </div>
        </router-link>
        <h1 class="ElemeHeader-center_2hbxfGq_0" data-spm-anchor-id="a2ogi.12117550.0.i0">确认订单</h1>
      </div>
    </header>
    <div class="checkout viewbody">
      <div>
        <!---->
        <div class="main" style="margin:0;padding:0;width:100%;">
          <!---->
          <section data-v-70e5c150 class="cart-address">
            <div data-v-70e5c150 class="address-item">
              <p data-v-70e5c150 class="title">
                <span data-v-70e5c150>订单配送至</span>
                <span
                  data-v-70e5c150
                  content
                  class="address-tag address-tag-2HUG1 address-tag-NJoYn"
                  style="display: none;"
                ></span>
              </p>
              <p data-v-70e5c150 class="address-detail">
                <span data-v-70e5c150 class="address-text">元岗北街128号广东省广州市天河区元岗北街128号128-4</span>
                <svg data-v-70e5c150>
                  <use data-v-70e5c150 xlink:href="#arrow-right-bold"></use>
                </svg>
              </p>
              <h2 data-v-70e5c150 class="address-name">
                <span data-v-70e5c150>付树镇</span>
                <span data-v-70e5c150>(先生)</span>
                <span data-v-70e5c150 class="phone">18576007670</span>
              </h2>
            </div>
          </section>
          <div class="checkout-section key-card">
            <section>
              <div class="delivery">
                <div class="delivery-left">
                  <div class="delivery-time">
                    <span class="cart-item__title">送达时间</span>
                  </div>
                  <!---->
                  <!---->
                </div>
                <div class="right">
                  <!---->
                  <div class="delivery-select">
                    尽快送达(17:08送达)
                    <svg class="taoPiaoPiao">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                    <!---->
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
            </section>
            <section data-v-3fa1bdea>
              <div data-v-3fa1bdea class="cart-item pay-way">
                <div data-v-3fa1bdea class="cart-item__title">支付方式</div>
                <div data-v-3fa1bdea>
                  <span data-v-3fa1bdea class="pay-text">在线支付</span>
                  <!---->
                </div>
              </div>
              <!---->
            </section>
          </div>
          <section class="checkout-section cart-group-iChki">
            <h3 class="cart-group-1VY6K">
              <span class="cart-group-36mGW">潇湘农家木桶饭</span>
              <span class="cart-group-2C0Li"></span>
            </h3>
            <ul class="cart-group-253X-">
              <li 
              v-for="(k,idx) in xinList"
              :key="idx"
              >
                <img
                  alt
                  class="cart-group-2U2FI"
                  :src="`https://fuss10.elemecdn.com/${insertStr(insertStr( k[0] ,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(k[0],1,'/'),4,'/')+'.png':insertStr(insertStr(k[0],1,'/'),4,'/') + '.jpeg'}`"
                >
                <div class="cart-group-OgNfZ">
                  <p class="cart-group-2_GET" data-spm-anchor-id="a2ogi.12117550.0.i1" v-text="k[1]">茄子肉丝饭</p>
                  <p class="cart-group-3AwCt">
                    <span class="cart-group-SdXAD" v-text="k[3]">不辣</span>
                  </p>
                </div>
                <span class="cart-group-1vF9L">×&nbsp;1</span>
                <span class="cart-group-3GWE2">
                  <!---->
                </span>
                <span class="cart-group-31C83">
                  <span class="cart-group-12n-9" v-text="'￥' + k[2]"></span>
                </span>
              </li>
             
            </ul>
            <ul class="cart-group-1AB5m">
              <li>
                <div>
                  <span class="mini-tag-1Lyw4 cart-group-3SBpM">
                    包装
                    <span class="cart-group-1Nzr_ mini-tag-1ezSQ">包装</span>
                  </span>
                  <span class="cart-group-3GdQ6">餐盒</span>
                </div>
                <div class="cart-group-1BI0p">
                  <!---->
                  <span class="cart-group-12n-9" v-text="'￥' + number"></span >
                </div>
              </li>
              <li>
                <div>
                  <span class="mini-tag-1Lyw4 cart-group-3SBpM">
                    商家
                    <span class="cart-group-3PfCX mini-tag-1ezSQ">商家</span>
                  </span>
                  <span class="cart-group-3GdQ6">配送费</span>
                </div>
                <div class="cart-group-1BI0p">
                  <!---->
                  <span class="cart-group-12n-9">¥</span>2
                </div>
              </li>
              <li>
                <div class="cart-group-26Xt9">
                  <span class="cart-group-36QIs">
                    满减
                    <span style="background-color: rgb(240, 115, 115);">满减</span>
                  </span>
                  <span class="cart-group-3GdQ6">店铺满减优惠</span>
                </div>
                <div class="cart-group-30bhP">
                  -&nbsp;
                  <span class="cart-group-12n-9">¥</span>7
                </div>
              </li>
              <!---->
            </ul>
            <div class="cart-item hongbao-1xKvw hongbao-3aaXb">
              <div>
                <h3 class="hongbao-3SCfi">红包</h3>
              </div>
              <span class="text-ellipsis cartitem-right">
                <span content="0个可用" class="hongbao-1DGEt">
                  <svg class="hongbao-2OteP">
                    <use xlink:href="#red-packet"></use>
                  </svg>
                  0个可用
                </span>
                <svg class="hongbao-Gsh2t">
                  <use xlink:href="#arrow-right"></use>
                </svg>
              </span>
            </div>
            <!---->
            <div class="cart-group-2wDpW">
              <div class="cart-group-2MqrE">
                <div class="cart-group-1p3Pb">
                  <a>
                    <span>优惠说明</span>
                    <svg>
                      <use xlink:href="#tip"></use>
                    </svg>
                  </a>
                </div>
                <div>
                  小计 ¥
                  <span class="cart-group-35TDT" v-text="tatal">90</span>
                </div>
              </div>
              <!---->
            </div>
            <!---->
          </section>
          <div class="tying-products-1oBGr_1">
            <!---->
            <!---->
            <!---->
          </div>
          <section class="checkout-section">
            <div id="tableware" class="cart-item">
              <div class="tableware-2HUTY">
                <div class="tableware-2HZbX">
                  <div class="cart-item__title">餐具份数</div>
                  <div class="cartitem-right">
                    <!---->
                    <span>未选择</span>
                    <svg>
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </div>
                </div>
                <p class="tableware-2gC1h">
                  <img
                    src="data:image/png;base64,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"
                    alt
                    class="tableware-3N_Pn"
                  >
                  <span>马上助力环保</span>
                </p>
              </div>
              <!---->
            </div>
            <a href="#/notes" class="cart-item">
              <span class="text-ellipsis cart-item__title">订单备注</span>
              <span class="text-ellipsis cartitem-right">
                <span>口味、偏好</span>
                <svg>
                  <use xlink:href="#arrow-right"></use>
                </svg>
              </span>
            </a>
            <div class="cart-item">
              <div class="cart-item__title">发票信息</div>
              <div class="cartitem-right disabled extra-iofDD">
                <span>该店不支持线上开票，请电话联系商户</span>
                <!---->
              </div>
            </div>
            <div class="cart-item extra-1LSuZ">
              <div class="extra-1wowZ">
                <div class="cart-item__title">号码保护</div>
                <a href="javascript:;">
                  <svg>
                    <use xlink:href="#tip"></use>
                  </svg>
                </a>
              </div>
              <p>号码保护中，将对商家、骑手隐藏您的真实手机号</p>
            </div>
          </section>
        </div>
        <!---->
        <footer id="footer" class="action-bar">
          <span v-text="tatal">¥90</span>
          <small>｜已优惠¥7</small>
          <button
            ubt-click="101166"
            ubt-data-restaurant_id="E18218871717668493544"
            class="submitbtn"
          >去支付</button>
        </footer>
      </div>
      <!---->
    </div>
    <div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
      <div class="Load-loading-main_1LVs9py">
        <div class="Load-loading-icon_2LvpNhI"></div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
export default Vue.extend({
    data() {
        return{
            number : 0,
            tatal : 0,
            xinList : [],

        };

    },
    created() {
    // 通头部出现
    this.$store.state.isshopfooter = 0;
    this.$store.state.isFooter = 1;

  },
    mounted() {
      console.log(this.$route.params.tabaLiat);
    },
    computed: {
        // 取数据
        add() {
            this.xinList = this.$route.params.tabaLiat;
            this.tatal = this.$route.params.tatal;
            this.number = this.$route.params.number;
        },
    },
    methods: {
        // 图片格式
        insertStr(soure, start, newStr) {

        return soure.slice(0, start) + newStr + soure.slice(start);
        },
    },

});
</script>


<style>
@import "../assets/css/affirm.css";
</style>

