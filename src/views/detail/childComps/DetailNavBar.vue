// Detail 导航栏-上
<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick()">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles"
             :class="{active: index === currentIndex}" @click="titleClick(index)" :key="index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: space-around;
  }

  .active {
    color: var(--color-high-text)
  }
  .back img {
    margin-top: 10px;
  }
</style>