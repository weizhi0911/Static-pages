<template>
  <div>
    <Myheader/>
    <Mymoney/>
    <Mysite/>
  </div>
</template>
<script>
import Myheader from "@/components/Myheader.vue";
import Mymoney from "@/components/Mymoney.vue";
import Mysite from "@/components/Mysite.vue";
export default {
  components: {
    Myheader,
    Mymoney,
    Mysite
  }
}
</script>
<style lang="scss">
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
</style>


