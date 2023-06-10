import React from 'react'
import "./GridSquare.css"
import stack from "../../../src/icons/stack.svg"
import pin from "../../../src/icons/pin.png"
import { HashLink as Link } from "react-router-hash-link";


function GridSquare(props) {
   const { imgSrc, isMultiple, id, isPinned } = props;
  return (
    <Link className='grid-item relative' to={`/post#${id}`}>
    <div >
      {(isMultiple && !isPinned) && <img src={stack} className="w-[18px] absolute m-[10px] right-0" alt="" />}
      { isPinned && <img src={pin} className="pin-icon w-[22px] absolute m-[10px] right-0" alt="" />}
      <img src={imgSrc} className="w-full square" alt="" />
    </div>
    </Link>
  )
}

export default GridSquare