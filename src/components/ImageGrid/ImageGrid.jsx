import React from 'react'
import GridSquare from "../GridSquare/GridSquare";
import "./ImageGrid.css"

function ImageGrid(props) {
  const { images } = props;
  const squares = [];

  for(let i = 0; i < images.length; i++) {
    if(images[i].pinned) {
      squares.splice(images[i].pinned - 1, 0, images[i])
    } else {
      squares.push(images[i]);
    }
  }

  return (
    <div className='image-grid cursor-pointer'>
        {squares.map((image) => 
          <GridSquare id={image.id} imgSrc={image.url} isMultiple={image.isMultiple} isPinned={image.pinned} key={image.url}></GridSquare>
          )}
    </div>
  )
}

export default ImageGrid