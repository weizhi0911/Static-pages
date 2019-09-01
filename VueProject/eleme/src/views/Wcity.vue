<template>
    <div>
        <winautonavi/>
        <wcitySelection @give="give"/>
    </div>
</template>
<script>
import winautonavi from "@/components/Winautonavi.vue";
import wcitySelection from "@/components/WcitySelection.vue";

export default {
  components: {
    winautonavi,
    wcitySelection
  },
  computed: {
    load_left: function() {
      return this.$store.state.load_left;
    }
  },
  methods: {
    give(value) {
      // console.log(value);
      this.$emit("give-box", value);
    }
  }
};
</script>
