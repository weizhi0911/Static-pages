<template>
  <div v-if="isshopfooder">
    <footer :style="{display:isfooter? 'block':'none'}" class="cartview-cartview_m8q55">
      {{pagelists? '' : '' }}
      <div class="cartview-cartmask_39Pun" style="z-index: 10; display: none;"></div>
      <div class="cartview-cartbody_3QIXw" style="z-index: 11;">
        <section class="discount-tip-discountTip_3QgtV_0">
          <span style="color: #333333;">满15减3元，满25减4元，满48减6元，满55减7元</span>
        </section>
        <div style="opacity: 0;">
          <div class="cartview-cartheader_1Wk12">
            <div class="cartview-headerText_1pEZG">
              <span></span>
              <!---->
              <!---->
            </div>
            <a href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_1Xg8n">
              <svg>
                <use xlink:href="#cart-remove"></use>
              </svg>
              <span>清空</span>
            </a>
          </div>
          <div class="entityList-cartbodyScroller_nZp54_0">
            <!---->
            <ul class="entityList-cartlist_1hnWi_0"></ul>
            <!---->
          </div>
        </div>
      </div>
      <div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
        <span
          @click="footerlist()"
          role="button"
          aria-label="购物车"
          attr-quantity="0"
          class="bottomNav-carticon_E1nII_0"
          :class="{'bottomNav-carticon_E1nII_0_color' : iscolor}"
        >
          <span v-text="number? number :''"></span>
          <!---->
        </span>
        <div role="button" aria-label="购物车有商品0件，共0元，另需配送费2元。" class="bottomNav-cartInfo_3l5zP_0">
          <p class="bottomNav-carttotal_1DJt5_0">
            <span class="bottomNav-carttotalOriginal_2tu8R_0" v-text="tatal2? tatal2 : ''"></span>
            <!---->
          </p>
          <p class="bottomNav-cartdelivery_1TjrT_0">另需配送费2元</p>
        </div>
        <a
          :style="{display:song? 'block': 'none'}"
          role="button"
          href="javascript:;"
          class="submit-btn-submitbutton_3t114_0"
          :class="{'submit-btn-submitbutton_3t114_0_color' : isbackground}"
        >
          <span>¥12起送</span>
        </a>
        <a
          :style="{display:song? 'none': 'block'}"
          role="button"
          href="javascript:;"
          class="submit-btn-submitbutton_3t114_0"
          :class="{'submit-btn-submitbutton_3t114_0_color' : isbackground}"
          @click="judge()"
        >
          <span>去结算</span>
        </a>
      </div>
    </footer>
    <!-- 第二部分 -->
    <footer :style="{display:isfooter? 'none':'block'}" class="cartview-cartview_m8q55">
      <!-- {{pagelists? '' : '' }} -->
      <div class="cartview-cartmask_39Pun" @click="cartviem()" style="z-index: 10;"></div>
      <div class="cartview-cartbody_3QIXw cartview-cartbodyOpen_m7_NT" style="z-index: 11;">
        <section class="discount-tip-discountTip_3QgtV_0" opened="true">
          <span style="color: #333333;">满15减3元，还差</span>
          <span style="color: #FF5339;">2</span>
          <span style="color: #333333;">元</span>
        </section>
        <div style="opacity: 1;">
          <div class="cartview-cartheader_1Wk12">
            <div class="cartview-headerText_1pEZG">
              <span>已选商品</span>
              <!---->
              <!---->
            </div>
            <a
              href="javascript:"
              ubt-click="101179"
              class="cartview-cartheaderRemove_1Xg8n"
              data-spm-anchor-id="a2ogi.12117545.0.0"
            >
              <svg data-spm-anchor-id="a2ogi.12117545.0.i1">
                <use xlink:href="#cart-remove"></use>
              </svg>
              <span @click="empty()">清空</span>
            </a>
          </div>
          <div class="entityList-cartbodyScroller_nZp54_0">
            <!---->
            <ul class="entityList-cartlist_1hnWi_0">
              <li class="entityList-entityrow_2JEtG_0" v-for="(op,index) in taba" :key="index">
                <span class="entityList-entityname_3gsQH_0">
                  <em class="entityList-name_3fhQR_0" v-text="op[1]">茄子肉丝饭</em>
                  <!---->
                  <p class="entityList-entityspecs_bSo9n_0" v-text="op[3]">不辣</p>
                </span>
                <span class="entityList-entitytotal_2pnlT_0" style="color: rgb(255, 83, 57);">
                  <!---->
                  <span class="entityList-entitytotalDiscount_2zhg1_0" v-text="op[2]">12</span>
                </span>
                <span class="entityList-entitycartbutton_1u4u1_0">
                  <!---->
                  <span class="cartbutton-entitybutton_9fUdS">
                    <a href="javascript:" role="button" aria-label="删减商品">
                      <svg style="fill: rgb(35, 149, 255);">
                        <use xlink:href="#cart-add"></use>
                      </svg>
                    </a>
                    <span role="button" aria-label="已选1份" class="cartbutton-entityquantity_-YXiq">1</span>
                    <a href="javascript:" role="button" aria-label="添加商品">
                      <svg style="fill: rgb(35, 149, 255);">
                        <use xlink:href="#cart-minus"></use>
                      </svg>
                    </a>
                  </span>
                </span>
              </li>
            </ul>
            <div class="entityList-entityrow_2JEtG_0 entityList-packingfee_60ycC_0">
              <span class="entityList-entityname_3gsQH_0">餐盒</span>
              <span
                class="entityList-entitytotal_2pnlT_0"
                style="color: rgb(255, 83, 57);"
                v-text="number"
              >1</span>
              <span class="entityList-entitycartbutton_1u4u1_0"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
        <span
          role="button"
          aria-label="购物车"
          attr-quantity="1"
          class="bottomNav-carticon_E1nII_0"
          data-spm-anchor-id="a2ogi.12117545.0.i0"
          :class="{'bottomNav-carticon_E1nII_0_color' : iscolor}"
          @click="isunfold()"
        >
          <span v-text="number"></span>
        </span>
        <div role="button" aria-label="购物车有商品1件，共13元，另需配送费。" class="bottomNav-cartInfo_3l5zP_0">
          <p class="bottomNav-carttotal_1DJt5_0">
            <span class v-text="tatal2">¥13</span>
            <!---->
          </p>
          <p class="bottomNav-cartdelivery_1TjrT_0">另需配送费</p>
        </div>
        <a
          role="button"
          href="javascript:;"
          class="submit-btn-submitbutton_3t114_0"
          :class="{'submit-btn-submitbutton_3t114_0_color' : isbackground}"
          @click="judge()"
        >
          <span>去结算</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
