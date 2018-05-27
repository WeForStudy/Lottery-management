<template>
  <div class="login--wrapper">
    <span class="login--title"> {{ title }} </span>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      title : '数据中心管理系统'  
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
</style>
