<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick"/>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/> 
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'
  
  import BackTop from 'components/content/backTop/BackTop' 

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
  import {debounce} from 'common/utils'
  import { mapActions } from 'vuex'
  
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      Scroll,
      BackTop
    },    
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        themeTops: [],
        currentIndex: 0,
        isShowBackTop: false,
        getThemeTop: null,        
      }
    },
    created() {
      // 1.保存传入的iid
      // this.iid = this.$route.params.id
      this.iid = this.$route.query.iid

      // 2.根据iid请求详细数据
      getDetail(this.iid).then(res => {
        // 2.1 获取结果
        // console.log(res);
        const data = res.result

        // 2.2 获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        // 2.3 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 2.4 获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 2.5 获取商品信息
        this.detailInfo = data.detailInfo

        // 2.6 保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 2.7 保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0]
        }
      })
      
      // 3.请求推荐数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommendList = res.data.list
      })

      // 4.给getThemeTops赋值，防抖
      this.getThemeTop = debounce(() => {
        this.themeTops = []

        this.themeTops.push(0)
        this.themeTops.push(this.$refs.params.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)

        // console.log(this.themeTops);        
      }, 200)
    },
    methods: {
      ...mapActions(['addCart']),
      detailImageLoad() {
        this.getThemeTop()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTops[index], 200)
      },
      contentScroll(position) {
        // 1.使滚动内容与title对应
        const positionY = -position.y
        let length = this.themeTops.length-1
        for(let i=0; i<length; i++) {
          if(this.currentIndex !== i && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        // 2.判断backTop是否显示
        this.isShowBackTop = (-position.y) > 1000
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      addToCart() {
        // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.image = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.price = this.goods.realPrice;
        // 3.添加到Store中
        // this.$store.commit('addCart', obj)
        // this.$store.dispatch('addCart', obj).then(res => {
        //   console.log(res);
        // })
        this.addCart(obj).then(res => {
          this.$toast.show(res, 2000)
        })
      }   
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
    overflow: hidden;
    width: 100%;
  }
</style>