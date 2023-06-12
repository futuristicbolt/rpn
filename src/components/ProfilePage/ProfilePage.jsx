import React from 'react'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import ImageGrid from '../ImageGrid/ImageGrid'
import profile from "../../data/profiles/inteldzn.json"
import posts from "../../data/content/inteldzn_posts";
// import highlights from "../../data/content/rpn_highlights.json";
import GalleryNav from '../GalleryNav/GalleryNav';

// const items = highlights.highlights;

const images = [];

for(let i = 0; i < posts.length; i++) {
  if(posts[i].pinned) {
    const image = {url: posts[i].media[0].uri}
    image.isMultiple = posts[i].media.length > 1;
    if(posts[i].creation_timestamp){
      image.id = posts[i].creation_timestamp;
    } else {
      image.id = posts[i].media[0].creation_timestamp
    }
    image.pinned = typeof posts[i].pinned === "number";
    images.splice(posts[i].pinned + 1, 0, image)
  } 
}
for(let i = 0; i < posts.length; i++) {
  if(!posts[i].pinned) {
    const image = {url: posts[i].media[0].uri}
    image.isMultiple = posts[i].media.length > 1;
    if(posts[i].creation_timestamp){
      image.id = posts[i].creation_timestamp;
    } else {
      image.id = posts[i].media[0].creation_timestamp
    }
    image.pinned = typeof posts[i].pinned === "number";
    images.push(image)
  } 
}


function ProfilePage() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4'>
      <div className='px-[21px] flex flex-col gap-4'>
         <ProfileHeader profile={profile} />
        </div>
        {/* <HighlightsSection items={items} /> */}
        <GalleryNav />
      </div>
        
    <ImageGrid images={images} />
    </div>
    
  )
}

export default ProfilePage
