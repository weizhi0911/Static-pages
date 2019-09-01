<template>
  <div>
    <section>
      <a href="javascript:;" class="index-1ryAh">
        <p>
          <i class="iconfont icon-dianzan" v-if="bool"></i>
          <span class="index-2FmrF" style="color: rgb(255, 95, 62);" v-if="real">5</span>
          <span class="index-2V-Hh" style="color: rgb(255, 95, 62);" v-if="real">个</span>
        </p>
        <p class="index-3S6cZ">红包</p>
      </a>
      <a href="javascript:;" class="index-1ryAh">
        <p>
          <i class="iconfont icon-dianzan" v-if="bool"></i>
          <span class="index-2FmrF" style="color: rgb(106, 194, 11);" v-if="real">28</span>
          <span class="index-2V-Hh" style="color: rgb(106, 194, 11);" v-if="real">个</span>
        </p>
        <p class="index-3S6cZ">金币</p>
      </a>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bool: 1,
      real: 0
    };
  },
  methods: {
    getCookie(key) {
      //获取cookie值
      var str = document.cookie; //name=malin; psw=123456
      var arr = str.split("; "); //[name=malin,psw=123456]
      for (var ele of arr) {
        var arr2 = ele.split("="); //[name,malin]
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    }
  },
  created() {
    var phone = this.getCookie("number");
    // console.log(phone);
    if (phone) {
      this.bool = 0;
      this.real = 1;
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  display: table;
  width: 100%;
  height: 2.24rem;
  background-color: #fff;
  a.index-1ryAh {
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
    p.index-3S6cZ {
      margin-top: 0.133333rem;
      font-size: 0.32rem;
      line-height: 0.373333rem;
      font-weight: 500;
      color: #666;
      font-weight: 700;
    }
    p span.index-2FmrF {
      padding: 0.453333rem 0 0.293333rem;
      padding: 4.533333vw 0 2.933333vw;
      font-size: 0.693333rem;
      line-height: 0.693333rem;
      line-height: 6.933333vw;
      font-weight: 700;
    }
    p span.index-2V-Hh {
      font-size: 0.32rem;
      line-height: 0.32rem;
      line-height: 3.2vw;
    }
  }
  a.index-1ryAh:not(:last-child) {
    border-right: 1px solid #ddd;
  }
}
</style>


