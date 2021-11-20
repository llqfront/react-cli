import * as addPageEpic from '@/epics/addPageEpic';

import { combineEpics } from 'redux-observable';

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
