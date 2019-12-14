import React from 'react';

import s from './ProfileInfo.module.css';

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, updateUserStatus, status}) => {

    if (!profile) return <Preloader />

    const onMainPhotoSelected = e => if (e.target.files.length) savePhoto(e.target.files[0]);

    return (
        <section className={s.preview_info}>
            <h2>Информация</h2>
            <img className={s.img_avatar} src={profile.photos.small} alt="" />
            <ProfileStatusWithHooks
                status={status}
                updateUserStatus={updateUserStatus}
            />
        </section>        
    );
}

export default ProfileInfo;