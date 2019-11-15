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
    indexServer.IndexInfo('A892fb464E751f9F').then((res) => {
      console.log(res);
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
