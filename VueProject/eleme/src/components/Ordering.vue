<template>
  <div>
    <!-- 点餐部分 -->
    <div class="diancan">
      <!-- banner -->
      <div class="index-2vPo3">
        <img
          alt
          class="index-1Ff0i"
          src="//fuss10.elemecdn.com/e/5f/79e02751bcaf45c0a2cd406d58e6fpng.png?imageMogr/format/webp/thumbnail/686x/"
        >
      </div>
      <!-- 商家推荐 -->
      <div class="recommend-1M-lc">
        <div>
          <p class="recommend-1kbzU">商家推荐</p>
          <div class="recommend-38t08">
            <div class="recommend-1U7u5">
              <!-- 商家推荐渲染部分 -->
              <div class="recommend-3EB-z" v-for="(i,idx) in shopList" :key="idx">
                <img
                 :src="`https://fuss10.elemecdn.com/${insertStr(insertStr(i.foods[0].image_path,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(i.foods[0].image_path,1,'/'),4,'/')+'.png':insertStr(insertStr(i.foods[0].image_path,1,'/'),4,'/') + '.jpeg'}`"
                  alt
                  class="recommend-16ZqP"
                >
                <div>
                  <p class="food-card-1ppXR" v-text="i.foods[0].name"></p>
                  <p class="food-card-3O1zm" v-text="i.foods[0].month_sales +'     好评100%'">好评率100%</p>
                  <div class="food-card-2h4ZL">
                    <p class="food-card-wVKdM" style="color: rgb(255, 83, 57);">
                      <small v-text="'￥  '+i.foods[0].lowest_price"></small>
                      <!---->
                    </p>
                    <span>
                      <!---->
                      <span class="cartbutton-entitybutton_9fUdS">
                        <!---->
                        <!---->
                        <a href="javascript:" role="button" aria-label="减少商品">
                          <img style="whith:20px;height:20px;backgreen:green;" src="../assets/jian-copy.svg" alt>
                        </a>
                        <input type="text">
                        <!---->
                        <!---->
                        <a href="javascript:" role="button" aria-label="添加商品">
                          <img style="whith:25px;height:25px;" src="../assets/jia.svg" alt>
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
      <div class="index-2yB8n">
        <div class="menuview-menuview_2hUkG" style="height: 1253px;">
          <div class="menuview-menuviewMain_17K3g">
            <main class="menuview-main_i6fQ3">
              <!-- 左侧列表 -->
              <div class="menucategory-category_29kyE menuview-menuNav_2_lFf" style="float:left;">
                <ul class="menucategory-categoryWrapper_2z0aj">
                  <!-- 左侧渲染 -->
                  <li
                    v-for="(k,index) in shopList"
                    :key="index"
                    role="button"
                    @click="kie(index)"
                    aria-label="折扣菜系列"
                    class="menucategory-categoryItem_3e27M"
                    :class="{'menucategory-active_JnDmc' : ki===index}"
                  >
                    <!---->
                    <!---->
                    <span class="menucategory-categoryName_qwsbd" v-text="k.name"></span>
                  </li>
                </ul>
              </div>
              <!-- 右侧内容 -->
              <section
                data-v-425277ec
                class="container menuview-menuList_JqDMu"
                coupons-data="[object Object]"
                style="float:left;"
              >
                <div data-v-425277ec class="scroller">
                  <dl data-v-425277ec role="monu">
                    <dt data-v-425277ec role="heading" aria-label="热销，大家喜欢吃，才叫真好吃。">
                      <div data-v-425277ec class="category-title">
                        <strong data-v-425277ec class="category-name">热销</strong>
                        <span data-v-425277ec class="category-desc">大家喜欢吃，才叫真好吃。</span>
                      </div>
                      <!---->
                    </dt>
                    <!-- 渲染部分 -->
                    <dd
                      v-for="(j,item) in shopList"
                      :key="item"
                      data-v-425277ec
                      aria-label="茄子肉丝饭，原价12元，现价12元。"
                      role="menuitem"
                      class
                      
                    >
                      <div data-v-425277ec class="fooddetails-root_2HoY2">
                        <span class="fooddetails-logo_2Q0S7">
                          <!---->
                          <img
                            :src="`https://fuss10.elemecdn.com/${insertStr(insertStr(j.foods[0].image_path,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(j.foods[0].image_path,1,'/'),4,'/')+'.png':insertStr(insertStr(j.foods[0].image_path,1,'/'),4,'/') + '.jpeg'}`"
                            alt="茄子肉丝饭"
                            title="茄子肉丝饭"
                          >
                        </span>
                        <section class="fooddetails-info_1fBtn">
                          <p class="fooddetails-name_P4hpW">
                            <!---->
                            <span class="fooddetails-nameText_250s_" v-text="j.foods[0].name">茄子肉丝饭</span>
                            <!---->
                          </p>
                          <p
                            class="fooddetails-desc_3tvBJ"
                            v-text="j.foods[0].description"
                          >主要原料：茄子,猪肉</p>
                          <p class="fooddetails-sales_1ETVq">
                            <span v-text="j.foods[0].month_sales">月售235份</span>
                            <span v-text="j.foods[0].satisfy_rate">好评率100%</span>
                          </p>
                          <div class="fooddetails-activityRow_1FKti">
                            <!---->
                            <!---->
                          </div>
                          <span
                            class="salesInfo-price_3_oc1_0 fooddetails-salesInfo_MPG41"
                            style="color: rgb(255, 83, 57);"
                          >
                            <span v-text="j.foods[0].lowest_price">12</span>
                            <!---->
                            <!---->
                          </span>
                          <div class="fooddetails-button_RwKqC">
                            <span>
                              <!---->
                              <span class="cartbutton-entitybutton_9fUdS">
                                <a href="javascript:" role="button" aria-label="减少商品" 
                                :style="{display:visible? 'none': 'block'}">
                                  <img
                                    style="whith:30px;height:30px;"
                                    src="../assets/jian-copy.svg"
                                    alt
                                  >
                                </a>
                                <!-- v-model="item.count" -->
                                <!-- qty索引 -->
                                <span >
                                  <input :style="{display:visible? 'none': 'block'}"  style="whith:30px;height:20px;" v-model='j.foods[0].is_featured' type="text">
                                </span>
                                
                                <!---->
                                <!---->
                                <a  href="javascript:" role="button" aria-label="添加商品">
                                  <img
                                    style="whith:35px;height:35px;"
                                    @click="Skip(j.id,item)"
                                    src="../assets/jia.svg"
                                    alt
                                  >
                                </a>
                              </span>
                            </span>
                          </div>
                        </section>
                      </div>
                    </dd>
                  </dl>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <!-- content -->
    </div>
    <!-- 点击显示部分 -->
    <div class="indent" v-if="oh" ref="userinfo" data-v-425277ec>
      <div class="specpanel-mask_1zC4L" ></div>
      <div class="specpanel-root_QLZIb" >
        <div class="specpanel-main_1hGJp">
          <a
            href="javascript:;"
            @click="specpanel()"
            ref="user"
            role="button"
            aria-label="关闭"
            class="specpanel-close_2ypTM"
          ></a>
          <div class="specpanel-header_2k__j">
            <img
              alt
              class="specpanel-pic_2kabO"
              :src="`https://fuss10.elemecdn.com/${insertStr(insertStr(xinList.foods[0].image_path,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(xinList.foods[0].image_path,1,'/'),4,'/')+'.png':insertStr(insertStr(xinList.foods[0].image_path,1,'/'),4,'/') + '.jpeg'}`"
            >
            <div class="specpanel-info_3ElLg">
              <p class="specpanel-name_GORAG" v-text="xinList.foods[0].name">豆腐烧鱼块饭</p>
              <p class="specpanel-total_1WrQ4">{{la? '已选：' + la : '已选：不辣'}}</p>
              <p class="specpanel-price_2hBGO" style="color: rgb(255, 83, 57);">
                <small v-text="'￥' + xinList.foods[0].lowest_price"></small>
                <small class="specpanel-extraText_178qT" style="display: none;">起</small>
              </p>
            </div>
          </div>
          <!---->
          <div class="specpanel-body_2yQ2u">
            <div>
              <p class="specpanel-colTitle_1qeDW" v-text="xinList.foods[0].attrs[0].name">辣度</p>
              <div class="specpanel-colBody_zwCNl">
                <span
                  class="panel-item-item_2J1e-_0"
                  :class="{'panel-item-active_3HD_u_0' : ink === qty}"
                  style="color: rgb(35, 149, 255); background-color: rgba(35, 149, 255, 0.2);"
                  v-for="(p,ink) in xinList.foods[0].attrs[0].values"
                  :key="ink"
                  @click="lop(ink,p)"
                  ref="ji"
                  v-text="p"
                ></span>
              </div>
            </div>
            <!---->
          </div>
          <button
            ref="ok"
            class="specpanel-doneBtn_WnF6t"
            style="background-color: rgb(35, 149, 255);"
            @click="select(xinList.foods[0].image_path, xinList.foods[0].name,  xinList.foods[0].lowest_price,)"
          >
            选好了
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      la: '不辣',
      num: 0,
      qty: 0,
      ki: 0,
      amount : 0,
      status: false,
      visible : true,
      shopList: [],
      xinList: [],
      orderList : [],
      oh: false,
      // shoplist = ['https://www.easy-mock.com/mock/5cf66494c51c246c3655bfca/example/dianpushop'],
      // '
    };
  },
  created() {
    this.getshopList(() => {});
  },
  methods: {
    async getshopList() {
      const data1 = await this.$axios(
        'https://www.easy-mock.com/mock/5cf66494c51c246c3655bfca/example/shop_list',
      );
      // console.log(data1.data.menu);
      this.shopList = data1.data.menu;
    },
    // 点击展开、拿数据
    Skip(id, idx) {
      // 下标
      // this.amount =idx;
      // console.log(this.amount)
      this.oh = true;
      // 数组遍历判断
      this.shopList.forEach((item) => {
        if (item.id === id) {
          this.xinList = item;
          // console.log(this.xinList);
        } else {
          // console.log(id);
        }
      });
      // console.log(this.shopList[idx].name);
    },
    // 点击关闭
    specpanel() {
      this.oh = false;
    },
    // 点击选中
    lop(idx, p) {
      // 当前索引用于辣度
      this.qty = idx;

      this.la = p;
    },
    // 图片格式
    insertStr(soure, start, newStr) {
      return soure.slice(0, start) + newStr + soure.slice(start);
    },
    // 左侧选项卡
    kie(idx) {
      this.ki = idx;
    },
    // 选好了 订单信息
    select(a, b, c) {
      // 制返
      this.oh = false;
      // 将内容制返

      this.visible = false;
      let arr = [];
      arr.push(a, b, c, this.la);
      this.orderList.push(arr);

      // value的数据
      this.xinList.foods[0].is_featured++;
      // console.log(this.xinList);


      // vuex传递数据
      this.$store.commit('addItem', {
        orderList : this.orderList,
      });
    },
  },
});
</script>



<style>
@import "../assets/css/shop.css";
</style>
