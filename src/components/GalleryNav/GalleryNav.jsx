import React from 'react'
import gridIcon from  "../../icons/grid.svg"
import reelIcon from  "../../icons/reel.svg"
import tagIcon from  "../../icons/tag.svg"
import "./GalleryNav.css";
import { useState } from 'react';

function GalleryNav(props) {
    const { reels, tags } = props;
    const [currGallery, setCurrGallery] = useState("imageGallery");
    const selectImage = () => setCurrGallery("imageGallery")
    const selectReels = () => setCurrGallery("reelsGallery")
    const selectTags = () => setCurrGallery("tagsGallery")

  return (
    <div className='flex w-full h-13 pt-3  mb-1 justify-evenly items-center'>
        <img src={gridIcon} onClick={selectImage} className={`galleryIcon h-10 border-b-white cursor-pointer ${currGallery === "imageGallery" ? "pb-[14px] border-b-2" : "pb-4"}`} alt="" />
        {reels && <img src={reelIcon} onClick={selectReels} className={`galleryIcon h-10 border-b-white cursor-pointer ${currGallery === "reelsGallery" ? "pb-[14px] border-b-2" : "pb-4"}`} alt="" />}
        {tags && <img src={tagIcon} onClick={selectTags} className={`galleryIcon h-10 border-b-white cursor-pointer ${currGallery === "tagsGallery" ? "pb-[14px] border-b-2" : "pb-4"}`} alt="" />}
    </div>
  )
}

export default GalleryNav