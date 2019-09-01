<template>
<div v-show="!inauto_isok">
     <div class="autonavi_ding_w">
    <div class="dw_w_lt">
      <span class="dw_name" @click="inauto_is_isok">
      {{`${city?city:'选择城市'}`}}
      </span>
      <i></i>
    </div>
    <div class="dw_inp_box">
        <div class="dw_w_inp">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入地址" v-focus>
    </div>
    </div>
  </div>
  <section class="index-2ljEK_0" style="">
    <h4 data-spm-anchor-id="a2ogi.12117543.0.i0">
      当前地址
    </h4>
  <div class="index-11hsB_0" data-spm-anchor-id="a2ogi.12117543.0.i9">
    <span @click="dingwei_click(get_city)">
      {{num?num:'未知位置'}}
    </span>
  <span class="index-Ziyuq_0" data-spm-anchor-id="a2ogi.12117543.0.i5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class="" data-spm-anchor-id="a2ogi.12117543.0.i6"><g fill="none" fill-rule="evenodd">
      <circle cx="7.5" cy="7.5" r="7" stroke="#2395FF">
        </circle>
        <path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z" data-spm-anchor-id="a2ogi.12117543.0.i4">
          </path>
          </g>
          </svg>
          <span data-spm-anchor-id="a2ogi.12117543.0.i3" @click="getCurrentCity">
            重新定位
          </span>
          </span>
          </div>
          </section>
  </div>
</template>
<script>
import getCurrentCityName from "../getUserLocation.js"; //高德地图地理位置

export default {
  data() {
    return { num: "" };
  },
  created() {
    this.num = this.$store.state.get_city; //实时存贮定位值
  },
  computed: {
    inauto_isok() {
      return this.$store.state.inauto_isok;
    },
    city() {
      return this.$store.state.city;
    },
    get_city() {
      return this.$store.state.get_city;
    }
  },
  methods: {
    inauto_is_isok() {
      this.$store.commit("inauto_isok");
      this.$store.state.autonaviHeader = "城市选择";
      // this.$store.commit("load_left");
      if (this.$store.state.city == "选择城市")
        this.$store.state.item_city_isok = false;
      else this.$store.state.item_city_isok = true;
    },
    /**获取地图定位*/
    getCurrentCity() {
      this.$store.state.get_city ||
        getCurrentCityName().then(city => {
          city = city.slice(0, city.length - 1);
          this.$store.commit("getCity", city);
          this.num = this.$store.state.get_city;
        });
    },
    dingwei_click(item) {
      this.$store.commit("load_left");
      this.$store.state.get_city = item;
    }
  },
  directives: {
    focus(el) {
      el.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.autonavi_ding_w {
  align-items: center;
  padding-left: 0.4rem;
  background: #fff;
  height: 1.493333rem;
  font-size: 0.15rem;
  display: flex;
  .dw_w_lt {
    .dw_name {
      width: 1.066667rem;
      color: #333;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
    }
    i {
      border-style: solid;
      border-color: #333 transparent transparent transparent;
      width: 0.08rem;
      line-height: 0.08rem;
      display: inline-block;
      margin-bottom: 3px;
    }
  }
  .dw_inp_box {
    padding: 0.266667rem 0.4rem;
    width: 78%;
    .dw_w_inp {
      background: #f2f2f2;
      height: 0.96rem;
      width: 100%;
      position: relative;
      input {
        background: #f2f2f2;
        position: absolute;
        left: 0.666667rem;
        top: 0.266667rem;
      }
      i {
        position: absolute;
        left: 0.173333rem;
        top: 0.296667rem;
        font-size: 0.2rem;
      }
    }
  }
}
.index-2ljEK_0 {
  h4 {
    padding: 0.4rem 0 0.186667rem 0.4rem;
    padding: 4vw 0 1.866667vw 4vw;
    color: #666;
    font-size: 0.346667rem;
    line-height: 0.48rem;
    line-height: 4.8vw;
  }
  .index-11hsB_0 {
    background: #fff;
    height: 1.173333rem;
    height: 11.733333vw;
    font-size: 0.4rem;
    color: #333;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0.453333rem 0 0.4rem;
    padding: 0 4.533333vw 0 4vw;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    span:first-child {
      font-weight: 700;
      max-width: 6.666667rem;
      max-width: 66.666667vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .index-Ziyuq_0 {
      color: #2395ff;
      font-size: 0.373333rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      line-height: 0.4rem;
      line-height: 4vw;
      svg {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.133333rem;
        margin-right: 1.333333vw;
      }
    }
  }
}
</style>
