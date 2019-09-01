<template>
    <div class="header">
        <div class="dingwei" @click="city_dw">
            <i class="iconfont icon-dingwei"></i>
            <span>{{`${get_city?get_city:'未知位置'}`}}</span>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    get_city() {
      return this.$store.state.get_city;
    }
  },
  methods: {
    city_dw() {
      this.$store.commit("load_left");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.header {
  padding: 0.376667rem 0.373333rem 0.3rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  .dingwei {
    display: flex;
    i {
      width: 0.346667rem;
      height: 0.413333rem;
      transform: translateY(2px);
      fill: #fff;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin: 0 0.133333rem;
      font-size: 0.453333rem;
      max-width: 46%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 700;
    }
  }
}
</style>