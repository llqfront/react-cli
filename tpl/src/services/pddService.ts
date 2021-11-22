import { ajaxs } from '@/utils';

export const pddFnApi = (params)=>{
    return ajaxs.getApi2('/home/mediareports',params)
}
