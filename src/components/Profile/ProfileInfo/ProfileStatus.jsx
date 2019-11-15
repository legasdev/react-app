import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileStatus = props => {
    return (
        <>
            <div className={s.description}>
                {props.status}
            </div>
            <div>
                <input type="text" value={props.status} />
            </div>
        </>
    );
}

export default ProfileStatus;