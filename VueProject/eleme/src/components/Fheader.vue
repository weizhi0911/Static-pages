<template>
  <div>
    <section class="parts unmerge">
      <div class="entry list3">
        <a ubt-click="1757" ubt-data-url="https://h5.ele.me/exchange/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
            <p class="tips two">0元好物在这里</p>
          </div>
          <img
            loading
            class="icon one"
            src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
          >
          <img style="display: none;">
        </a>
        <a ubt-click="1757" ubt-data-url="https://h5.ele.me/commend/#/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
            <p class="tips">20元现金拿不停</p>
          </div>
          <img
            loading
            class="icon"
            src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
          >
          <img style="display: none;">
        </a>
        <a ubt-click="1757" ubt-data-url="/discover/koubei/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
            <p class="tips">领取口碑好券</p>
          </div>
          <img
            loading
            class="icon"
            src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
          >
          <img style="display: none;">
        </a>
      </div>
      <!---->
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
section {
  margin-bottom: 0.28rem;
  border-top: 1px solid #eee;
  border-bottom: none;
  background: initial;
}
.entry {
  border-width: 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.entry.list3 {
  position: relative;
}
.unmerge > .entry:first-child {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
}
.unmerge > .entry:last-child {
  border-top: 1px solid #ededed;
}
.entry a {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 2.133333rem;
  height: 21.333333vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  border-bottom: 1px solid #ededed;
}
.entry.list3 a {
  width: 50%;
}
.entry.list3 a:first-child {
  position: absolute;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-align-items: normal;
  align-items: normal;
  height: 4.266667rem;
  padding: 0;
  border-bottom: 0;
}
.entry.list3 a:nth-child(3n + 1) {
  border-right: 1px solid #ededed;
}
.entry.list3 a:last-child{
  border-bottom: 0;
}
.entry .content-wrapper {
  max-width: 3rem;
}
.entry .title {
  line-height: 1.2;
  font-size: 0.426667rem;
  margin-bottom: 0.16rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.entry .title:first-child {
  margin: 10px 0 0 10px;
}
.entry .tips {
  line-height: 1.2;
  font-size: 0.32rem;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.entry .two {
  margin: 10px 0 0 10px;
}

img {
  max-width: 100%;
}
img.one {
  position: absolute;
  right: 10px;
  bottom: 3px;
}
.entry.list3 .icon {
  width: 1.2rem;
}
.entry.list3 a:first-child .icon {
  -webkit-align-self: flex-end;
  align-self: flex-end;
  width: 2rem;
}
.entry.list3 a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%;
}
a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%;
}
.entry.list3 a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%;
}
</style>


