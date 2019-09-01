<template>
  <div>
    <ul class="main-22cQX">
      <li class="main-3Idiu">
        <span>登录密码</span>
        <span class="main-2cJz_">
          <span class="main-3ED6M">修改</span>
        </span>
      </li>
      <!---->
    </ul>
    <button type="button" class="main-aGw6s" @click='quit'>退出登录</button>
  </div>
</template>
<script>
export default {
    created() {
    return (this.$store.state.isFooter = 0);
  },
  methods: {
    setCookie(key, value, iDay) {
      //key:键名   value：键值    iDay：失效时间
      //document.cookie = 'name=malin;expires=20190527;path=/';
      var now = new Date();
      now.setDate(now.getDate() + iDay); //iDay:5天后失效， -1：立即失效
      document.cookie = key + "=" + value + ";expires=" + now + ";path=/";
    },
    removeCookie(key) {
      //删除cookie。把这个值变成失效
      this.setCookie(key, "", -1); //设置成过去的时间
    },
    quit(){
        this.removeCookie('number');
        this.$router.push({
            name: 'my'
        });
        this.$store.state.isFooter = 1
    }
  },
  destroyed(){
    this.$store.state.isFooter = 1
  }
};
</script>
<style lang="scss" scoped>
ul.main-22cQX {
  background-color: #fff;
  width: 100%;
  font-size: 0.426667rem;
  color: #333;
  .main-3Idiu {
    padding: 0.266667rem 0.373333rem;
    padding: 2.666667vw 3.733333vw;
    cursor: pointer;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    span.main-2cJz_ {
      color: #666;
      span.main-3ED6M {
        color: #0097ff;
      }
    }
  }
}
button.main-aGw6s {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.373333rem 0;
  margin: 2.533333rem 0;
  color: #ff5339;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  font-size: 0.426667rem;
  font-weight: 700;
  background-color: #fff;
}
</style>


