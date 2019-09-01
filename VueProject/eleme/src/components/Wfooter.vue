<template>
  <nav v-if="isshowFooter">
    <a
      class="foot_item"
      v-for="(t,index) in footlist"
      :key="index"
      :class="{'cur':cur_num==index}"
      @click="cur_click(index)"
    >
      <i class="iconfont" :class="t.icon"></i>
      <span v-text="t.title"></span>
    </a>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      footlist: [
        {
          title: "首页",
          icon: "icon-shouye",
          url: "home"
        },
        {
          title: "发现",
          icon: "icon-faxian",
          url: "find"
        },
        {
          title: "订单",
          icon: "icon-tianchongxing-",
          url: "order"
        },
        {
          title: "我的",
          icon: "icon-weibiaoti-_huabanfuben",
          url: "my"
        }
      ]
    };
  },
  methods: {
    cur_click(index) {
      this.$store.state.cur_num = index;
      // index 你点击的当前所在位置
      // console.log(index);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      this.$router.push({
        //path
        name: this.footlist[index].url
      });
      //记录位置
    }
  },

  computed: {
    isshowFooter() {
      return this.$store.state.isFooter;
    },
    cur_num() {
      return this.$store.state.cur_num;
    }
  },
  created() {
    console.log(this.$router.app._route);
    if (this.$router.app._route.name == "home") {
      this.$store.state.cur_num = 0;
    } else if (this.$router.app._route.name == "find") {
      this.$store.state.cur_num = 1;
    } else if (this.$router.app._route.name == "order") {
      this.$store.state.cur_num = 2;
    } else if (this.$router.app._route.name == "my") {
      this.$store.state.cur_num = 3;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
nav {
  width: 100%;
  height: 1.2rem;
  padding-top: 0.4rem;
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: flex;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  .foot_item {
    display: flex;
    flex-direction: column;
    width: 25%;
    color: #8e8e93;
    align-items: center;
  }
  .cur {
    color: #0085ff;
  }
}
</style>
