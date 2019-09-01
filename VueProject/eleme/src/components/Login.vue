<template>
  <div style="background: #fff; width: 100%;
    height: 100%;">
    <div class="App-1EAON">
      <!---->
      <div class="App-3Q8Qb">
        <div class="LoginHeader-1jXn6">
          <img :src="url" class="LoginHeader-85WpV">
        </div>
        <!---->
        <div>
          <form class="MessageLogin-iYvWA">
            <section class="MessageLogin-FsPlX">
              <input type="tel" maxlength="11" placeholder="手机号" class="user">
              <button disabled="disabled" class="CountButton-3e-kd" ubt-click="101161">获取验证码</button>
            </section>
            <section class="MessageLogin-FsPlX">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
            <div id="slideVerify" class="nc-container"></div>
            <section class="MessageLogin-15xD9">
              新用户登录即自动注册，并表示已同意
              <a
                href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
              >《用户服务协议》</a>
            </section>
            <button class="SubmitButton-2wG4T" type="button" @click="login_user">登录</button>
          </form>
          <!---->
          <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
          <span class="advice"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png"
    };
  },
  created() {
    return (this.$store.state.isFooter = 0);
  },
  methods: {
    login_user() {
      // const _this = this;
      var username = $(".user").val();
      $(".advice").css("display", "block");
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(username)) {
        $(".advice").css("display", "none");
        // console.log(username);
        this.setCookie("number", username, 1);
        this.$router.push({
          name: "my"
        });
        this.$store.state.isFooter = 1;
        this.$store.state.cur_num = 3;
      } else {
        $(".advice").text("请填写手机号码");
      }
    },
    setCookie(key, value, iDay) {
      //key:键名   value：键值    iDay：失效时间
      //document.cookie = 'name=malin;expires=20190527;path=/';
      var username = $(".user").val();
      var now = new Date();
      now.setDate(now.getDate() + iDay); //iDay:5天后失效， -1：立即失效
      document.cookie = key + "=" + value + ";expires=" + now + ";path=/";
    }
  },
  destroyed(){
    return (this.$store.state.isFooter = 1);
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/login.css";
</style>

