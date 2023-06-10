import React from "react";
import Carousel from "./Carousel";
import posts from "../../data/content/posts";



const slides = posts[0].media.map((post) => post.uri)
  const liked = false;
  const setLiked = () => {
  }

  const handleLikeAnimation = () => {
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
  

export default {
    title: "Post/Carousel",
    component: Carousel,
}

export const ImageSlider = () => 
<div className="max-w-[400px]">
  <Carousel animation={handleLikeAnimation}>
      {slides}
  </Carousel>
</div>

