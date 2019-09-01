<template>
  <div class="w-sort">
    <h2>推荐商家</h2>
    <div class="sort-w-box">
      <ul class="sort_item_w">
        <li>
          <a to="/home/ranking" @click="ranking_show_zong">{{zong_w_inner}}</a>
          <span></span>
        </li>
        <li>距离最近</li>
        <li>品质联盟</li>
        <li>
          <a to="/screen">筛选</a>
          <i class="iconfont icon-shaixuan"></i>
        </li>
      </ul>
      <div class="ranking">
        <div class="ranking_box_w1" v-show="ranking_w1_isok">
          <ul>
            <li
              v-for="(s,i) in arr"
              :key="i"
              :style="`color:${i==ranking_cur?'#3190e8':''}`"
              @click="ranking_click(i,s.name)"
            >
              {{s.name}}
              <img
                :style="`display:${i==ranking_cur?'block':'none'}`"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                class="selected_w"
              >
            </li>
          </ul>
        </div>
        <div class="ranking_box_w2" v-show="ranking_w2_isok"></div>
      </div>
    </div>

    <div class="login-w-m" v-if="cookie_name">
      <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt>
      <h3>没有结果</h3>
      <p>登录后查看更多商家</p>
      <router-link class="login" to="/login">登录</router-link>
    </div>

    <div @click="list_router" class="list_e_w" v-if="!cookie_name">
      <div class="item_w clearfix" v-for="(k,ind) in sort_item_w" :key="ind">
        <img
          class="item_img1_w fl"
          :src="`https://fuss10.elemecdn.com/${insertStr(insertStr(k.items.restaurant.image_path,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(k.items.restaurant.image_path,1,'/'),4,'/')+'.png':insertStr(insertStr(k.items.restaurant.image_path,1,'/'),4,'/') + '.jpeg'}`"
          alt
        >
        <div class="item_w_lt fr">
          <section class="content_1_w clearfix">
            <h3 class="fl" v-text="k.items.restaurant.name"></h3>
            <span class="fr">···</span>
          </section>
          <section class="content_2_w">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
              alt
            >
            <span v-text="k.items.restaurant.rating"></span>
            <span>
              {{`${ JSON.parse(k.items.restaurant.business_info)
              .recent_order_num_display}`}}单
            </span>
            <i class="fr"></i>
          </section>
          <section class="clearfix content_3_w">
            <div class="fl">
              <span>￥{{k.items.restaurant.piecewise_agent_fee.rules[0]['price']}}起送</span>
              <span class="peisong">{{k.items.restaurant.piecewise_agent_fee.description}}</span>
            </div>
            <div class="fr">
              <span>17km</span>
              <span>34分钟</span>
            </div>
          </section>
          <section class="content_4_w">
            <span
              v-for="(ks,inds) in k.items.restaurant.support_tags"
              :key="inds"
              v-text="ks.text"
              :style="{'color':ks.color,'borderColor':'#'+ks.border}"
            ></span>
            <b
              class="zhuan"
              v-text="`${k.items.restaurant.delivery_mode?k.items.restaurant.delivery_mode.text:''}`"
            ></b>
          </section>
          <section class="content_5_w clearfix">
            <div class="c5_box fl">
              <div class="c5_le">
                <span class="jian_red">减</span>
                <span
                  class="jian_p"
                  v-text="`${k.items.restaurant.activities[0]?k.items.restaurant.activities[0].description:''}`"
                ></span>
              </div>
              <div class="c5_le">
                <span class="jian_red">特</span>
                <span>特价商品8.8元</span>
              </div>
            </div>
            <div class="fr huodong">
              <span>4个活动</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                alt
              >
            </div>
          </section>
        </div>
      </div>
    </div>
    <img
      v-show="loading_isok"
      class="loading"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560592832689&di=63953333a337ceb70dbb17d8f7ce3758&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658"
      alt
    >
    <div class v-show="load_zheng" style="width:100%;text-align:center;">
      <img
        style="width:1rem;height:1rem"
        src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif"
        alt
      >
      正在加载
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    loading_isok() {
      return this.$store.state.loading_isok;
    },
    load_zheng() {
      return this.$store.state.load_zheng;
    },
    cookie_name() {
      return this.$store.state.cookie_name;
    }
  },
  data() {
    return {
      arr: "", //排序头部点击数据
      sort_item_w: "", //商品数据
      page: 1, //商品数据页数
      pageSize: 10, //商品数据个数
      load_w: "", //获取整个网页的高度
      stor_arr: ["综合排序", "距离最近", "品质联盟", "筛选"],
      ranking_cur: -1, //点击综合排序样式
      ranking_w1_isok: false,
      ranking_w2_isok: false,
      ranking_box_isok: false,
      zong_w_inner: "综合排序",
      sort_w_g: "" //根据数值排序
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/sort",
      {
        params: {
          ID: 12345
        }
      }
    );
    // console.log(data.outside);
    // console.log(data.outside[0].items.restaurant.business_info);
    this.arr = data.outside.inside_sort_filter;
    if (this.getCookie("number")) {
      this.$store.state.cookie_name = false;
    } else {
      this.$store.state.cookie_name = true;
    }
    this.init();
  },
  mounted() {
    window.addEventListener("scroll", this.homescroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.homescroll);
    this.$store.state.mark_isok = false;
    this.move();
  },
  methods: {
    homescroll() {
      //滚动条滑动加载
      // console.log(document.body.scrollHeight - window.innerHeight);
      // console.log(window.scrollY);
      if (this.getCookie("number")) {
        this.load_w = document.body.scrollHeight - window.innerHeight;
        if (window.scrollY >= this.load_w) {
          // console.log("ok");
          this.page++;
          this.init();
        } else {
          console.log("我滚了");
        }
      }
    },
    async init() {
      if (this.sort_item_w) {
        this.$store.state.load_zheng = true;
        this.$store.state.loading_isok = false;
      } else {
        this.$store.state.loading_isok = true;
      }
      // setInterval(()=>{
      console.log("列表页运行");
      let item_data = await this.$axios.get(
        //商品列表
        `https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/item?page=${
          this.page
        }&pageSize=${this.pageSize}`,
        {
          params: {
            ID: 12345
          }
        }
      );
      // console.log(item_data.data.data);
      // console.log(
      //   item_data.data.data[0].items.restaurant.piecewise_agent_fee.rules[0]
      // );
      this.sort_item_w = [...this.sort_item_w, ...item_data.data.data];
      this.$store.state.load_zheng = false;
      if (this.sort_item_w) {
        this.$store.state.loading_isok = false;
      }

      // },1000)
    },
    getCookie: function(c_name) {
      //获取cookit
      if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          var c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) c_end = document.cookie.length;
          return unescape(document.cookie.substring(c_start, c_end));
        }
      }
      return "";
    },
    insertStr: function(soure, start, newStr) {
      //字符串里插字符串
      return soure.slice(0, start) + newStr + soure.slice(start);
    },
    ranking_click(index, item) {
      this.zong_w_inner = item;
      this.ranking_cur = index;
      this.ranking_box_isok = false;
      this.ranking_w1_isok = false;
      this.$store.state.mark_isok = !this.$store.state.mark_isok; //遮罩层
      if (this.$store.state.mark_isok) this.stop();
      if (this.$store.state.mark_isok == false) this.move();
      //点击排序
    },
    ranking_show_zong() {
      this.ranking_box_isok = !this.ranking_box_isok; //大盒子
      this.ranking_w1_isok = !this.ranking_w1_isok; //综合盒子
      this.$store.state.mark_isok = !this.$store.state.mark_isok; //遮罩层
      // console.log(this.$store.state.mark_isok);
      if (window.scrollY <= 700) window.scrollTo(0, 700);
      if (this.$store.state.mark_isok) this.stop();
      if (this.$store.state.mark_isok == false) this.move();
    },
    /***滑动限制***/
    stop() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    /***取消滑动限制***/
    move() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },
    list_router() {
      this.$router.push({ path: "shop" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.loading {
  width: 4rem;
  height: 4rem;
  background: #fff;
  transform: translateX(3rem);
  position: relative;
}
.w-sort {
  // padding-bottom: 0.266667rem;
  h2 {
    line-height: 0.96rem;
    font-size: 0.4rem;
    color: #000;
    justify-content: center;
    display: flex;
    position: relative;
  }
  h2::before {
    display: block;
    content: "";
    width: 0.533333rem;
    width: 5.333333vw;
    height: 0.026667rem;
    height: 0.266667vw;
    background-color: #999;
    position: absolute;
    top: 50%;
    left: 35%;
  }
  h2::after {
    display: block;
    content: "";
    width: 0.533333rem;
    width: 5.333333vw;
    height: 0.026667rem;
    height: 0.266667vw;
    background-color: #999;
    position: absolute;
    top: 50%;
    right: 35%;
  }
  .sort-w-box {
    line-height: 1.04rem;
    width: 100%;
    background: #fff;
    position: sticky;
    left: 0;
    top: 1.36rem;
    z-index: 100;
    .sort_item_w {
      width: 100%;
      display: flex;
      //  justify-content: center;
      li {
        width: 25%;
        text-align: center;
        color: #666;
        font-size: 0.373333rem;
        a {
          color: #666;
          font-size: 0.373333rem;
        }
        span {
          border-style: solid;
          border-width: 0.106667rem;
          display: inline-block;
          border-color: #333 transparent transparent transparent;
        }
        b {
          font-weight: normal;
        }
        i {
          font-size: 0.32rem;
          margin-left: 2px;
        }
      }
    }
    .ranking {
      width: 100%;
      background: #fff;
      position: absolute;
      ul {
        li {
          padding-left: 0.533333rem;
          line-height: 1.066667rem;
          font-size: 0.35rem;
          position: relative;
          img {
            position: absolute;
            right: 0.373333rem;
            top: 50%;
            width: 0.4rem;
            height: 0.4rem;
            display: none;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  section {
    margin-top: 0.133333rem;
  }
  .login-w-m {
    text-align: center;
    img {
      width: 5.333333rem;
      height: 5.333333rem;
    }
    h3 {
      margin: 0.333333rem 0 0.266667rem;
      margin: 3.333333vw 0 2.666667vw;
      color: #6a6a6a;
      font-weight: 400;
      font-size: 0.453333rem;
    }
    p {
      margin: 0 0 0.333333rem;
      margin: 0 0 3.333333vw;
      color: #999;
      font-size: 0.306667rem;
    }
    .login {
      padding: 0.266667rem;
      padding: 2.666667vw;
      min-width: 3.2rem;
      min-width: 32vw;
      border: none;
      border-radius: 0.053333rem;
      border-radius: 0.533333vw;
      background-color: #56d176;
      color: #fff;
      text-align: center;
      font-size: 1.2em;
      font-family: inherit;
    }
  }
  .list_e_w {
    border-bottom: 0.013333rem solid #eee;
    background-color: #fff;
    color: #666;
    padding: 0.4rem 0;
    list-style: none;
    // font-size: 0.293333rem;
    line-height: normal;
    .item_w {
      padding: 0.4rem 0.266667rem;
      .item_img1_w {
        width: 1.733333rem;
        height: 1.733333rem;
      }
      span {
        margin-right: 0.106667rem;
        font-size: 0.093333rem;
      }
      .jian_red {
        background-color: rgb(240, 115, 115);
        color: #fff;
        padding: 0.053333rem;
        font-size: 0.093333rem;
      }
      .item_w_lt .content_1_w {
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          font-size: 0.4rem;
          color: #333;
          overflow: hidden;
        }
        span {
          float: right;
        }
      }
      .content_2_w {
        img {
          margin-right: 0.106667rem;
        }
      }
      .peisong::before {
        margin: 0 0.017067rem;
        margin: 0 0.08rem;
        color: #ddd;
        content: "|";
      }
      .content_4_w {
        display: flex;
        align-items: center;
        position: relative;

        span {
          margin-right: 0.133333rem;
          margin-bottom: 0.106667rem;
          border-width: 0.5px;
          border-style: solid;
        }
        .zhuan {
          border-radius: 0.04rem;
          line-height: 1.2;
          font-size: 0.266667rem;
          background: #0af;
          color: #fff;
          position: absolute;

          right: 0px;
        }
      }
      .content_5_w {
        // display: flex;
        width: 7.466667rem;

        .c5_box {
          width: 5.603333rem;
          padding-right: 0.266667rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
          // flex: 1;
          .c5_le {
            width: 5.803333rem;
            margin-bottom: 0.16rem;
            .jian_p {
              display: inline-block;
              width: 4.893333rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              vertical-align: middle;
            }
          }
        }
        .huodong {
          span {
            font-size: 0.066667rem;
          }
          img {
            width: 0.133333rem;
            height: 0.133333rem;
          }
        }
      }
    }
  }
}
</style>
