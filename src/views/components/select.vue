<template>
	<el-select v-model="currVal" filterable clearable placeholder="请选择平台">
		<el-option
      	v-for="item in options"
      	:key="item.id"
      	:label="item.name"
      	:value="item.id"
     	:clearable="true"
    ></el-option>
	</el-select>
</template>
<script>
import indexServer from '../../api/index'
export default {
	props: ['value','change'],
  	data() {
    	return {
      		prop: [],
      		currVal: this.value,
     		pageSize: 200,
      		options: []
    	};
  	},
  //根据watch简监听currVal的变化 从而重新调取接口
  	watch: {
		//如果有默认值 那么就是调取chenge事件
	  	'value' (val, oldValue) {
            this.setCurrentValue(val)
		},
		//子组建发生了改变后父组件里的值也就会发生改变
		// 改变input的值从而使value变化然后触发change事件
		// 为了实现数据的双向数据绑定 自组建
        'currVal' (val, oldValue) {
			// console.log(2);
            this.$emit('input', val)
        }
  	},
  	created() {
		  this.fetchData()
  	},
  	methods: {
	//此处调取接口
        fetchData (val) {
			indexServer.IndexInfo('A892fb464E751f9F').then(ret => {
				// this,options = ret.data
				ret.data.data.images = [
					{id: 1, name: 'z'},
					{id: 2, name: 'q'}
				]
				this.options = ret.data.data.images
			})
		},
        setCurrentValue (val) {
			if(!val){val = ''} 
			if (this.curVal == val) {
				return
			}
			this.currVal = val
			this.$emit('input', val)
			// this.$emit('change', val)
			this.change && this.change(val)
        }
    }
};
</script>
<style lang="scss">
</style>