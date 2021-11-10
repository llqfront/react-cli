import React,{ Component } from 'react';

import {connect} from 'react-redux';

import {actionsAdd} from '@/stores/Actions.ts';

class View extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const {val,onRemoveFn} = this.props;
        return(
            <li>
                {val.id}-{val.text}-{val.type}
                <span onClick={()=>{onRemoveFn()}}>删除</span>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { val } = ownProps;
	return {
		onRemoveFn: () => dispatch(actionsAdd.del('删除',val.id))
	}
};

export default connect(null,mapDispatchToProps)(View);
