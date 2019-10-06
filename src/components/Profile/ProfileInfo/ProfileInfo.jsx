import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <section className={s.preview_info}>
            <h2>Информация</h2>
            <img className={s.img_avatar} src="https://dmitrykireev.com/wp-content/uploads/2017/02/avatar-klienta-dmitrykireev.com_.jpg" alt="" />
            <div className={s.description}>
                Здесь инфа
            </div>
        </section>        
    );
}

export default ProfileInfo;