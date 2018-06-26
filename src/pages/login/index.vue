<template>
  <div class="login--wrapper both--100 flex--bcenter">
      <el-form :model="models" status-icon :rules="rules" ref="form" label-width="100px" class="login--form">
         <el-form-item label="账号" prop="account">
          <el-input  v-model="models.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="models.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
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
            { validator: validatePass, trigger: 'blur' }
          ],

          pass: [
            { validator: validatePass, trigger: 'blur' }
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
