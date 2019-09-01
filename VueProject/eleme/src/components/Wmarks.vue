<template>
    <div class="filtermodal" v-show="mark_isok"></div>
</template>
<script>
export default {
  computed: {
    mark_isok() {
      return this.$store.state.mark_isok;
    }
  }
};
</script>
<style lang="scss" scoped>
.filtermodal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(0.133333rem);
  backdrop-filter: blur(0.133333rem);
}
</style>

