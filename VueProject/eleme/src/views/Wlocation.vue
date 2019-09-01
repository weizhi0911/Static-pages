<template>
    <div class="location" :style="{'right':'-'+load_left,'left':load_left}" ref="dahezi">
        <wautonavi/>
        <wcity  @give-box="give_box"/>
    </div>
</template>
<script>
import wautonavi from "@/components/Wautonavi.vue";
import winautonavi from "@/components/Winautonavi.vue";
import wcity from "@/views/Wcity.vue";

export default {
  components: {
    wautonavi,
    winautonavi,
    wcity
  },
  computed: {
    load_left: function() {
      return this.$store.state.load_left;
    }
  },
  methods: {
    give_box(value) {
      // console.log(value);
      this.$refs.dahezi.scrollTop = value - 44;
    }
  }
  // mounted() {
  //   this.$on("give", data => {
  //     console.log(data);
  //   });
  // }
  // methods: {
  //   click() {
  //     console.log(this.$refs);
  //     // this.$refs.dahezi.scrollTop = 1000;

  //   }
  // }
};
</script>
<style lang="scss" scoped>
.location {
  transition: all 0.3s;
  position: fixed;
  top: 0;
  //   left: 100%;
  //   right: 0;
  bottom: 0;
  z-index: 1000;
  overflow: auto;
  background-color: #f4f4f4;
  -webkit-animation: index-1dF3G_0 0.3s;
  animation: index-1dF3G_0 0.3s;
  -webkit-overflow-scrolling: touch;
}
</style>
