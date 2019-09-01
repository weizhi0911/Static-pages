<template>
  <div>
    <section>
      <div class="header">
        <span class="line left"></span>
        <i class="iconfont icon-dianzan"></i>
        为你推荐
        <span class="line right"></span>
      </div>
      <p class="taste">你的口味，我都懂得</p>
      <ul class="food clearfix">
          <li v-for="(item,index) in arr" :key="index" @click="judge()">
            <img :src="item.url" alt>
            <div class="one">
              <h4>{{item.food}}</h4>
              <div>{{item.sale}}</div>
            </div>
            <div class="two">
              <div class="price">
                <span class="price_l">
                  <i aria-hidden="true">¥</i>
                  <span>{{item.price}}</span>
                </span>
                <!---->
              </div>
              <div class="recommend-2Nr2c">
                <span>{{item.discount}}</span>
              </div>
            </div>
            <div class="three">
              <div class="recommend-evJyV">
                <i class="iconfont icon-dianzan"></i>
                <span>{{item.address}}</span>
              </div>
            </div>
          </li>
      </ul>
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
            "https://fuss10.elemecdn.com/f/d5/2c4dc9236ebbc5ad81824a8c619fajpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          food: "土豆粉",
          sale: "月售249份 好评率97%",
          price: 5,
          discount: "满35减21",
          address: "蜀香冒菜(秀沿路店)"
        },
        {
          url:
            "https://fuss10.elemecdn.com/6/a4/2c2c86fef80b80e00cb7f8acc43bdjpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          food: "鸡胗",
          sale: "月售144份　好评率100%",
          price: 7.8,
          discount: "满35减21",
          address: "蜀香冒菜(秀沿路店)"
        },
        {
          url:
            "https://fuss10.elemecdn.com/b/1d/c28e9ae4526d1b983b8519bf9358djpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          food: "鸡叉骨（椒盐）",
          sale: "月售66份　好评率100%",
          price: 18,
          discount: "满30减16",
          address: "叫了个炸鸡(秀沿路店)"
        },
        {
          url:
            "https://fuss10.elemecdn.com/b/1d/c28e9ae4526d1b983b8519bf9358djpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          food: "鸡叉骨（椒盐）",
          sale: "月售66份　好评率100%",
          price: 18,
          discount: "满30减16",
          address: "叫了个炸鸡(秀沿路店)"
        },
        {
          url:
            "https://fuss10.elemecdn.com/d/60/110c6f018070ac7080673b7fcc030jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          food: "美味大薯条",
          sale: "月售97份　好评率100%",
          price: 18,
          discount: "满36减22",
          address: "德益克炸鸡汉堡(环桥路店)"
        },
        {
          url:
            "https://fuss10.elemecdn.com/1/d6/e279a655b2e7556eb25eb3089dc32jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          food: "深海鳕鱼条(一份2个)",
          sale: "月售46份　好评率83%",
          price: 12,
          discount: "满36减22",
          address: "德益克炸鸡汉堡(环桥路店)"
        }
      ]
    };
  },
  methods: {
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
    },
    judge(){
      var user = this.getCookie("number");
      if(user){
        this.$router.push({
          name: 'shop'
        })
      }else{
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/font/iconfont.css";
section {
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
  .food {
    padding-left: 0.133333rem;
    li {
      float: left;
      width: 46%;
      margin: 5px 5px 5px 5px;
      border: 1px solid #ddd;
      img {
        width: 100%;
      }
      .one {
        padding-top: 0.066667rem;
        margin: 0 0.213333rem 0 0.266667rem;
        h4 {
          overflow: hidden;
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          font-size: 0.4rem;
        }
        div {
          margin-top: 0.08rem;
          color: #666;
          font-size: 0.066667rem;
        }
      }
      .two {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        margin-bottom: 5px;
        .price {
          font-size: 0.426667rem;
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: baseline;
          align-items: baseline;
          margin-left: 8px;
          span.price_l {
            color: #ff6000;
            font-size: 1em;
            i {
              font-size: 0.65em;
            }
          }
        }
        .price i {
          margin-right: 0.04rem;
          font-style: normal;
        }
        .recommend-2Nr2c {
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          margin-left: 0.133333rem;
          padding: 0 0.053333rem;
          border: 1px solid #f66d6b;
          border-radius: 0.053333rem;
          color: #f66d6b;
          font-size: 0.266667rem;
        }
      }
      .three {
        height: 0.88rem;
        border-top: 1px dashed #ccc;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        margin: 0 0.213333rem 0 0.266667rem;
        .recommend-evJyV {
          display: -webkit-flex;
          display: flex;
          -webkit-flex: 1 1 auto;
          flex: 1 1 auto;
          -webkit-align-items: center;
          align-items: center;
          overflow: hidden;
          i {
            display: block;
            -webkit-flex: 0 0 0.266667rem;
            flex: 0 0 0.266667rem;
            width: 0.266667rem;
            height: 0.266667rem;
            fill: #bbb;
            margin-right: 8px;
          }
          span {
            -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
            overflow: hidden;
            margin-left: 0.16rem;
            color: #999;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.005rem;
          }
        }
      }
    }
  }
  
}
</style>


