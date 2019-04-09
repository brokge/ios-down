import axios from '../base/interception'
const API = {
    getVaccineDetail(param) {
        if (param == undefined) {
            param = {};
        }
        param.requestName = "getVaccineDetail";
        return axios({
            method: 'GET',
            url: 'vaccine/v1/detail/'+param.id,
            params: param
        })
    },
    //通过月份查询疫苗
    searchVaccineByMonth(month) {
        var paramJson = {};
        paramJson.requestName = "searchVaccineByMonth";
        paramJson.month = month;
        return this.searchVaccine(paramJson);
    },
    //通过关键字查询疫苗
    searchVaccineByKeyword(keyword) {
        var paramJson = {};
        paramJson.requestName = "searchVaccineByKeyword";
        paramJson.keyword = keyword;
        return this.searchVaccine(paramJson);
    },
    //参数为空查询常搜索疫苗
    searchCommonVaccine() {
        var paramJson = {};
        paramJson.requestName = "searchCommonVaccine";
        return this.searchVaccine(paramJson);
    },
    searchVaccine(param) {
        return axios({
            method: 'GET',
            url: 'vaccine/v1/search',
            params: param
        })
    },
    //推荐新闻
    searchRecommandNews() {
        var paramJson = {};
        paramJson.requestName = "searchRecommandNews";
        return this.searchNews(paramJson);
    },
    searchNewsKeyWord(keyword) {
        var paramJson = {};
        paramJson.requestName="searchNewsKeyWord";
        paramJson.keyword = keyword;
        return this.searchNews(paramJson);
    },
    searchNews(param) {
        return axios({
            method: 'GET',
            url: "vaccine/v1/news",
            params: param
        })
    },
    searchSolr(keyword) {
        var paramJson={};
        paramJson.requestName="searchSolrKeyword";
        paramJson.key_word=keyword;
        return axios({
            method: 'GET',
            url: "vaccine/v1/solr",
            params: paramJson
        })
    }
}
export default API