import { put , takeEvery } from 'redux-saga/effects'

import http from '@/utils/http'

function * getFaxianNav(action) {
    try {
        yield put({type : 'changeNav' , nowNav : action.nowNav , data : {}})
    } catch (e) {
        
    }

    let url = action.url ? action.url : 'client?_jdrandom=1576293856112&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:116.231575,%22latitude%22:40.220657,%22cityId%22:1,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22feedTab%22%7D&signKey=7c02b8b67f6defad1b5f0f6caff7fffc&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575893835.1576289472.7&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576293856112'
    let result = yield http({
        url
    })
    try {
        yield put({type : 'changeNav' , nowNav : action.nowNav , data : result.result})
    } catch (e) {
        
    }
}

function * faxianSaga() {
    yield takeEvery('SagaGetFaxianNav' , getFaxianNav)
}


export default faxianSaga