import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './users.module.css';

import userImg from '../../assets/img/s1200.webp';
import Axios from 'axios';

const Users = props => {

    const pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCounter; i++) pages.push(i);

    const onClickFollow = id => {
        Axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, 
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '76b87330-10ae-40e6-ad96-9fd11832839d'
                }
            })
            .then(res => {
                if (!res.data.resultCode)
                    props.follow(id);
            });
    }

    const onClickUnFollow = id => {
        Axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, 
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '76b87330-10ae-40e6-ad96-9fd11832839d'
                }
            })
            .then(res => {
                if (!res.data.resultCode)
                    props.unFollow(id);
            });
    }

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
                                ? <button onClick={ () => { onClickUnFollow(item.id) } }>Unfollow</button>
                                : <button onClick={ () => { onClickFollow(item.id) } }>Follow</button>
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