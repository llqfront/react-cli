import React, {
  memo,
  useState,
  useEffect
} from 'react';
import {
  useSelector,
  useDispatch
} from "react-redux";
import { actionAdd } from '@/actions';
interface Props {
}
const View: React.FC = ( props: Props ) => {
  const state = useSelector((state) => state );
  const [num, setNum] = useState<number>(0);
  // const add = useSelector((state) => state.add );
  const dispatch = useDispatch();
  useEffect(()=>{
    // dispatch({
    //   type: actionAdd.FETCH_USER
    // })
    // dispatch({
    //     type:"ADD_TODO"
    // })
  },[])
  const add = () => {
    dispatch({
      type: actionAdd.FETCH_USER,
      payload:num
    })
  }
  return (
    <div>test
    <input
    type="button"
    value="点我"
    onClick={add}
    />
    </div>
  )
}
export default memo(View);
