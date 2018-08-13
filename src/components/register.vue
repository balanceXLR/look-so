<template>
  <div class="register">
    <el-dialog title="注册" :visible.sync="registerVisible"  width="500px" center>
        <el-form :model="form" label-width="80px" label-position="left">
            <el-form-item label="用户名" >
                <el-input v-model="form.userName" auto-complete="off" ></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input v-model="form.password" auto-complete="off" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" >
                <el-input v-model="form.password" auto-complete="off" type="password" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="registerVisible = false">取 消</el-button>
            <el-button type="primary" @click="registerVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/js/bus'
export default {
  data () {
    return {
      registerVisible: false,
      form: {
        userName: '',
        password: ''
      }
    }
  },
  created () {
    bus.$on('showRegister', (msg) => {
      this.registerVisible = msg
    })
  }
}

</script>
<style lang="less" scoped>

</style>
