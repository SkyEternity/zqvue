import {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// element 一些js管理
const commonJs = {
    // 提示消息
    MessageInfo(msg, type) {
        Message({
            message: msg,
            type: type
        });
    }

}

export default commonJs
