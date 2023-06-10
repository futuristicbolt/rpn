import React from "react";
import GalleryNav from "./GalleryNav"


export default {
    title: "Profile/GalleryNav",
    component: GalleryNav,
}

export const Default = () =><div className='w-screen '>
<div className='flex flex-col gap-4'>
  <GalleryNav reels={true} tags="true"/>
</div>
</div>

