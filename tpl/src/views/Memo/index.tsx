import React, { memo } from 'react';

// interface Props{
//
// }
//
// const View : React.Fc<Props> = (props) =>{
//     return (
//         <div>
//
// 1111
//         </div>
//     )
// }
// export default memo(View);

type Props = typeof defaultPorps & PartialProps;

interface PartialProps{
    count?:number;
}
const defaultProps = {
    name:'',
    age:3,
}
const View : React.Fc<Props> = (props) =>{
    return (
        <div>
            1111
            {props.age}
        </div>
    )
}
View.defaultProps = defaultProps;

export default memo(View);
