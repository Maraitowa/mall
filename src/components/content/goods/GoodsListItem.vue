<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥ {{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      // 打印商品的信息
      // console.log(this.goodsItem);

      // 路由传递方式1：
      // this.$router.push('/detail/' + this.goodsItem.iid)

      // 路由传递方式2：
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  }
}
</script>

<style scoped>
  .goods-item {
    width: 48%;
    padding-bottom: 25px;
    position: relative;
  }
  .goods-item img {
    width: 100%;
  }
  .goods-info {
    font-size: 15px;
    text-align: center;
    bottom: 5px;
  }
  .goods-info p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 150px;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
