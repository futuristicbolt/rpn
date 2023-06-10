import React from 'react'
import Carousel from '../Carousel/Carousel'
import "./Post.css"
import 'swiper/css';
import like from "../../icons/like.svg";
import comment from "../../icons/comment.svg";
import send from "../../icons/send.svg";
import save from "../../icons/save.svg";
import dots from "../../icons/dots.svg"
import { useState } from 'react';
import { decodeFBString } from '../../utils';

function Post(props) {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {handleLikeAnimation(); setLiked(!liked)};
    const { id, media, description, location, user, ...rest } = props
    const images = media.map(item => item.uri);
    const username = user.profile_user[0].string_map_data.Username.value;
    const profileImg = user.profile_user[0].media_map_data["Profile Photo"].uri;

    const handleLikeAnimation = (e) => {
        if(liked === true) {
          return
        } else {
          setLiked(true);
          setLikeHeartOpacity();
        }
      }
    
    
      function setLikeHeartOpacity() {
        const likeHeartDivs = document.querySelectorAll(".like-heart");
      
        if (likeHeartDivs) {
          likeHeartDivs.forEach((div) => {
            div.classList.add("animating");
          })
      
          setTimeout(() => {
            likeHeartDivs.forEach((div) => {
                div.classList.remove("animating");
              })
          }, 1100);
        }
      }

  return (
    <div id={id} className="post flex flex-col gap-1 min-h-screen" {...rest} >
        <div className="pt-4 pb-2 pl-3 pr-2 flex justify-between items-center w-full">
            <div className='flex gap-3 items-center pr-1'>
                <img src={profileImg} className="h-[42px] w-[42px] p-[5px] rounded-full" alt="" />
                <div className='flex flex-col'>
                    <a href="/" className='font-bold'>{username}</a>
                    {location && 
                    <span className='text-xs p-[2px] text-left'>{location}</span>
                    }
                </div>
            </div>
            <img src={dots} className='w-10 p-[11px] contain' alt="" />
        </div>
        <div>
            <Carousel animation={handleLikeAnimation}>
                {images}
            </Carousel>
            <div className='mt-1 pt-[6px] pb-2 px-4 flex justify-between items-center w-full'>
                <div className='flex'>
                    <img src={like} className={`like-heart h-10 w-10 p-2 contain hover:brightness-[2000%] cursor-pointer transition-all duration-100 ${liked ? "brightness-[2000%]" : "brightness-100"}`} onClick={toggleLike} alt="" />
                    <img src={comment} className='h-10 w-10 p-2 contain'  alt=""/>
                    <img src={send} className='h-10 w-10 p-2 contain'  alt=""/>
                </div>
                <img src={save} className='h-10 w-10 p-2 contain' alt=""/>
            </div>
            <pre className='whitespace-pre-wrap px-6'>
            <a href="/" className='font-bold'>{username} </a>{decodeFBString(description)}
            </pre>
        </div>
        
    </div>
  )
}

export default Post
