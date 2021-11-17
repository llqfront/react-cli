import React, { PureComponent,Component } from 'react';

import Child from './child.tsx';

interface Props {

}

class View extends PureComponent<Props,{}>{

    public render(){
        return(
            <div>
                tsx
                <Child title='测试'/>
            </div>
        )
    }
}
export default View;