// Vue.use(vuexI18n.plugin, store);
export default Vue.extend({
  data() {
    return {
      iscolor: false,
      isbackground: false,
      song: true,
      isfooter: true,
      sunfoldis: false,
      store,
      tatal: 0,
      tatal2: 0,
      number: 0,
      canhe: 0,
      zoom: 0,
      taba: [],
    };
  },
  // 监控自己定义的变量
  computed: {
    // 动态列表
    pagelists() {
      if (this.$store.state.orderList != '' && 'undefined') {
        this.song = false;
        this.iscolor = true;
        this.isbackground = true;

        // 数组数据
        this.taba = this.$store.state.orderList[0].orderList;
        this.taba.map((item) => {
          // 拿到单价
          this.tatal = Number(item[2]);
        });
        // 显示的总价
        this.tatal2 += this.tatal;
        this.number += 1;
         // 判断是否显示
        // if (this.$store.state.onl = 0) {
        //   this.$store.state.isshopfooder = 1;
        //   this.$store.state.isFooter = 0;
        // } else {
        //   this.$store.state.isshopfooder = 0;
        //   this.$store.state.isFooter = 1;
        // }
      }
    },
    isshopfooder() {
      return this.$store.state.isshopfooder;
    },
  },
  // mounted(){
  //   this.tatal=this.$refs.tatal_a.innerHTML;
  //   console.log(this.tatal);
  // },
  // 方法
  methods: {
    // 点击购物车跳转订单页
    footerlist() {
      this.isfooter = false;
    },
    // 点击清空清空并关闭
    empty() {
      this.isfooter = true;
      this.taba = [];
      this.number = 0;
      this.tatal2 = 0;
      console.log(this.taba);
    },
    // 订单判断
    judge() {
      this.$router.push({
        name: 'affirm',
        params: {
          tabaLiat: this.taba,
          tatal: this.tatal2,
          number: this.number,
        },
      });
    },
    // 点击购物车展开与隐藏
    isunfold() {
      this.isfooter = true;
    },
    // 点击透明层退出
    cartviem() {
      this.isfooter = true;
    },
  },
});
</script>


<style>
@import "../assets/css/shop.css";
</style>

