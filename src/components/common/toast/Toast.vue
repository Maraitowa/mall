<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false,
      timebtn: null
    }
  },
  methods: {
    show(message, duration=2000) {
      this.isShow = true,
      this.message = message
      // 通过变量保存定时器，每次show方法被触发时，先清理定时器，从而避免连续触发toast，后续触发的toast没有存在对应的时间就被隐藏了
      clearInterval(this.timebtn),
      this.timebtn = setTimeout(() => {        
        this.isShow = false,
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    z-index: 9;

    color: #fff;
    background: rgba(0,0,0,.7);
  }
</style>