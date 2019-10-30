import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { 
    followAC, 
    unFollowAC, 
    setUsersAC, 
    setCurrentPageAC, 
    setTotalUsersCountAC, 
    toggleIsFetchingAC
} from '../../redux/users-reducer';

// import UsersAPIComponent from './UsersAPIComponent';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

/**
 * 
 *  Вложенный API Контейнер
 * 
 * 
 */
class UsersContainer extends React.Component {

    // Была произведена ставка JSX в DOM
    componentDidMount() {

        this.props.toggleIsFetching(true);

        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then( res => { 
                this.props.setUsers([...res.data.items]); 
                this.props.setTotalUsersCount(res.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    // Обновление JSX в DOM
    componentDidUpdate() {

    }

    // Перелистывание юзеров
    onPageChanged = item => {
        this.props.setCurrentPage(item);
        this.props.toggleIsFetching(true);

        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
            .then( res => { 
                this.props.setUsers([...res.data.items]);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users 
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
        
    }
}

/**
 * 
 *  Главный контейнер
 * 
 * 
 */

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unFollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
        // Обновить пользователей
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: count => {
            dispatch(setTotalUsersCountAC(count));
        },
        toggleIsFetching: isFetching => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);