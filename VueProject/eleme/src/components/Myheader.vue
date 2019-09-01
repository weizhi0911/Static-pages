<template>
  <div class="my">
    <header>
      <div class="box" @click="log">
        <div class="box1">
          <img :src="dizhi" alt>
        </div>
        <div class="box2">
          <p class="one" v-text="title"></p>
          <p class="two">
            <i class="iconfont icon-dianzan"></i>
            <span v-text="user"></span>
          </p>
          <i class="iconfont icon-dianzan arrows"></i>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dizhi:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==",
      title: '登录/注册',
      user: '登录后享受更多特权'
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
    },
    log() {
      var phone = this.getCookie("number");
      // console.log(phone);
      if (phone) {
        this.$router.push({
          name: "info"
        });
      } else {
        this.$router.push({
          name: "login"
        });
      }
    }
  },

  created() {
    var phone = this.getCookie("number");
    // console.log(phone);
    if (phone) {
        this.title = '欢迎您';
        this.user = phone
    } 
  }
};
</script>

<style lang="scss" scoped>
header {
  .box {
    display: flex;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    padding: 0.666667rem 0.4rem;
    color: #fff;
    align-items: center;
    .box1 {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .box2 {
      overflow: hidden;
      margin-left: 0.48rem;
      flex-grow: 1;
      position: relative;
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p.one {
        font-size: 0.56rem;
        margin-bottom: 0.213333rem;
        font-weight: 700;
        display: flex;
        align-items: center;
      }
      p.two {
        display: flex;
        align-items: center;
        font-size: 0.32rem;
      }
      i.arrows {
        position: absolute;
        right: 0px;
        top: 10px;
      }
    }
  }
}
</style>




