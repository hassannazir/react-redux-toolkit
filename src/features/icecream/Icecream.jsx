import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './icecreamSlice'
const Icecream = () => {
  const dispatch=useDispatch()
  const icecreams=useSelector(state=>state.icecream.numOfIcecreams);
  return (
    <div>
        <h2>
            Num Of Icecreams: {icecreams}
        </h2>
        <button onClick={()=>{dispatch(ordered())}}>Order Icecream</button>
        <button onClick={()=>{dispatch(restocked(3))}}>Restock Icecream</button>
    </div>
  )
}

export default Icecream