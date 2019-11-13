<template>
<div>
    <router-view></router-view>
    {{text}}
</div>
    
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      text: "首页"
    };
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
