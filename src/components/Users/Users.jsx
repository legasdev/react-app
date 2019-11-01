import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './users.module.css';

import userImg from '../../assets/img/s1200.webp';

const Users = props => {

    const pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCounter; i++) pages.push(i);

    return (
        <div>
            <div>
                {
                    pages.map(item => 
                        <button key={item}
                            className={ props.currentPage === item ? s.selectedPage : undefined }
                            onClick={ () => { props.onPageChanged(item); } } >
                        {item}
                        </button>
                    )
                }
            </div>
            {
                props.users.map( item => 
                <div key={item.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${item.id}`}>
                                <img src={ item.photos.small !== null ? item.photos.small : userImg } className={s.avatar} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            { item.followed 
                                ? <button 
                                    onClick={ () => { props.unFollow(item.id); } }
                                    disabled={ props.followingInProgress.some( id => id === item.id ) } 
                                  >Unfollow</button>
                                : <button 
                                    onClick={ () => { props.follow(item.id); } }
                                    disabled={ props.followingInProgress.some( id => id === item.id ) } 
                                  >Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{'item.location.city'}</div>
                            <div>{'item.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;