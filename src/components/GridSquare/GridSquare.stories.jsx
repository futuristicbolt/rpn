import React from "react";
import GridSquare from "./GridSquare"
import posts from "../../data/content/rpn_posts.json"

const id = posts[0].media[0].creation_timestamp

export default {
    title: "Grids/GridSquare",
    component: GridSquare,
}

export const Default = () => <GridSquare id={id} imgSrc={posts[0].media[0].uri}  isMultiple={posts[0].media.length > 1} />

