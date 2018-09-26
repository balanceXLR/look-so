<template>
  <div class="admin-upload" v-loading="isLoading">
    <div class="upload-left">
      <el-upload
      class="avatar-uploader"
      action=""
      :auto-upload="false"
      :on-change="OnChange"
      :on-remove="OnRemove"
      :on-preview="handlePictureCardPreview"
      :before-remove="beforeRemove"
      :limit="1"
      :file-list="fileList"
      >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    </div>
    <div class="upload-right">
      <el-form ref="form" :model="movie" label-width="80px">
      <el-form-item label="电影名称">
        <el-input v-model="movie.name"></el-input>
      </el-form-item>
      <el-form-item label="上映时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="movie.show" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="片长">
        <el-input v-model="movie.time" type="number">
          <template slot="append">分钟</template>
        </el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="movie.sort" placeholder="请选择类别">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="国家">
        <el-select v-model="movie.ctry" placeholder="请选择国家">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="导演">
        <el-input v-model="movie.dir"></el-input>
      </el-form-item>
      <el-form-item label="主演">
        <el-input v-model="movie.act"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="movie.intro" type="textarea" rows="3" resize="none"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="_uploadMovie">提交</el-button>
      </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
// import {uploadMovie} from '@/js/api'
import {dateFtt} from '@/js/common'
import qs from 'qs'
export default {
  data () {
    return {
      imageUrl: '',
      movie: {
      },
      isLoading: false,
      count: 0,
      fileList: [],
      dialogVisible: false,
      dialogImageUrl: '',

      options: [{
        value: '中国',
        label: '中国'
      }, {
        value: '日本',
        label: '日本'
      }, {
        value: '韩国',
        label: '韩国'
      }, {
        value: '美国',
        label: '美国'
      }, {
        value: '英国',
        label: '英国'
      }],
      options2: [{
        value: '喜剧',
        label: '喜剧'
      }, {
        value: '科幻',
        label: '科幻'
      }, {
        value: '爱情',
        label: '爱情'
      }, {
        value: '悬疑',
        label: '悬疑'
      }, {
        value: '冒险',
        label: '冒险'
      }, {
        value: '动作',
        label: '动作'
      }]
    }
  },
  methods: {
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    OnChange (file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.fileList = fileList
    },
    OnRemove (file, fileList) {
      this.fileList = fileList
      this.imageUrl = ''
    },
    _uploadMovie () {
      let form = new FormData()
      form.append('cover', this.fileList[0].raw)
      this.isLoading = true
      this.$axios.post('/manager/upload_movie.json?' + qs.stringify({
        name: this.movie.name,
        show: dateFtt('yyyy-MM-dd-hh-mm-ss', this.movie.show),
        time: this.movie.time,
        sort: this.movie.sort,
        ctry: this.movie.ctry,
        dir: this.movie.dir,
        act: this.movie.act,
        intro: this.movie.intro
      }), form, {
        'Content-Type': 'multipart/form-data'
      }).then(res => {
        if (res.data.code === '0000') {
          this.movie = {}
          this.imageUrl = ''
          this.fileList = []
          this.isLoading = false
          this.$message.success('上传成功')
        } else {
          this.$message.warning('上传失败')
        }
      })
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.admin-upload {
  display: flex;
  .upload-left {
    width: 20%;
    .name {
      .all-font(MicrosoftYaHei-Bold, 14px, #303133, 0);
    }
  }
  .upload-right {
    width: 70%;
  }

}
</style>
<style>
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
  width: 135px;
  height: 189px;
  line-height: 189px;
  text-align: center;
}
.avatar {
  width: 135px;
  height: 189px;
  display: block;
}
.el-input__inner {
  width: 200px;
}
.el-input-group--append {
  width: 250px;
}
</style>
