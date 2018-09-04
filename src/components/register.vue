<template>
  <div class="register">
    <el-dialog title="注册" :visible.sync="registerVisible"  width="500px" center>
        <el-form :model="form" label-width="80px" label-position="left" :rules="rules" ref="form">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" auto-complete="off" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
                <el-input v-model="form.password2" auto-complete="off" type="password" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="registerVisible = false">取 消</el-button>
            <el-button type="primary" @click="_register">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/js/bus'
import { register } from '@/js/api'
import { mapMutations } from 'vuex'
import { doAlert } from '@/js/common'
export default {

  data () {
    return {
      registerVisible: false,
      form: {
        userName: '',
        password: '',
        password2: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '长度为11位的数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度为6到16位', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度为6到16位', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    bus.$on('showRegister', (msg) => {
      this.registerVisible = msg
    })
  },
  methods: {
    ...mapMutations(['LOGIN']),
    _register () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          register(this.form.userName, this.form.password).then((res) => {
            if (res.code === '0000') {
              // console.log(res.user)
              this.LOGIN(res.data[0])
              this.registerVisible = false
              doAlert(this, 'success', '注册成功')
            } else {
              doAlert(this, 'warning', '注册失败')
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
    registerVisible (val) {
      if (!val) {
        this.resetForm('form')
      }
    }
  }
}

</script>
<style lang="less" scoped>

</style>
