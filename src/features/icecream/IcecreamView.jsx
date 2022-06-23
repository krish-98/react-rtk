import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "../icecream/icecreamSlice"

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of ice creams: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock ice cream</button>
    </div>
  )
}

export default IcecreamView
