<template>
  <div class="zqvue">
    <p>
      <span>{{text}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "content-now",
  data() {
    return {
      text: "现在"
    };
  },
  created() {
	  console.log(1);
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
