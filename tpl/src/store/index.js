import {observable, computed, action, autorun,runInAction,configure} from 'mobx';
// import {observable, computed, action} from 'mobx';
// configure({ enforceActions: 'observed' })
class Store {
    @observable tradeCfg = {
        'sadf':'sadf'
    };
    constructor(){
        makeObservable(this);
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
}

export default Store;
