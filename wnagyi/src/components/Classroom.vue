<template>
<div class="room">
    <div v-for="(t,index) in arr" :key="index" class="room_list">
  <div class="top_12"></div>
  <div class="room_item">
        <h2 v-text="t.sectionName"></h2>
        <div class="images_box">
            <ul>
                <li v-for="(item,ind) in t.elementDtoList" :key="ind"> 
                    <a href="###">
                        <img :src="item.photoUrl">
                    </a>
                    <span v-text="item.name"></span>
                    <i v-text="item.courseCardVo?'￥' +item.courseCardVo.yktCourseCardv.price:''"></i>
               </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ""
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/wangyishouye",
      {
        params: {
          ID: 12345
        }
      }
    );
    // console.log(data.result.sectionDtoList);
    this.arr = data.result.sectionDtoList;
  }
};
</script>
<style lang="scss" scoped>
.room {
  .room_list {
    .top_12 {
      height: 0.32rem;
      width: 100%;
      background-color: #f2f4f7;
    }
    .room_item {
      width: 92%;
  margin: 0 auto;
      h2 {
        padding-top: 0.4rem;
        line-height: 0.453333rem;
        font-size: 0.453333rem;
        font-weight: bold;
        color: #3c4a55;
        margin-bottom: 0.4rem;
      }
      .images_box {
        margin:auto;
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            display: flex;
            margin-bottom: 0.693333rem;
            flex-direction: column;
            width: 4.48rem;

            a {
              img {
                width: 4.48rem;
                height: 2.506667rem;
              }
            }
            span {
              width: 100%;
              font-size: 0.426667rem;
            }
            i {
              font-size: 0.426667rem;
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>

