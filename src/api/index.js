import axios from './api'

// https://api.idongde.com/miniapp/v4/content/info/028Da5E9406bF5eA/v2
//只需要将参数传进来就可以了
// https://wxapi.iduoha.com/v1/content/AabCa987eBa531fA/view
const indexServer = {
    IndexInfo(params){
        return axios.post(`content/${params}`).then((res) => {
            return res.data
        })
    },
    Tongji(params) {
        return axios.get(`content/${params}/view`).then((res) => {
            return res.data
        })
    }
}

export default indexServer