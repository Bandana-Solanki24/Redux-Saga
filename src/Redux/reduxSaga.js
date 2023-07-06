import {takeEvery ,put} from 'redux-saga/effects';
import { CARD_DATA,SET_CARD_DATA } from './constant';

function* getCardData(){
    let data=yield fetch ('https://jsonplaceholder.typicode.com/posts');
    data=yield data.json();
    yield put ({type:SET_CARD_DATA,data})
}


function* reduxSaga(){
    yield takeEvery(CARD_DATA,getCardData);
    
}
export default reduxSaga;