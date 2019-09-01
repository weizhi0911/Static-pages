<template>
    <div class="combo">
        <div class="combo-box">
        <div class="combo_left">
            <h2>
                品质套餐
            </h2>
            <p>
                搭配齐全吃的好
            </p>
            <span>立即抢购 &gt;</span>
        </div>
        <a href="###">
            <img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" alt="">
        </a>
        </div>
         <div class="swiper-container swiper-container2" id="combo_swipre">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(t,index) in img_list" :key="index">
          <img :src="t" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
    </div>
</template>
<script>
import "../assets/js/swiper.min.js";

export default {
  data() {
    return {
      img_list: [
        "https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
        "https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
        "https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
      ]
    };
  },
  mounted: function() {
    var swiper = new Swiper(".swiper-container2", {
      pagination: {
        el: ".swiper-pagination2"
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/swiper.min.css";

.combo {
    margin-top:.266667rem;
  padding: 0 0.266667rem;
  .combo-box {
    background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
    height: 2.933333rem;
    padding: 0.32rem 0 0 0.4rem;
    display: flex;
    justify-content: space-between;
    .combo_left {
      h2 {
        font-size: 0.453333rem;
        font-weight: 700;
        margin-bottom: 0.133333rem;
        margin-bottom: 1.333333vw;
        color: #333;
      }
      p {
        font-size: 0.346667rem;
        color: #777;
        margin-bottom: 0.24rem;
      }
      span {
        font-size: 0.32rem;
        color: #af8260;
        font-weight: 700;
      }
    }
    a {
      img {
        width: 3.2rem;
        height: 2.133333rem;
        margin-right:.533333rem;
      }
     .swiper-pagination-bullet{
    width: .24rem;
    height: .04rem;
    border-radius: 0;
     }
    }
  }
  #combo_swipre {
    margin-top: 0.133333rem;
    border-radius: 0.106667rem;
    width: 100%;
    height: 2.346667rem;
    img {
      width: 100%;
      height: 2.346667rem;
    }
  }
}
</style>
