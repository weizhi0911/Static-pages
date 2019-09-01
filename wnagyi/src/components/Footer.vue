<template>
    <div class="foot">
        <ul>
            <li v-for="(t,index) in icon" :key="index" :class="{'curs':cur==index}" @click="click_cur(index)">
                <i class="iconfont" :class="t.iconClass"></i>
                <span v-text="t.name"></span>
            </li>
        </ul>
   </div>
</template>
<script>
export default {
  data() {
    return {
      arr: "",
      cur: 0,
      icon: [
        { iconClass: "icon-xiazai45", name: "首页", touter: "home" },
        { iconClass: "icon-xuexishuben", name: "我的学习", touter: "login" },
        { iconClass: "icon-account", name: "帐号", touter: "my" }
      ]
    };
  },

  methods: {
    click_cur(index) {
      this.cur = index;
      if (this.icon[index].touter == "home") this.$store.state.isTrueOk = 1;
      if (this.icon[index].touter == "login") {
        this.$store.state.isTrueOk = 0;
        console.log(this.$store.state.isTrueOk);
      }
      if (this.icon[index].touter == "my") this.$store.state.isTrueOk = 1;
      this.$router.push({ name: this.icon[index].touter });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.curs {
  color: red;
}
.foot {
  position: fixed;
  width: 100%;
  left: 0px;
  bottom: 0px;
  height: 1.28rem;
  box-shadow: 0px -1px 1px #ccc;
  background: #fff;
  z-index: 999;
  ul {
    display: flex;
    height: 1.28rem;

    justify-content: space-between;
    flex-direction: center;
    li {
      display: flex;
      width: 33.33%;
      height: 1.28rem;

      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      i {
        font-size: 0.586667rem;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>

