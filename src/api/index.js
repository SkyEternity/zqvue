import axios from './api'

// https://api.idongde.com/miniapp/v4/content/info/028Da5E9406bF5eA/v2
//只需要将参数传进来就可以了
const indexServer = {
    IndexInfo(params) {
        axios.get(`content/info/${params}/v2`).then((res) => {
            return res.data
        })
    }
}

export default indexServer