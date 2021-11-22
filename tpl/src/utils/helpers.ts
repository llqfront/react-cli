import { ResponseData } from './types';

export const createAction = <T>(
    type:string,
    payload?:T,
    handleCallback?:(res:ResponseData)=>void,
):T =>{
    return {
        type,
        payload:payload || {},
        handleCallback
    }
}
// export function createAction<T>(
//     type: string,
//     payload?: T,
//     handleCallback?: (res: ResponseData) => void,
// ){
//     return {
//         type,
//         payload:payload || {},
//         handleCallback,
//     };
// }
