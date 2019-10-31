import React from 'react';
import { connect } from 'react-redux';

import { 
    follow, 
    unFollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching,
    toggleFollowingProgress
} from '../../redux/users-reducer';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

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

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then( data => { 
                this.props.setUsers([...data.items]); 
                this.props.setTotalUsersCount(data.totalCount);
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

        usersAPI.getUsers(item, this.props.pageSize)
            .then( data => { 
                this.props.setUsers([...data.items]);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users 
                { ...this.props }
                onPageChanged={this.onPageChanged}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer);