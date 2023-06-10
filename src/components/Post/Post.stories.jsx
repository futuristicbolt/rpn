import React from "react";
import Post from "./Post";
import posts from "../../data/content/posts";
import profile from "../../data/profiles/reclaimedByNature.json";

export default {
    title: "Post/Post",
    component: Post,
}

export const Default = () => <div className="max-w-[500px]">
        <Post media={posts[0].media} description={posts[0].title} location="Into The Woods" user={profile}/>
    </div>
