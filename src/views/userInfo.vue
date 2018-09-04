<template>
  <div class="user-info">
    <div class="info-left">
      <el-upload class="avatar-uploader" action="/user/uploadHead" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
  mapGetters
} from 'vuex'
import {getUserInfo, editUser, baseUrl} from '@/js/api'
import {level, sex} from '@/js/common'
export default {
  data () {
    return {
      isEdit: true,
      userInfo: {},
      isLoading: true
    }
  },
  created () {
    // this._getUserInfo()
  },
  methods: {
    _getUserInfo () {
      getUserInfo(this.user.userId).then(res => {
        this.userInfo = res.user
        this.isLoading = false
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
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
    _editUser () {
      let param = new URLSearchParams()
      param.append('userId', this.userInfo.userId)
      param.append('userNick', this.userInfo.userNick)
      param.append('userSex', this.userInfo.userSex)
      param.append('userDesc', this.userInfo.userDesc)
      editUser(param).then(res => {
        this.$message.success('修改成功')
      })
    }
  },
  computed: {
    ...mapGetters(['user']),
    imageUrl () {
      return baseUrl + this.user.userHead
    },
    userLevel () {
      return level(this.user.userLevel)
    },
    userSex () {
      return sex(this.user.userSex)
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
