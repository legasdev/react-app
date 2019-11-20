import React, { useState, useEffect } from 'react';

import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = props => {

    const 
        [editMode, setEditMode] = useState(false),
        [status, setStatus]     = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.description}>
            {
                !editMode
                    ? <span 
                        onDoubleClick={ activateEditMode }>
                            {status || '------'}
                        </span>
                    : <input 
                        type="text" 
                        autoFocus={true} 
                        onBlur={ deactivateEditMode } 
                        onChange={onStatusChange} 
                      />
            }
        </div>
    );
}

export default ProfileStatusWithHooks;