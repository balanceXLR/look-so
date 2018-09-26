<template>
  <div class="admin-user">
    <el-table
      :data="users"
      border stripe
      v-loading="isLoading"
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        width="50px"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
        width="80"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="80"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="level"
        label="等级">
      </el-table-column>
      <el-table-column
        prop="description"
        label="个性签名"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
        show-overflow-tooltip>
        <template  slot-scope="scope">
          <span>{{scope.row.status === 1 ? '封禁' : '正常'}}</span>
      </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="80"
      >
      <template  slot-scope="scope">
        <el-button type="text" size="small" v-show="scope.row.status === 0" @click="_manageUser(scope.row.id, scope.row.status)">封禁</el-button>
        <el-button type="text" size="small" v-show="scope.row.status === 1" class="recover-btn" @click="_manageUser(scope.row.id, scope.row.status)">恢复</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getAllUser, manageUser, manageUser2} from '@/js/api'
import {userFliter} from '@/js/common'
export default {
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  created () {
    this._getAlluser()
  },
  methods: {
    _getAlluser () {
      getAllUser().then(res => {
        this.users = userFliter(res.data)
        this.isLoading = false
      })
    },
    _manageUser (userId, status) {
      if (status === 0) {
        manageUser(userId).then(res => {
          this.$message.success('封禁成功')
          this._getAlluser()
        })
      } else if (status === 1) {
        manageUser2(userId).then(res => {
          this.$message.success('恢复成功')
          this._getAlluser()
        })
      }
    }
  }
}

</script>
<style lang="less" scoped>
.recover-btn {
  margin-left: 0;
}
</style>
