import React from 'react';
import Axios from 'axios';

import s from './users.module.css';

import userImg from '../../assets/img/s1200.webp';

class Users extends React.Component {

    // Была произведена ставка JSX в DOM
    componentDidMount() {

        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then( res => { 
                this.props.setUsers([...res.data.items]); 
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    // Обновление JSX в DOM
    componentDidUpdate() {

    }

    // Перелистывание юзеров
    onPageChanged = item => {
        this.props.setCurrentPage(item);

        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
            .then( res => { this.props.setUsers([...res.data.items]); });
    }

    render() {
        const pagesCounter = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCounter; i++) pages.push(i);

        return (
            <div>
                <div>
                    {
                        pages.map(item => 
                            <button 
                                className={ this.props.currentPage === item && s.selectedPage }
                                onClick={ () => { this.onPageChanged(item); } } >
                            {item}
                            </button>
                        )
                    }
                </div>
                {
                    this.props.users.map( item => 
                    <div key={item.id}>
                        <span>
                            <div>
                                <img src={ item.photos.small !== null ? item.photos.small : userImg } width="256px" height="256px" alt=""/>
                            </div>
                            <div>
                                { item.followed 
                                    ? <button onClick={ () => { this.props.unfollow(item.id) } }>Unfollow</button>
                                    : <button onClick={ () => { this.props.follow(item.id) } }>Follow</button>
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
}

export default Users;