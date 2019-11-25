<template>
  <!-- 左边内容 -->
  <main>
    <section class="main_nav">
      <el-menu default-active="2" class="menu">
		  <MenuTree></MenuTree>
	  </el-menu>
      <!-- 右边边内容 -->
      <section class="right_content">
        <router-view />
      </section>
    </section>
  </main>
</template>
<script>
import MenuTree from "./components/MenuTree.vue";

export default {
  name: "navigation",
  components: {
    MenuTree
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.main_nav {
  .menu {
    position: fixed;
    width: 220px;
    z-index: 10;
    top: 0px;
    bottom: 0;
    overflow: hidden;
    overflow-y: auto;
    transition: all 300ms ease;
    transform: translateX(0);
  }
  .right_content {
    position: absolute;
    padding: 5px 20px 20px 240px;
    width: 100%;
    background: #d9e0e7;
    min-height: 100%;
    top: 0;
    height: 100%;
    overflow: auto;
  }
}
</style>