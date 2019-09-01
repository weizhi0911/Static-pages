<template>
  <!-- 未登录隐藏 -->
  <div data-v-1ec2d114>
    <section data-v-1ec2d114 class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" style="display:none">
      <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
      <h3>登录后查看外卖订单</h3>
      <!---->
      <button>立即登录</button>
    </section>

    <!-- 登录显示 -->
    <section data-v-1ec2d114 class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" style="display: none;">
      <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif">
      <h3>没有结果</h3>
      <!---->
      <!---->
    </section>
    <div data-v-1ec2d114 class="orderbody">
      <div class="min" ref="minn">
        <!--渲染区域-->
        <a
          data-v-54bf175d
          data-v-1ec2d114
          v-for="(i,idx) in lis"
          :key="idx"
          href="javascript:;"
          wxmplink="/pages/order/detail/order-detail?id=3043647167083949163"
          class="ordercard"
        >
          <div data-v-54bf175d class="ordercard-body">
            <a
              data-v-54bf175d
              href="javascript:;"
              wxmplink="/pages/shop/shop/index?id=E5964925007562857797"
              class="ordercard-avatar"
            >
              <router-link to="shop">
                <img
                  data-v-54bf175d
                  class="ordercard-logo"
                  :src="`https://fuss10.elemecdn.com/${insertStr(insertStr(i.restaurant_image_hash,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(i.restaurant_image_hash,1,'/'),4,'/')+'.png':insertStr(insertStr(i.restaurant_image_hash,1,'/'),4,'/') + '.jpeg'}`"
                >
              </router-link>
              <!---->
            </a>
            <div data-v-54bf175d class="ordercard-content">
              <div data-v-54bf175d class="ordercard-head">
                <div data-v-54bf175d class="title">
                  <a
                    data-v-54bf175d
                    href="javascript:;"
                    wxmplink="/pages/shop/shop/index?id=E5964925007562857797"
                    class="name"
                  >
                    <router-link to="shop">
                      <span data-v-54bf175d class="content" v-text="i.restaurant_name"></span>
                    </router-link>
                    <svg data-v-54bf175d>
                      <use data-v-54bf175d xlink:href="#arrow-right"></use>
                    </svg>
                  </a>
                  <router-link to="affirm">
                  <p data-v-54bf175d class="status clearfix" v-text="i.status_bar.title"></p>
                  </router-link>
                </div>
                <!-- 次处写router报错 -->
                <p data-v-54bf175d class="datetime clearfix" v-text="i.formatted_created_at"></p>
              </div>
              <div data-v-54bf175d class="ordercard-detail">
                <p data-v-54bf175d class="detail">
                  <router-link to="affirm">
                  <span data-v-54bf175d class="productname">油豆腐拆骨肉饭</span>
                  </router-link>
                  <span data-v-54bf175d></span>
                </p>
                  <router-link to="affirm">
                <p data-v-54bf175d class="price" v-text="i.total_amount">¥16.00</p>
                  </router-link>
              </div>
              <div data-v-54bf175d class="ordercard-bottom">
        <!---->
        <!---->
        <router-link to="shop">
        <button data-v-54bf175d ubt-click="101194" class="cardbutton">再来一单</button>
        </router-link>
        <!---->
        <!---->
      </div>
            </div>
          </div>
        </a>
      </div>

      <!---->
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      lis: [],
      hight: '',
      page : 1,
      pageSize: 6,
    };
  },
  // 生命周期第二阶段拿数据ajax
  created() {
    // 第一次拿数据
    this.getLis();
  },
  methods: {
    // 获取列表数据
    async getLis() {
      // this.$store.state.loading += 1;
      const  data  = await this.$axios.get(
      `https://www.easy-mock.com/mock/5cf66494c51c246c3655bfca/example/orderList?page=${this.page}&pageSize=${this.pageSize}`,
      );
      // this.$store.state.loading -= 1;
      this.lis = [...this.lis, ...data.data];
      // this.offsetHeight = this.$refs.minn.offsetHeight
    },
    // 图片
    insertStr(soure, start, newStr) {
      // console.log(soure.slice(0, start),soure.slice(start))
      return soure.slice(0, start) + newStr + soure.slice(start);
    },
  },
  mounted() {
    // 懒加载
    window.addEventListener('scroll', () => {
      this.hight = document.body.offsetHeight - window.innerHeight;
      if (window.scrollY >= this.hight) {
        this.page++;
        if (this.page >= 5) {
          console.log(5);
          return;
        }
        this.getLis();
      }
    });
  },
  computed: {
    // return出去可以直接当变量使用
    offsetHeight() {
      return this.$refs.minn.offsetHeight;
    },
    loading() {
      // 把仓库的公有变量获取到loading组件里面使用
      // console.log(this.$store.state.loading);
      // 从仓库拿到一个值
      return this.$store.state.loading;
    },
  },
});
</script>

<style>
@import "../assets/css/orderTwo.css";
</style>
