import React from 'react';

// import s from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PreviewImg from './PreviewImg/PreviewImg';

export default function Profile() { 
    return (
        <div>
            <PreviewImg imgSrc="https://fog-wlprs.pw/images/700/DSC100798794.jpg" />
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}