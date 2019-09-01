<template>
  <div id="app">
   <router-view></router-view>
   <foot v-if="count"/>
  </div>
</template>
<script>
import foot from "./components/Footer.vue";

export default {
  computed: {
    count() {
      return this.$store.state.isTrueOk;
    }
  },
  components: {
    foot
  }
};
</script>
<style lang="scss">
@import "./assets/base.css";
#app{
      background: #fff;
}
</style>
