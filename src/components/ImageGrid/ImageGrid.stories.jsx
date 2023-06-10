import React from "react";
import ImageGrid from "./ImageGrid"
import posts from "../../data/content/posts";

const images = posts.map((post) => {
    const multiple = post.media.length > 1;
    return {
        id: post.creation_timestamp,
        url: post.media[0].uri,
        isMultiple: multiple
    }
})

export default {
    title: "Grids/ImageGrid",
    component: ImageGrid,
}

export const Default = () => <div>
    <ImageGrid images={images}/>
</div>

