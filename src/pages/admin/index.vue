<template>
  <div class="admin--wrapper flex">
    <div class="admin--left--wrapper flex flex--acenter">
      <el-form :model="ruleFrom" ref="ruleFrom" label-width="200px" class="rulefrom">
        <el-input
        suffix-icon="el-icon-search"
        ></el-input>
      </el-form>
      <span class="adminfield">管理员列表</span>
      <ul class="nav-group-title">
        <li class="nav-left">姓名</li>
        <li class="nav-right">状态</li>
      </ul>
      <div class="list width--100 height--100 flex">
        <ul class="admin">
          <li class="admin-list" v-for="(admins,index) in admin" :key="index" @click="selectAdmin(index)">
            <span class="admin-name"> {{ admins.name }} </span>
            <span class="admin-state"> {{ admins.stateTitle }} </span>
          </li>
        </ul>
      </div>
      <div class="insadmin flex flex--jcenter">
        <el-button type="primary" icon="el-icon-circle-plus-outline" class="insclick">添加</el-button>
      </div>
    </div>
    <div class="admin--right--wrapper flex flex--1">
      0
    </div>
  </div>

</template>

<script>
export default {
  name: 'admin',
  data(){
    return{
      ruleFrom :{
        name: ''
      },
      admin: [
        {
          name: 'august',
          password: '123456',
          state: false,
          stateTitle: '未注册',
          sex: '男',
          phone: '13500000000'
        },
        {
          name: 'heimi',
          password: '123456',
          state: true,
          stateTitle: '已注册',
          sex: '男',
          phone : '17000000000'
        },
        {
          name: 'frank',
          password: '123456',
          state: false,
          stateTitle :'未注册',
          sex: '男',
          phone: '15900000000'
        }
        ]
    }
  },
  rules:{

  },
  methods:{
    selectAdmin(index){
      console.log(index)
    }
  }
}
</script>

<style scoped lang="stylus">
  .admin--wrapper{
    height 100%
  }
  .admin--left--wrapper {
     width 253px
     height 100%
     background-color #FAFAFA
     flex-direction column
     color pink 
    }
  .rulefrom {
      margin-top 10px
    }
  .adminfield {
    padding 15px
    font-size  20px
    font-family PingFangSC-Medium
    color #595959
    font-weight 700
   }
  .nav-group-title {
    width 85%
    color #000
    font-family PingFangSC-Medium
    font-weight 540
    margin-bottom 18px
  }
  .nav-group-title
  .nav-left {
    float left
  }
  .nav-group-title
  .nav-right{
    float right
  }
  .list {
    background-color #fff
    justify-content center
    }
  .admin {
      width 85%
      font-family PingFangSC-Medium
      font-weight 540
      font-size 14px
  }
  .admin
  .admin-list {
    cursor pointer
    padding 13px 0;
  }
  .admin
  .admin-name {
  }
  .admin
  .admin-state {
    float right
  }
  .insadmin {
    width 100%
    height 25%
    background #fff
  }
  .insclick {
    width 90px
    height 40px
  }

</style>
