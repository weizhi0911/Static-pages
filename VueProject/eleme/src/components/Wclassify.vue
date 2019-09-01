<template>
    <div class="classify">
         <div class="swiper-container" id="swiper_box">
    <div class="swiper-wrapper swiper_list">
      <div class="swiper-slide">
              <a  v-for="(t1,index1) in arrbefor" :key="index1">
                  <img :src="t1.image">
                  <span v-text="t1.name"></span>
              </a>
      </div>
        <div class="swiper-slide">
              <a  v-for="(t2,index2) in arrafter" :key="index2">
                  <img :src="t2.image">
                  <span v-text="t2.name"></span>
              </a>
      </div>
    </div>
    <div class="swiper-pagination btn"></div>
  </div>
    </div>
</template>
<script>
import "../assets/js/swiper.min.js";
export default {
  data() {
    return {
      arrbefor: "",
      arrafter: ""
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/classify",
      {
        params: {
          ID: 12345
        }
      }
    );
    this.arrbefor = data[0].entries.slice(0, 10);
    this.arrafter = data[0].entries.slice(10, -1);
  },
  mounted: function() {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/swiper.min.css";

.classify {
  height: 4.72rem;
  #swiper_box {
    height: 100%;
    .swiper_list {
      .swiper-slide {
        display: flex;
        flex-wrap: wrap;
        //   justify-content: space-between;
        a {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #666;
          margin-top: 0.293333rem;
          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: -2px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
}
</style>
