<template>
  <div class="autonavi_w">
    <div class="autonavi_w_header">
      <svg  @click="city_dw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 33" class="index-11GLi_0" data-spm-anchor-id="a2ogi.12117543.0.i20"><path fill-rule="evenodd" d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z" class="path1"></path></svg>

      <h2>{{autonaviHeader}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    autonaviHeader() {
      return this.$store.state.autonaviHeader;
    }
  },
  methods: {
    city_dw() {
      this.$store.commit("load_left");
      this.$store.state.inauto_isok = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.autonavi_w {
  position: sticky;
  left: 0px;
  top: 0px;
  z-index: 1000;
  .autonavi_w_header {
    position: relative;
    width: 100%;
    color: #fff;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#0af),
      to(#0085ff)
    );
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    text-align: center;

    // i {
    //   font-size: 0.866667rem;
    //   position: absolute;
    //   left: 0.533333rem;
    // }
    .index-11GLi_0 {
      position: absolute;
      left: 0.333333rem;
      top: 0.333333rem;
      fill: #fff;
      width: 0.533333rem;
      height: 0.533333rem;
    }
    h2 {
      text-align: center;
      font-size: 0.533333rem;
      line-height: 1.173333rem;
    }
  }
}
</style>

