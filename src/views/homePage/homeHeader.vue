<template>
  <div class="home-header">
    <div class="content-wrapper">
      <span class="header-title" @click="_goMovieHome">Look-So</span>
      <ul class="header-ul">
        <li class="header-login" v-show="!isLogin" @click="showLogin">登录</li>
        <li class="header-register" v-show="!isLogin" @click="showRegister">注册</li>
        <li><img class="header-head" :src="user.userHead? baseUrl + user.userHead : ''" alt="" v-show="isLogin" @click="_goUserHome"></li>
        <li v-show="isLogin" @click="signOut">退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '@/js/bus'
import { baseUrl } from '@/js/api'
import { mapMutations, mapGetters } from 'vuex'
import { goUserHome, goMovieHome } from '@/js/router'
export default {
  data () {
    return {
      // isLogin: false
      baseUrl: baseUrl
    }
  },
  methods: {
    ...mapMutations(['SIGNOUT']),
    showLogin () {
      bus.$emit('showLogin', true)
    },
    showRegister () {
      bus.$emit('showRegister', true)
    },
    signOut () {
      this.SIGNOUT()
      this.$message.success('退出成功')
      this._goMovieHome()
    },
    _goMovieHome () {
      goMovieHome()
    },
    _goUserHome () {
      // console.log(this.user.userType)
      goUserHome(this.user.userType)
    }
  },
  computed: {
    // isLogin () {
    //   if (sessionStorage.getItem('user')) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    ...mapGetters(['isLogin']),
    ...mapGetters(['user'])

  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
  .home-header {
    width: 100%;
    padding: 12px 0 12px 0;
    background: #409EFF;
    .content-wrapper {
      display: flex;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
      .header-title {
        cursor: pointer;
        .all-font(MicrosoftYaHei-Bold, 18px, #ffffff, 0);
      }
      .header-ul {
        display: flex;
        align-items: center;
        margin-left: auto;
        &>li {
          margin-right: 12px;
          .all-font(MicrosoftYaHei-Bold, 14px, #ffffff, 0);
          cursor: pointer;
        }
        .header-head {
          width: 24px;
          height: 24px;
          border-radius: 24px;
        }
      }
    }
  }
</style>
