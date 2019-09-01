<template>
  <div>
    <ShopHeader/>
    <!-- 点餐 -->
    <Ordering v-show="onl===0" ></Ordering>
    <!-- 评价 -->
    <Appraise v-show="onl===1" ></Appraise>
    <!-- 商家 -->
    <Merchant v-show="onl===2" ></Merchant>
    <ShopFooter/>
    
  </div>
</template>
<script lang="ts">
import BScroll from 'better-scroll';
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '@/components/ShopHeader.vue';
import Ordering from '@/components/Ordering.vue';
import Merchant from '@/components/Merchant.vue';
import Appraise from '@/components/Appraise.vue';
import ShopFooter from '@/components/ShopFooter.vue';



@Component({
  components: {
    ShopHeader,
    Ordering,
    Merchant,
    Appraise,
    ShopFooter,
  },
  created() {
    // 通头部出现
    this.$store.state.isFooter = 0;
    this.$store.state.isshopfooter = 1;

  },
  mounted() {
    window.onscroll = (e) => {
      if (window.scrollY > 261) {
        this.$store.state.isshopTab = true;

      } else {
        this.$store.state.isshopTab = false;
      }
    };


  },
  computed: {
    onl() {
      return this.$store.state.onl;
    },

  },
})
export default class Home extends Vue {}
</script>


