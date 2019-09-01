<template>
  <div class="home">
    <wmarks/>
   <wheader/>
   <wlocation/>
   <winp/>
   <wclassify/>
   <wcombo/>
   <wsort/>
  </div>
</template>
<script>
import wheader from "@/components/Wheader.vue"; // @ is an alias to /src
import winp from "@/components/Winp.vue"; // @ is an alias to /src
import wclassify from "@/components/Wclassify.vue";
import wcombo from "@/components/Wcombo.vue";
import wsort from "@/components/Wsort.vue";
import wlocation from "@/views/Wlocation.vue";
import wmarks from "@/components/Wmarks.vue";

export default {
  components: {
    wmarks,
    wheader,
    winp,
    wclassify,
    wcombo,
    wsort,
    wlocation
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin-bottom: 1.6rem;
  background: #fff;
  // overflow: auto;
}
</style>


