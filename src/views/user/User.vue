<template>
  <div class="zqvue">
    <p>
      <span>{{text}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      text: "人员"
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
