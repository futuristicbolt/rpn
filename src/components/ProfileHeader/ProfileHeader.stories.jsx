import React from "react";
import ProfileHeader from "./ProfileHeader"
import profile from "../../data/profiles/reclaimedByNature.json";



export default {
    title: "Profile/ProfileHeader",
    component: ProfileHeader,
}

export const Default = () => <div className="w-80">
    <ProfileHeader profile={profile} />
    </div>

