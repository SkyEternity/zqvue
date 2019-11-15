<template>
<div>
    <router-view></router-view>
    {{text}}
</div>
    
</template>

<script>
// import * as api from '../../api/api'
import indexServer from '../../api/index'
import commonJs from '../../commonJS/Toast'
export default {
  name: "index",
  data() {
    return {
      text: "首页"
    };
  },
  created() {
    indexServer.IndexInfo('028Da5E9406bF5eA').then((ret) => {
      console.log(ret);
    })
    // console.log(commonJs.MessageInfo('lalal','warning'));
    // this.$message('这是一条消息提示');
    // indexServer.yy()
    // console.log(api);
  }
};
</script>

<style lang='scss' rel="stylesheet/scss">
p {
  span {
    color: red;
  }
}
</style>
