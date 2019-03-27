import Vue from 'vue'
import iView from 'iview'

Vue.use(iView)

let Modal = iView.Modal

let ERR_INFO = {
    '0001': '网络暂时开小差了，请稍后重试', // 举个栗子
    '0002': '网络暂时开小差了，请稍后重试',
    '0003': '网络暂时开小差了，请稍后重试',
    '0004': '网络暂时开小差了，请稍后重试',
    '0005': '网络暂时开小差了，请稍后重试'
}

function catchError(e) {
    if (e.result) {
        let errorCode = e.result.resultCode
        if (errorCode && ERR_INFO[errorCode]) {
            Modal.warning({
                title: '请注意',
                content: ERR_INFO[errorCode]
            })
        }
    }
}

export default catchError