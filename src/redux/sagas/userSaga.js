import {  put, takeEvery } from "redux-saga/effects";

import http from '@/utils/http'

function* getUserData(action) {
    try {
        let result = yield http({
            url : 'client?_jdrandom=1575893381519&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=mine%2FgetModuleInfo&body=%7B%22fromSource%22%3A2%2C%22channelType%22%3A8%2C%22cityId%22%3A1%2C%22platform%22%3A3%2C%22longtitude%22%3A116.231575%2C%22latitude%22%3A40.220657%7D&signKey=76330b5755ea12462946acd6b5ecd782&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1573612873.1575682783.5&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01575893381519'
        })
        yield put({ type: "getUserData", data : result });
    } catch (e) {

    }
}

function* userSaga() {
    yield takeEvery( 'sagaGetUserData', getUserData);
}

export default userSaga;
