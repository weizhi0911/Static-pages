<template>
    <div class="city_sel_box" v-show="inauto_isok">
    <div class="city_sel_w">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入城市名或拼音" v-focus v-model="py" @keydown="city_inp_down()">
    </div>
    <div class="gou_w" v-show="filter_city">
      <h3  class="cur_c" v-show="item_city_isok">
        当前定位城市
      </h3>
      <p v-show="item_city_isok"  class="cur_f" style="margin-left:0px;text-indent:1em;">{{city}}</p>
      <dl class="" v-for="(item,index) in arr" :key="index" ref="louceng">
      <dt v-text="item.initial"  class="cur_c"></dt>
      <dd v-for="(t,ind) in item.list" :key="ind"  class="cur_f" @click="city_item_f(t.name)">{{t.name}}</dd>
      </dl>
    </div>
    <div class="filter_city" style="background:#fff" v-show="!filter_city">
      <ul>
        <li v-for="(item,index) in city_num" :key="index" v-text="item" class="cur_f" @click="city_item_f(item)"></li>
      </ul>
      <div class="city_end" v-show="city_end_isok">无结果</div>
    </div>
    <div class="city-2_cDS_0" v-show="inauto_isok">
      <span v-for="(ts,is) in arr" :key="is" v-text="ts.initial" @click="tiao_lou(is,$event)"></span>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: "",
      py: "",
      city_num: [],
      listHeight: 0, //当前显示的楼层
      click_tiao: [] //每个盒子距离顶部的高度
    };
  },
  computed: {
    inauto_isok() {
      return this.$store.state.inauto_isok;
    },
    item_city_isok() {
      return this.$store.state.item_city_isok;
    },
    city() {
      return this.$store.state.city;
    },
    filter_city() {
      return this.$store.state.filter_city;
    },
    city_end_isok() {
      return this.$store.state.city_end_isok;
    }
  },
  async created() {
    this.$store.commit("item_city_isok");
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/city",
      {
        params: {
          ID: 12345
        }
      }
    );
    this.arr = data.city;
    // window.scrollTo(0, 600);
  },
  methods: {
    city_item_f(item) {
      this.$store.commit("city_num_g", item);
      this.$store.commit("load_left");
      this.$store.commit("inauto_isok");
    },
    city_inp_down(py_num) {
      setTimeout(() => {
        if (this.py) {
          this.$store.state.filter_city = 0;
          this.$store.state.filter_city = false;
          this.city_num = [];
          this.arr.forEach(item => {
            item.list.forEach(t => {
              if (
                t.pinyin
                  .toLocaleLowerCase()
                  .indexOf(this.py.toLocaleLowerCase()) !== -1 ||
                t.name.indexOf(this.py) !== -1 //判断表单匹配数据局拼音有无
              ) {
                this.city_num.push(t.name);
              }
            });
          });
          if (this.city_num == false) {
            this.$store.state.city_end_isok = true;
          } else {
            this.$store.state.city_end_isok = false;
          }
        } else {
          this.$store.state.filter_city = 1;
          this.$store.state.filter_city = true;
        }
      }, 100);
    },
    tiao_lou(index, el) {
      // console.log(index);
      // console.log(el);
      // console.log(this.$refs);
      // console.log(this.$refs.louceng[index].offsetTop);
      // // document.body.scrollTop = this.$refs.louceng[index].offsetTop;
      // console.log(this.$refs.louceng[index].offsetTop);
      // console.log(this.$refs.dahezi);
      // window.scrollTo(0, this.$refs.louceng[index].offsetTop);
      // console.log(1);
      // this.$refs.dahezi.scrollTop = 1000;
      this.$emit("give", this.$refs.louceng[index].offsetTop);
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
.cur_f {
  height: 1.333333rem;
  margin-left: 0.4rem;
  line-height: 1.333333rem;
  font-size: 0.37rem;
  // border-bottom: 0.5px solid #ddd;
  background: linear-gradient(#ddd, #ddd 100%, transparent 100%) bottom / 100%
    1px no-repeat;
}
.cur_c {
  font-size: 0.37rem;
  background: linear-gradient(#ddd, #ddd 100%, transparent 100%) bottom / 100%
    1px no-repeat;
  color: #666;
  background: #f5f5f5;
  padding: 0.373333rem 0 0.186667rem 0.4rem;
}
.city_end {
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 0.4rem;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.city_sel_box {
  position: relative;
  .city_sel_w {
    position: sticky;
    left: 0;
    top: 1.163333rem;
    height: 1.173333rem;
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
    i {
      position: absolute;
      left: 0.6rem;
      top: 0.403333rem;
      font-size: 0.2rem;
    }
    input {
      width: 8.666667rem;
      height: 0.8rem;
      line-height: 0.8rem;
      margin-top: 0.186667rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.4rem;
      padding-left: 0.8rem;
    }
  }
  .gou_w {
    background: #fff;
    margin-bottom: -1px;
  }
  .filter_city {
  }
  .city-2_cDS_0 {
    display: flex;
    position: fixed;
    right: 0.266667rem;
    top: 4rem;
    z-index: 1001;
    flex-direction: column;
    span {
      width: 0.533333rem;
      line-height: 0.533333rem;
      color: #999;
      text-align: center;
    }
  }
}
</style>
