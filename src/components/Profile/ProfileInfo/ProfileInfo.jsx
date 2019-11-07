import React from 'react';

import s from './ProfileInfo.module.css';

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {

    if (!props.profile) return <Preloader />

    return (
        <section className={s.preview_info}>
            <h2>Информация</h2>
            <img className={s.img_avatar} src={props.profile.photos.small} alt="" />
            <ProfileStatus 
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
        </section>        
    );
}

export default ProfileInfo;