<template>
  <div class="login--wrapper">
     <el-table
      :data="admins"
      @row-click="rowClick"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建人">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllAdmins } from 'services'
export default {
  name: 'Login',
  data() {
    return {
      admins: []
    }
  },
  created() {
    getAllAdmins().then(res => {
      this.admins = res
    }).catch(err => {
      console.log(err)
      // this.$message
    })
  },
  methods: {
    rowClick(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="stylus">
</style>
