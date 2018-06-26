<template>
  <div class="login--wrapper both--100 flex--bcenter">
      <el-form :model="models" status-icon :rules="rules" ref="form" label-width="100px" class="login--form">
         <el-form-item prop="account">
          <el-input  v-model="models.account" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="el-input__icon el-icon-info"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="models.password" auto-complete="off" placeholder="密码">
            <i slot="prefix" class="el-input__icon el-icon-edit
"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')" class="both--100">登陆</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    data() {
      const validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      return {
        models: {
          account: '',
          password: '',
        },
        rules: {

          account: [
            { trigger: 'blur', required: true, }
          ],

          password: [
            { trigger: 'blur', required: true, }
          ],
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({name: 'home'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="stylus">
.login--form {

}
</style>
