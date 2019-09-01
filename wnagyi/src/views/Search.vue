<template>
    <div class="search">
        <div class="search_box">
        <div class="search_item">
            <input type="tetx" :placeholder ="place">
        </div>
        <a href="###">搜索</a>
        </div>
        <div class="rot">
            <h2>热门</h2>
            <ul>
                <li v-for="(t,index) in arr.recomHotword" :key="index">
                    <a href="" v-text="t.name"></a>
                </li>
            </ul>
            </div>
    </div>
</template>
<script>
export default {
  // methods:{
  //vuex获取axios
  //     getDataVuex(){
  //         this.$store.dispatch('add').then(res=>{
  //             console.log(this.$store.state.information);
  //         })
  //     }
  // },
  // created(){
  //     this.getDataVuex()
  // }
  data() {
    return {
      arr: "",
      place: "",
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/wangyisrach",
      {
        params: {
          ID: 12345
        }
      }
    );
    // console.log(data.result);
    this.arr = data.result;
    this.place = data.result.topHotword.name;
  },

};
</script>

<style lang="scss" scoped>
.search {
  .search_box {
    display: flex;
    align-items: center;
    height: 1.2rem;
    padding: 0.13333rem 0 0.13333rem 0.4rem;
    background: #f6f6f6;
    .search_item {
      display: block;
      width: 8rem;
      background: #fff
        url(http://edu-image.nosdn.127.net/d81f836b-b37f-43fa-85de-98acdbc9478b.png?imageView&quality=100)
        0.26667rem center no-repeat;
      background-size: 0.32rem 0.32rem;
      border: 0.02667rem solid #e6eaf2;
      border-radius: 0.45333rem;
      outline: none;
      box-sizing: border-box;
      height: 0.90667rem;
      font-size: 0.37333rem;
      color: #3c4a55;
      text-indent: 0.8rem;
      input {
        height: 0.853333rem;
        border: 0px;
        width: 6.666667rem;
      }
    }
    a {
      flex: 1;
      // align-self:center;
      text-align: center;
      line-height: 100%;
      color: #2cc17b;
      font-size: 0.4rem;
    }
  }
  .rot {
    background: #fff;
    padding: 0.4rem;
    h2 {
      font-size: 0.37333rem;
      color: #3c4a55;
      line-height: 0.4rem;
      padding-bottom: 0.05333rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        a {
          font-size: 0.37333rem;
          line-height: 0.37333rem;
          margin: 0.4rem 0.32rem 0 0;
          border: 0.02667rem solid #e6eaf2;
          border-radius: 0.45333rem;
          max-width: 100%;
          display: inline-block;
          color: #8891a7;
          padding: 0.24rem 0.32rem;
        }
      }
    }
  }
}
</style>

