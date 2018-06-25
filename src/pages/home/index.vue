<template>
    <el-container class="home--wrapper both--100 flex">
        <el-aside  :calss="'slide slide--'+slide.isCollapse" :style="sStyle">
          <Slider />
        </el-aside>
        <el-container class="flex--1">
          <el-header class="header flex position--r">
            <div class="icon--wrapper flex--1" @click="collapse">
              <i :class="btnIcon"></i>
            </div>
            <div class="right--wrapper flex">
              <div class="infrom--wrapper" @click="infrom">
                <i class="el-icon-bell"></i>  
              </div>
              <div class="user--wrapper">
                <i class="el-icon-picture"></i>
                <span> {{ username }} </span>  
              </div>
            </div>
          </el-header>
          <el-main class="main flex">
            <div class="router--wrapper flex--1">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Slider from 'pages/slider'
import { mapActions, mapState } from 'vuex'
import { TOKEN_KEY, get } from 'storage'

export default {
  name: 'Home',
  data () {
    return {
      username: 'August'
    }  
  },
  components: {
    Slider,
  },
  methods: {
    ...mapActions([
      'collapse'
    ]),
    infrom (){
      console.log('点击')  
    }
  },
  beforeCreate() {
    // const token = get(TOKEN_KEY)
    // if (!token) {
    //   window.location.replace('#/login')
    // }
  },
  computed: {
     ...mapState([
      'slide'
    ]),
    sStyle() {
      const flag = this.slide.isCollapse
      console.log(flag)
      if (flag) {
        return {
          width: 80,
          minWidth: 80,
        }
      } else {
        return {
          width: 200,
          minWidth: 200,
        }
      }
    },
    btnIcon() {
      return this.slide.isCollapse ? 'el-icon-arrow-right both--100' : 'el-icon-arrow-left both--100'
    },
    btnBell() {
      return 'el-icon-bell both--100-right'  
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/colors.styl'
.main {
  background-color: #F0F2F5
  .router--wrapper {
    background-color #fff
  }
}
.slide {
  min-width 200px
  width 200px
  &.collapse {
    width 80px
    min-width 80px
  }
}
.header {
  align-items center  
  .icon--wrapper {
    margin-left 25px
    .both--100 {
      font-size 30px
      cursor pointer
      color #000
    }
  }
  .right--wrapper {
    width: 200px
    margin-right 24px
    .infrom--wrapper {
      cursor pointer
    }
    .user--wrapper {
      cursor pointer 
    }
  }
  
  
}

</style>
