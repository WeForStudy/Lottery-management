<template>
  <el-container class="admin--wrapper both--100 flex">
    <el-aside class="admin--list">
      <el-form class="flex flex--jcenter">
          <el-input
          suffix-icon="el-icon-search"
          class="search--input"
          ></el-input>    
      </el-form>
      <div class="admin--title">管理员列表</div>
      <el-table
        :data="adminlist"
        style="width: 100%"
        type="index"
        @row-click="tableClick(index)"
        >
        <el-table-column
        label="姓名"
        prop="name"
        width="150px"
        >
        </el-table-column>
        <el-table-column
        label="状态"
        prop="state"
        width="150px"
        >
        </el-table-column>    
      </el-table>
      <el-button 
        class="bottom--button position--r"
        type="primary"
        icon="el-icon-plus">
        添加</el-button>      
    </el-aside>
    <el-main class="right--main">
      <div class="dynamic--wrapper">
        <span class="dynamic--title"> 
          {{ dynamictitle }} 
        </span>
        <el-button class="delectadmin">删除</el-button>  
      </div>
      <el-form ref="form" label-width="80px" class="query--from">
        <el-form-item label="姓名:">
          <el-input :placeholder="dynamictitle" disabled="false"></el-input>
       </el-form-item>
       <el-form-item label="性别">
       <el-radio-group>
         <el-radio label="男"></el-radio>
         <el-radio label="女"></el-radio>
       </el-radio-group> 
       </el-form-item>
       <el-form-item label="邮箱:">
          <el-input :placeholder="adminlist.email" disabled="false"></el-input>
       </el-form-item>
       <el-form-item label="电话:">
          <el-input :placeholder="adminlist.phone" disabled="false"></el-input>
       </el-form-item>
       <el-form-item label="密码:">
          <el-input :placeholder="adminlist.password" disabled="false"></el-input>
       </el-form-item>
      </el-form>     
    </el-main>    
  </el-container> 
</template>
<script>
export default {
  name: 'admin',
  data() {
    return {
      adminlist :[
        {
          name: '邢宗旭',
          sex: '',
          email: '',
          phone: '',
          password: '',
          state: '已注册', 
        },
        {
          name: 'xingzongux',
          sex: '',
          email: '',
          phone: '',
          password: '',
          state: '未注册', 
        },
        {
          name: 'august',
          sex: '',
          email: '',
          phone: '',
          password: '',
          state: '未注册', 
        },
        {
          name: 'august',
          sex: '',
          email: '',
          phone: '',
          password: '',
          state: '未注册', 
        },
        {
          name: 'august',
          sex: '',
          email: '',
          phone: '',
          password: '',
          state: '未注册', 
        }           
      ],
      dynamictitle: '管理员信息'  
    }  
  },
  methods: {
    tableClick (index){
      console.log('ClickMe'+index)  
    }  
  }
}
</script>
<style lang="stylus">
  .admin--list{
    background-color #FAFAFA
    .admin--title {
      width 100%
      text-align center
      margin 20px auto
      font-size 20px
    }
    .search--input {
      width 80%
      margin-top 10px
    }
    .bottom--button{
      top 30px
      left 100px  
    }
  }
  .right--main {
    background-color #FFFFFF 
    .dynamic--wrapper {
      width 100%
      height 50px
      border-bottom  1px solid #ccc
      .dynamic--title {
        float left
        margin-left 15px
        line-height 50px
        font-size 18px    
      }
      .delectadmin {
        float right 
      }
    }  
  }
  .query--from {
    margin-top 100px  
  }
</style>

