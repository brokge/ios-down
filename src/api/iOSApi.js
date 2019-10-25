import axios from '../base/interception'

const iOSApi = {

    getIpaInfo(param) {
        if (param == undefined) {
            param = {};
        }
        param.requestName = "get_ipa_info";
        //param.page=param.page;
        param.page_size=10;
        return axios({
            method: 'GET',
            url: 'get_ipa_info',
            params: param
        })
    },
    getIpaInfoByJobName(param){
        if (param == undefined) {
            param = {};
        }
        console.log(param.jobName);
        param.requestName = "get_ipa_info_by_job_name";
        param.page_size=10;
        return axios({
            method: 'GET',
            url: 'get_ipa_info_by_job_name',
            params: param
        }) 
    }
}
export default iOSApi;