<template>
    <el-container class="home--wrapper both--100 flex">
        <el-aside  :calss="'slide slide--'+slide.isCollapse" :style="sStyle">
          <Slider />
        </el-aside>
        <el-container class="flex--1">
          <el-header class="header flex">
            <div class="icon--wrapper position--a" @click="collapse">
              <i :class="btnIcon"></i>
            </div>
            <div class="icon--wrapper">
              <i class="el-icon-search both--100-right"></i>  
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
  components: {
    Slider,
  },
  methods: {
    ...mapActions([
      'collapse'
    ])
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
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/colors.styl'
.main {
  background-color: #fff
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
  background-color: rgba(255, 255, 255, 1)
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12)
  .icon--wrapper {
    .both--100 {
      font-size 30px
      cursor pointer
      color #000
      float left 
    }
    .both--100-right {
      font-size 30px
      cursor pointer 
      color #000
      float right   
    }
  }
}

</style>
