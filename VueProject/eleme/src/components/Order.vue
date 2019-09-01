<template>
    <!-- 未登录隐藏 -->
    <div>
      <orderList/>
    </div>
</template>
<script>

import wheader from "@/components/Wheader.vue"; // @ is an alias to /src
import orderList from "@/components/orderList.vue"; // @ is an alias to /src

export default {
  components: {
    // "orderList":resolve=>(['./order'],resolve)
    orderList
  },
<<<<<<< HEAD
  created() {

=======
  methods:{
    getCookie(key) {
      //获取cookie值
      var str = document.cookie; //name=malin; psw=123456
      var arr = str.split("; "); //[name=malin,psw=123456]
      for (var ele of arr) {
        var arr2 = ele.split("="); //[name,malin]
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    }
  },
  created(){
    var phone = this.getCookie("number");
    if(phone){
      this.$router.push({
        name: 'order'
      })
    }else{
      this.$router.push({
        name: 'no_log'
      })
    }
>>>>>>> c9d2e0a6ce021fc9e366e8fbf905c3d6a35960d7
  }

};
</script>

<style>
@import "../assets/css/orderTwo.css";
</style>
