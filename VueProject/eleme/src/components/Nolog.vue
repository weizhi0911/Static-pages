<template>
  <div>
    <section>
      <img :src="url">
      <h3>登录后查看外卖订单</h3>
      <!---->
      <router-link class="box" to="/login" >立即登录</router-link>
    </section>
  </div>
</template>
<script>
export default {
    data(){
        return{
            url: "//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
        } 
    }
};
</script>
<style lang="scss" scoped>
section {
  margin-top: 2.666667rem;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  img {
    display: block;
    width: 5.333333rem;
    width: 53.333333vw;
    max-width: 100%;
  }
  h3 {
    margin: 0.333333rem 0 0.266667rem;
    margin: 3.333333vw 0 2.666667vw;
    color: #6a6a6a;
    font-weight: 400;
    font-size: 0.453333rem;
  }
  .box {
    padding: 0.266667rem;
    padding: 2.666667vw;
    min-width: 3.2rem;
    min-width: 32vw;
    border: none;
    border-radius: 0.053333rem;
    border-radius: 0.533333vw;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    font-family: inherit;
  }
}
</style>


