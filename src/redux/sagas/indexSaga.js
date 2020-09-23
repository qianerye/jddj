import { put , takeEvery , all } from 'redux-saga/effects'

import http from '@/utils/http'

function * getIndexData(action) {
    let [toprResult , botResult] = yield all([
        http({
            url : 'client?_jdrandom=1575854344358&platCode=h5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&signKey=de28f530c1a969259cf0f039f4d6fd3b&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1573612873.1575682783.5&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01575854344358'
        }),
        http({
            url : 'client?_jdrandom=1576073611129&platCode=h5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%22%22,%22city%22:%22%E5%8C%97%E4%BA%AC%E5%B8%82%22,%22longitude%22:116.231575,%22latitude%22:40.220657,%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&signKey=0afed92289731fbf18371ed7cb7859ca&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575682783.1575893835.6&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576073611129'
        })
    ])
    try{
        yield put({type : 'getIndexData' , topData : toprResult.result , botData : botResult.result})
    }
    catch(e){

    }
}

function * indexSaga(){
    yield takeEvery('sagaGetIndexData' , getIndexData)
}

export default indexSaga