import React from 'react';

// import s from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import PreviewImg from './PreviewImg/PreviewImg';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export default function Profile(props) { 
    return (
        <div>
            <PreviewImg imgSrc="https://fog-wlprs.pw/images/700/DSC100798794.jpg" />
            <ProfileInfo />
            <MyPostsContainer 
                store={props.store}
            />
        </div>
    );
}