<template>
    <el-container class="home--wrapper both--100 flex">
       <el-aside :class="'slide collapse--'+slide.isCollapse" :style="sStyle">
          <Aside />
      </el-aside>
        <el-container class="flex--1">
          <el-header class="header flex">
            <div class="icon--wrapper position--a" @click="collapse">
              <i :class="btnIcon"></i>
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
import Aside from 'pages/aside'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',

  components: {
    Aside,
  },
  
  methods: {
    ...mapActions([
      'collapse'
    ])
  },

  created() {
  },

  computed: {
     ...mapState([
      'slide'
    ]),

    sStyle() {
      const flag = this.slide.isCollapse
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
  background-color: bgcolor
  .router--wrapper {
    background-color #fff
  }
}
.slide {
  min-width 200px
  width 200px
  &.collapse--true {
    width 80px
    min-width 80px
  }
}
.header {
  align-items center
  .icon--wrapper {
    .both--100 {
      font-size 30px
      cursor pointer
    }
  }
}

</style>
