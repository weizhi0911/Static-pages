<template>
  <div class="find">
    <Fheader/>
    <Frecommend/>
    <Fmore/>
    <Flimit/>
    <Fmore/>
  </div>
</template>
<script>
import Fheader from "@/components/Fheader.vue";
import Frecommend from "@/components/Frecommend.vue";
import Fmore from "@/components/Fmore.vue";
import Flimit from "@/components/Flimit.vue";
export default {
  components: {
    Fheader,
    Frecommend,
    Fmore,
    Flimit
  }
};
</script>
<style lang="scss" >
html {
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #333;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  line-height: 1.2;
  -webkit-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
.find {
  margin-bottom: 60px;
  padding-bottom: 20px;
}
</style>


