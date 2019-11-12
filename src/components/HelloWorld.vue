<template>
  <div class="zqvue">
    <p><span>{{text}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      text: '1'
    }
  }
}
</script>

<style lang='scss' rel="stylesheet/scss">
            p {
              span {
                color: red
              }
            }
</style>
