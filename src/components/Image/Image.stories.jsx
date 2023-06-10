import React from "react";
import Image from "./Image";
import posts from "../../data/content/posts.json";

const imgSrc = posts[0].media[0].uri

export default {
    title: "Post/Image",
    component: Image,
}

export const Default = () => <div style={{width: "400px"}}>
        <Image src={imgSrc}/>
    </div>