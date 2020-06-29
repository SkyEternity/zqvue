<template>
    <div>
		<section class="trands">
			<div class="handel">
				<el-input v-model="params.key" placeholder="请输入内容"></el-input>
				<el-select v-model="params.time" clearable placeholder="请选择" @change="timeChange">
					<el-option v-for="item in timeList" :key="item.time" :label="item.label" :value="item.time">
					</el-option>
				</el-select>
				<el-select v-model="params.geo" clearable placeholder="请选择" @change="geoChange">
					<el-option v-for="item in geoList" :key="item.geo" :label="item.label" :value="item.geo">
					</el-option>
				</el-select>
			</div>

			<iframe id="trends-widget-1" title="trends-widget-1" :src='url' width="100%" frameborder="0" scrolling="0" style="border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) 0px 2px 2px 0px; height: 423px;"></iframe>
		</section>
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
		url: '',
		params: {
			key: '维生素',
            geo: '',
            time: 'today 1-m',
		},
		timeList: [
			{label: '过去4小时', time: 'now 4-H'},
			{label: '过去1天', time: 'now 1-d'},
			{label: '过去7天', time: 'now 7-d'},
			{label: '过去30天', time: 'today 1-m'},
			{label: '过去90天', time: 'today 3-m'},
			{label: '过去1年', time: 'today 12-m'},
			{label: '过去5年', time: 'today 5-y'},

		],
		geoList: [
			{label: '全球', geo: '',},
			{label: '中国', geo: 'CN',},
			{label: '美国', geo: 'US',},
		],
    };
  },
  watch: {     

  },
  components: {
  },
  created() {

  },


  mounted() {
        this.urlInit(this.params)
  },

  methods: {
	  urlInit(params) {
		  this.url = `https://trends.google.com:443/trends/embed/explore/TIMESERIES?req={"comparisonItem":[{"keyword":"${params.key}", "geo":"${params.geo}", "time":"${params.time}"}],"category":0,"property":""}&tz=-480&eq=q=${params.key}&geo=${params.geo}&date=${params.time}`
	  },
	  timeChange(val) {
		  this.urlInit(this.params)
	  },
	  geoChange(val) {
		  this.urlInit(this.params)
	  }
  }

};
</script>

<style lang='scss' rel="stylesheet/scss">
.trands {
	width: 80%;
	.handel {
		text-align: left;
		margin-bottom: 40px;
	}
	.el-input {
		width: 200px;
	}
}
p {
  span {
    color: red;
  }
}
</style>
