<template>
  <div>
    <xheader/>
    <slideshow/>
    <navs/>
    <classroom/>
  </div>
</template>
<script>
import xheader from "../components/Header.vue";
import slideshow from "../components/Slideshow.vue";
import navs from "../components/Nav.vue";
import classroom from "../components/Classroom.vue";

export default {
  components: {
    xheader,
    slideshow,
    navs,
    classroom
  },
  created(){
    this.$store.state.isTrueOk = 1;
    console.log(this.$store.$state);
  }
};
</script>