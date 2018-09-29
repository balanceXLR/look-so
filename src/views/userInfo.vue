<template>
  <div class="user-info" v-loading="isLoading">
    <div class="info-left">
      <el-upload class="avatar-uploader" :action="updateUrl" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :on-progress="onProgress"
        >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" v-loading="upLoading">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="info-right">
      <el-form ref="form" :model="user" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.userName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="user.userNick" :disabled="isEdit"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="userSex" :disabled="isEdit"></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-input v-model="userLevel" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="user.userDesc" type="textarea" rows="3" resize="none" :disabled="isEdit"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="isEdit = !isEdit">{{isEdit ? '编辑' : '取消'}}</el-button>
          <el-button type="primary" @click="_editUser" :disabled="isEdit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'
import {
  editUser,
  baseUrl
} from '@/js/api'
import {
  level,
  sex
} from '@/js/common'
import {
  goUserHome
} from '@/js/router'
export default {
  inject: ['reload'],
  data () {
    return {
      isEdit: true,
      userInfo: {},
      isLoading: false,
      upLoading: false
    }
  },
  created () {},
  methods: {
    onProgress (event, file, fileList) {
      this.isLoading = true
    },
    handleAvatarSuccess (res, file) {
      let user = {
        userDesc: res.data[0].description,
        userHead: res.data[0].head,
        userId: res.data[0].id,
        userLevel: res.data[0].level,
        userName: res.data[0].name,
        userNick: res.data[0].nickname,
        userSex: res.data[0].sex,
        userType: res.data[0].type
      }
      this.LOGIN(user)
      setTimeout(() => {
        location.reload()
      }, 1000)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG,PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    ...mapMutations(['LOGIN']),
    _editUser () {
      editUser(this.user.userId, this.user.userNick, this.user.userSex, this.user.userDesc).then(res => {
        let user = {
          userDesc: res.data[0].description,
          userHead: res.data[0].head,
          userId: res.data[0].id,
          userLevel: res.data[0].level,
          userName: res.data[0].name,
          userNick: res.data[0].nickname,
          userSex: res.data[0].sex,
          userType: res.data[0].type
        }
        this.LOGIN(user)
        this.$message.success('修改成功')
        goUserHome(0)
        this.isEdit = true
      })
    }
  },
  computed: {
    ...mapGetters(['user']),
    imageUrl: {
      get () {
        return baseUrl + this.user.userHead
      },
      set () {
      }
    },
    userLevel () {
      return level(this.user.userLevel)
    },
    userSex () {
      return sex(this.user.userSex)
    },
    updateUrl () {
      return baseUrl + '/user/update_head.json?id=' + this.user.userId
    }
  }
}

</script>
<style lang="less" scoped>
  .user-info {
    display: flex;

    .info-left {
      width: 20%;
    }

    .info-right {
      width: 70%;
    }
  }

</style>
<style lang="less">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .user-info {
    .el-input__inner {
      width: 200px;
    }
  }

</style>
