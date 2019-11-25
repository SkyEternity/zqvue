<template>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>导航一</span>
    </template>
    <!-- <el-menu-item-group> -->
      <!-- <template slot="title">分组一</template> -->
      <el-menu-item index="1-1" @click="skip">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    <!-- </el-menu-item-group> -->
    <!-- <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <template slot="title">选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu> -->
  </el-submenu>
</template>

<script>
// 先判断该人是管理员还是用户 用户只有一列

    export default {
        data() {
            return {

            }
        },
        methods: {
            skip(e) {
                console.log(e);
                console.log(111);
            }
        }
    }

</script>
<style lang="scss">

</style>