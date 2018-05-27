<template>
  <div class="login--wrapper">
    <li class="login--title"> {{ title }} </li>
    <li class="wec--login"> {{ wecomelogin }} </li>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      title : '数据中心管理系统',
      wecomelogin : '欢迎登陆'  
    }
  },
  components: {
  }
}
</script>

<style lang="stylus">
  .login--wrapper
    justify-content center
    align-items center
    .login--title
      font-size 33px
      font-family PingFangSC-Regular
      .wec--login 
        color #929496;
        font-size 14px;
        font-family PingFangSC-Regular;
     
</style>
