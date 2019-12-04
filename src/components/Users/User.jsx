import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './users.module.css';

import userImg from '../../assets/img/s1200.webp';

const User = ({user, follow, followingInProgress, ...props}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={ user.photos.small !== null ? user.photos.small : userImg } className={s.avatar} alt=""/>
                    </NavLink>
                </div>
                <div>
                    { user.followed 
                        ? <button 
                            onClick={ () => { follow(user.id, false); } }
                            disabled={ followingInProgress.some( id => id === user.id ) } 
                          >Unfollow</button>
                        : <button 
                            onClick={ () => { follow(user.id, true); } }
                            disabled={ followingInProgress.some( id => id === user.id ) } 
                          >Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    );
}

export default User;