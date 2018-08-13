<template>
  <div class="home-header">
    <div class="content-wrapper">
      <span class="header-title">Look-So</span>
      <ul class="header-ul">
        <li class="header-login" v-show="!showHeader" @click="showLogin">登录</li>
        <li class="header-register" v-show="!showHeader" @click="showRegister">注册</li>
        <li><img class="header-head" src="/static/img/head.JPG" alt="" v-show="showHeader"></li>
        <li v-show="showHeader" @click="signOut">退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '@/js/bus'
export default {
  data () {
    return {
      // showHeader: false
    }
  },
  methods: {
    showLogin () {
      bus.$emit('showLogin', true)
    },
    showRegister () {
      bus.$emit('showRegister', true)
    },
    signOut () {
      sessionStorage.removeItem('user')
      console.log(this.showHeader)
    }
  },
  computed: {
    showHeader () {
      if (sessionStorage.getItem('user')) {
        return true
      } else {
        return false
      }
    }
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
