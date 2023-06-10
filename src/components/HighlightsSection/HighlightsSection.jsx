import React from 'react'
import "./HighlightsSection.css"

function HighlightsSection(props) {
    const { items } = props;
  return (
    <div className='h-[88px] w-full flex justify-start gap-3 overflow-scroll highlights-slider pl-[21px]'>
        {items.map((item) =>
            <div className='flex flex-col gap-1 min-w-[72px] cursor-pointer' key={item.thumbnail}>
                <img src={item.thumbnail} className='rounded-full h-16 w-16 p-1 border border-gray-700' alt="" />
            <div className='text-xs'>Shout Outs!</div>
    </div>
        )}
        
    </div>
  )
}

export default HighlightsSection