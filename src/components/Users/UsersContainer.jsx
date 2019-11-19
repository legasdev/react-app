import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { 
    follow, 
    unFollow, 
    setCurrentPage,
    getUsers
} from '../../redux/users-reducer';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { 
    getPageSizeSelector, 
    getUsersSelector, 
    getTotalUsersCountSelector,
    getCurrentPageSelector,
    getFetchingSelector,
    getFollowingInProgressSelector,
} from '../../redux/users-selectors';

/**
 * 
 *  Вложенный API Контейнер
 * 
 * 
 */
class UsersContainer extends React.Component {

    // Была произведена ставка JSX в DOM
    componentDidMount() {
        // Получить пользователей
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    // Обновление JSX в DOM
    componentDidUpdate() {

    }

    // Перелистывание юзеров
    onPageChanged = item => {
        this.props.setCurrentPage(item);
        this.props.getUsers(item, this.props.pageSize);
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

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, { follow, unFollow, setCurrentPage, getUsers }),
    withAuthRedirect,
)(UsersContainer);