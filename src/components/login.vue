<template>
  <div class="login">
    <el-dialog title="登录" :visible.sync="loginVisible" class="login-wrapper" width="500px" center>
        <el-form :model="form" label-width="80px" label-position="left" :rules="rules" ref="form">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName" auto-complete="off" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" auto-complete="off" type="password" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="loginVisible = false">取 消</el-button>
            <el-button type="primary" @click="_login">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/js/bus'
import { login } from '@/js/api'
import { mapMutations } from 'vuex'
import { doAlert } from '@/js/common'
import {goMovieHome} from '@/js/router'
export default {
  data () {
    return {
      loginVisible: false,
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '长度小于11个数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度为6到16位', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    bus.$on('showLogin', (msg) => {
      this.loginVisible = msg
    })
  },
  updated () {
  },
  methods: {
    ...mapMutations(['LOGIN']),
    _login () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          login(this.form.userName, this.form.password).then((res) => {
            if (res.code === '0000') {
              this.LOGIN(res.data[0])
              doAlert(this, 'success', '登录成功')
              this.loginVisible = false
              goMovieHome()
            } else {
              doAlert(this, 'warning', '登录失败')
            }
            this.resetForm('form')
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    loginVisible (val) {
      if (!val) {
        this.resetForm('form')
      }
    }
  },
  computed: {
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.login{

}
</style>
