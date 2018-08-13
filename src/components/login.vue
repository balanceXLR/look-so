<template>
  <div class="login">
    <el-dialog title="登录" :visible.sync="loginVisible" class="login-wrapper" width="500px" center>
        <el-form :model="form" label-width="80px" label-position="left">
            <el-form-item label="用户名" >
                <el-input v-model="form.userName" auto-complete="off" ></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input v-model="form.password" auto-complete="off" type="password" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="loginVisible = false">取 消</el-button>
            <el-button type="primary" @click="doLogin">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/js/bus'
import { login } from '@/js/api'
export default {
  data () {
    return {
      loginVisible: false,
      form: {
        userName: '',
        password: ''
      }
    }
  },
  created () {
    bus.$on('showLogin', (msg) => {
      this.loginVisible = msg
    })
  },
  methods: {
    doLogin () {
      login(this.userName, this.password).then((res) => {
        if (res.user) {
          console.log(res.user)
        }
      })
      this.loginVisible = false
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.login{

}
</style>
