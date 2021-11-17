import React, { PureComponent,Component } from 'react';

import { withRouter } from 'react-router-dom';

interface Props {
    title?: string
}

class View extends PureComponent<Props,{}>{

    public render(){
        console.log(this.props.match)
        return(
            <div>
                子组件
                {this.props.title}
            </div>
        )
    }
}
export default withRouter(View);
