<template>
  <goods-list :goods="categoryDetail" class="tab-content-detail"></goods-list>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: "TabContentDetail",
    components: {
      GoodsList
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>
