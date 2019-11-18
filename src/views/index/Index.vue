<template>
  <div>
    <router-view></router-view>
    {{text}}
    <selects v-model="name" :change='xx'></selects>
  </div>
</template>

<script>
// import * as api from '../../api/api'
import indexServer from "../../api/index";
import commonJs from "../../commonJS/Toast";
import selects from "../components/select";
export default {
  name: "index",
  data() {
    return {
      text: "首页",
      name: '',
    };
  },
  watch: {
	  'name': function(val ,oldval) {
		  console.log(val);
		  console.log(oldval);
		  console.log('--------------');
	  }
  },
  components: {
	  selects
  },
  created() {
	//   this.xx()
    // indexServer.IndexInfo("A892fb464E751f9F").then(res => {
      // console.log(res);
    // });
    // console.log(commonJs.MessageInfo('lalal','warning'));
    // this.$message('这是一条消息提示');
    // indexServer.yy()
    // console.log(api);
  },
  methods: {
	  xx() {
		  console.log('我变了啊');
		//   this.name = 2
		//   console.log(1);
	  }
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
