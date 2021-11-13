import {observable, computed, action, makeObservable} from 'mobx';
class Store {
    @observable tradeCfg = {
        'name':'sadf'
    };
    constructor(){
        // makeObservable(this);
    }
    @observable baseInfo = {};
    @observable callback = null;
    @observable token = [
        {
            "id":1,
            "name":"YD"
        },
        {
            "id":2,
            "name":"ETH"
        }
    ];
    @action
    fn2 = () =>{
        this.tradeCfg = {
            'name':'1111'
        }
    }
}

export default Store;
