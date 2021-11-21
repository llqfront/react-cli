import { combineEpics } from 'redux-observable';
import * as addPageEpic from './addPageEpic';



function distructor(obj){
    return Object.keys(obj).map((item,index)=>{
        return obj[item];
    })
}

const rootEpic = combineEpics(
     ...distructor(addPageEpic),
     // ...distructor(testPageEpic),
);
export default rootEpic;
