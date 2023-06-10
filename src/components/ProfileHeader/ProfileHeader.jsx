import React from 'react'
import { decodeFBString } from '../../utils';
import posts from "../../data/content/rpn_posts.json";


function ProfileHeader(props) {
    const { profile } = props;
    const username = profile.profile_user[0].string_map_data.Username.value;
    const profileImg = profile.profile_user[0].media_map_data["Profile Photo"].uri;
    const profileName = profile.profile_user[0].string_map_data.Name.value;
    const profileBio = profile.profile_user[0].string_map_data.Bio.value;

  return (
    <div className='flex flex-col gap-4 mt-4'>
        <div className='h-10 flex justify-center items-center'>
        <span className='font-bold tracking-wider'>{username}</span>
    </div>
    <div className='max-w-[356px] w-full flex flex-col'>
        
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <img src={profileImg} className="w-[78px] h-[78px] rounded-full border border-gray-700" alt="" />
                <div className='flex justify-evenly gap-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold'>{posts.length}</span>
                        <span>Posts</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold'>757</span>
                        <span>Followers</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold'>1,031</span>
                        <span>Following</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='font-bold text-left'>{profileName}</div>
                <pre className='whitespace-pre-wrap'>{decodeFBString(profileBio)}</pre>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileHeader