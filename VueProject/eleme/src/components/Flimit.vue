<template>
  <div>
    <section>
      <div class="header">
        <span class="line left"></span>
        <i class="iconfont icon-dianzan"></i>
        限时好礼
        <span class="line right"></span>
      </div>
      <p class="taste">金币换豪礼</p>
      <div class="activity-body">
        <a class="discover-food" v-for="(item,index) in arr" :key="index">
          <img :src="item.url" width="324" height="322">
          <div>
            <p class="food-name ui-ellipsis">{{item.name}}</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>{{item.gold}}</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">{{item.price}}</del>
              </div>
            </div>
          </div>
          <span class="discount">{{item.title}}</span>
        </a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          url:
            "https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/",
          name: "3元品质联盟红包",
          gold: "90金币",
          price: "¥239",
          title: "限时优惠"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/",
          name: "数码经络按摩仪",
          gold: "9金币",
          price: "¥239",
          title: "特价换购"
        },
        {
          url:
            "https://fuss10.elemecdn.com/7/ad/f0132ee0fee6c57253ada4573364ejpeg.jpeg?imageMogr/format/webp/",
          name: "悬浮机械手感套装",
          gold: "9金币",
          price: "¥129",
          title: "特价换购"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
section {
  margin-top: 20px;
  background: #fff;
  .header {
    padding-top: 0.52rem;
    text-align: center;
    font-size: 0.48rem;
    font-weight: 700;
    color: #333;
    span.line {
      display: inline-block;
      margin: 0.213333rem 0.093333rem 0.173333rem;
      border: 1px solid #333;
      width: 0.4rem;
      height: 0;
      position: relative;
    }
    span.line:after {
      position: absolute;
      top: -0.066667rem;
      content: "";
      background: #333;
      height: 0.133333rem;
      width: 0.133333rem;
      border-radius: 50%;
    }
    span.line.left:after {
      right: -0.066667rem;
    }
    i.icon-dianzan {
      font-size: 30px;
    }
    span.line.right:after {
      left: -0.066667rem;
      left: -0.666667vw;
    }
  }
  p.taste {
    font-size: 0.293333rem;
    color: #999;
    text-align: center;
    padding-bottom: 0.213333rem;
  }
  .activity-body {
    padding: 0.32rem 0 0.4rem 0.4rem;
    white-space: nowrap;
    a.discover-food {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      width: 29%;
      margin-right: 0.16rem;
      img {
        width: 3.32rem;
        height: 2.933333rem;
        margin-bottom: 0.253333rem;
      }
      p.food-name {
        font-size: 0.346667rem;
        color: #333;
        margin-bottom: 0.133333rem;
        margin-bottom: 1.333333vw;
      }
      .ui-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .food-price {
        height: 0.64rem;
        height: 6.4vw;
        line-height: 0.64rem;
        line-height: 6.4vw;
        span.price {
          font-size: 0.346667rem;
          height: 0.48rem;
          height: 4.8vw;
          line-height: 0.48rem;
          line-height: 4.8vw;
          color: #ff5339;
          margin-right: 0.093333rem;
          margin-right: 0.933333vw;
          max-width: 1.333333rem;
          max-width: 13.333333vw;
          display: inline-block;
          vertical-align: middle;
        }
        del.original-price {
          font-size: 0.293333rem;
          color: #aaa;
          max-width: 1.066667rem;
          max-width: 10.666667vw;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    a.discover-food .discount {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.293333rem;
      color: #fff;
      background: #413d3c;
      padding: 0.066667rem;
      padding: 0.666667vw;
    }
  }
}
</style>


