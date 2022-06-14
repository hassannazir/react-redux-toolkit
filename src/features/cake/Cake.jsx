import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered as cakeOrdered,restocked as cakeRestocked } from './cakeSlice'
const Cake = () => {
  const dispatch=useDispatch()
  const cakes=useSelector(state=>state.cake.numOfCakes);
  return (
    <div>
        <h2>
            Num Of Cakes: {cakes}
        </h2>
        <button onClick={()=>dispatch(cakeOrdered())}>Order Cake</button>
        <button onClick={()=>dispatch(cakeRestocked(2))}>Restock Cake</button>
    </div>
  )
}

export default Cake