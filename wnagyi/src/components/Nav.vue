<template>
    <div class="nav">
         <ul>
             <li v-for="(t,index) in arr" :key="index">
                 <a href="">
                     <img :src="t.imgs" alt="">
                  </a>
                 <span v-text="t.title"></span>
             </li>
         </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "微专业",
          imgs:
            "https://edu-image.nosdn.127.net/fbbf1cfc-45f2-4a42-bcbb-df5cad63d3c2.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "职场提升",
          imgs:
            "https://edu-image.nosdn.127.net/23444883-fc1a-4972-8a22-591e5b790ee0.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "编程开发",
          imgs:
            "https://edu-image.nosdn.127.net/b216231d-4b93-4d5c-8e7c-e22389f194b8.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "人工智能",
          imgs:
            "https://edu-image.nosdn.127.net/55329cd44f7142c7b2eaaca1a68e2430.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "产品与运营",
          imgs:
            "https://edu-image.nosdn.127.net/8f2db166988542c2b720f418e6330500.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "设计创意",
          imgs:
            "https://edu-image.nosdn.127.net/dd3fdff7aeea4b37af8d623be3695331.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "电子商务",
          imgs:
            "https://edu-image.nosdn.127.net/c0c090e1872748ff8cec40ed03b3e476.png?imageView&quality=100&thumbnail=103y103"
        },
        {
          title: "语音学习",
          imgs:
            "https://edu-image.nosdn.127.net/fbbf1cfc-45f2-4a42-bcbb-df5cad63d3c2.png?imageView&quality=100&thumbnail=103y103"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.nav {
  ul {
    display: flex;
    flex-wrap:wrap;
    padding-bottom:.68rem;
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      margin-top: 0.53333rem;
      align-items: center;
      a {
        width: 1.1875rem;
        height: 1.1875rem;
        img {
          width: 1.1875rem;
          height: 1.1875rem;
        }
      }
    }
  }
}

</style>

