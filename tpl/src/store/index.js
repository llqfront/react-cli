import {observable, computed, action, autorun,runInAction} from 'mobx';
// import {observable, computed, action} from 'mobx';
class Store {
    @observable tradeCfg = {
        'sadf':'sadf'
    };
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
