<template>
  <div class="zqvue">
    <p>
      <span>{{text}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Before",
  data() {
    return {
      text: "过去"
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
