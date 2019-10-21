import axios from '../base/interception'

const iOSApi = {

    getIpaInfo(param) {
        if (param == undefined) {
            param = {};
        }
        param.requestName = "get_ipa_info";
        param.page=0;
        param.page_size=10;
        return axios({
            method: 'GET',
            url: 'get_ipa_info',
            params: param
        })
    }
}
export default iOSApi;