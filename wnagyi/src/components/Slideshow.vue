<template>
     <div class="swiper-container" id="swiper_box">
    <div class="swiper-wrapper swiper_list">
      <div class="swiper-slide" v-for="(t,index) in imgList" :key="index">
          <a href="###">
              <img :src="t">
          </a>
      </div>
    </div>
    <div class="swiper-pagination btn"></div>
  </div>
</template>
<script>
import "../assets/swiper.min.js";
export default {
  data() {
    return {
      imgList: [
        "https://edu-image.nosdn.127.net/c9730b40bc9e4a6d9e4925f35beb2533.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp",
        "https://edu-image.nosdn.127.net/e6def5e4f7b944a7aed683a866e20157.png?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp",
        "https://edu-image.nosdn.127.net/b8f661882d244a34aff53b558f8d3a67.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp",
        "https://edu-image.nosdn.127.net/78f2c7477be54db7956c7e24e8649d11.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp",
        "https://edu-image.nosdn.127.net/24145607eb7044dca23d73e375206453.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp",
        "https://edu-image.nosdn.127.net/7bed2a9d40f84e94a513b460b91ccde2.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp",
        "https://edu-image.nosdn.127.net/19814caedade4eb0846c0520fa05a331.jpg?imageView&crop=0_0_1242_573&quality=100&thumbnail=750y346&type=webp"
      ]
    };
  },
  mounted: function() {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
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
@import "../assets/swiper.min.css";
#swiper_box {
  height: 5.375rem;
  position: relative;
  width: 100%;
  .swiper_list {
    height: 5.375rem;
    width: 100%;
    .swiper-slide {
      a {
        height: 5.375rem;
        width: 100%;
        display: inline-block;
        img {
          height: 5.375rem;
        }
      }
    }
  }
  .btn {
    position: absolute;
    left: 0px;
    bottom: 0.5rem;
  }
}
</style>



