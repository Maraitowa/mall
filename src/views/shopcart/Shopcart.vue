<template>
  <div class="shop-cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <scroll class="cart-list">
      <cart-list  :cart-list="cartList"/>
    </scroll>    

    <!-- 底部汇总 -->
    <bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'

  import { mapGetters } from 'vuex'

  export default {
    name: "Shopcart",
    components: {
      NavBar,
      Scroll,
      CartList,
      BottomBar
    },
    computed: {
      ...mapGetters(['cartList', 'cartCount'])
    }
  }
</script>

<style scoped>
  .shop-cart {
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 93px;
    width: 100%;
    overflow: hidden;
  }
</style>