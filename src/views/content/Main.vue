<template>
 <!-- exclude="channel-form,channel-category" -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</template>

<script>
export default {
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