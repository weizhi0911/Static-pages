<template>
    <div class="head">
        <h1><a href="###">腾讯课堂</a></h1>
        <div class="search">
          <router-link to="/search" class="iconfont icon-sousuo tiao_search">
          </router-link>
        </div>
        </div>
</template>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.head {
  display: flex;
  padding: 0 0.26667rem 0 0.4rem;
  height: 1.30667rem;
  align-items: center;
  h1 {
    text-indent: -9999px;

    line-height: 1.30667rem;
    width: 3.06667rem;
    margin-right: 0.21333rem;
    background: #fff
      url(https://nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100)
      center center no-repeat;
    background-size: contain;
  }
  .search {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    .tiao_search {
      margin-right: 0.266667rem;
      font-size: 0.586667rem;
    }
  }
}
</style>

