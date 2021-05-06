<template>
  <div class="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <img class="privateImage-svg" src="~assets/img/profile/avatar.svg" alt=""/>
      </slot>
      <div class="login-info">
        <slot name="username">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span><img class="phone-icon" src="~assets/img/profile/phone.svg" alt=""/></span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <img class="arrow-svg right" src="~assets/img/common/arrow-left.svg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
  .user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }
  .user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
    float: left;
  }

  .user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
    float: left;
  }

  .user-info .login-info .phone {
    position: relative;
    margin: 5px 0 0 15px;
    font-size: 13px;
  }

  .login-info .phone .phone-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -2px;
    left: -20px;
  }

  .user-info .arrow-svg {
    width: 13px;
    height: 13px;
    margin-top: 16px;
  }
</style>