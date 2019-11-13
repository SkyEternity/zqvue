<template>
  <div class="zqvue">
    <p>
      <span>{{text}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "content-future",
  data() {
    return {
      text: "将来"
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
