import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { 
    follow,
    setCurrentPage,
    getUsers
} from '../../redux/users-reducer';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { 
    getPageSizeSelector, 
    getUsersSuperSelector, 
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
        const {currentPage, pageSize} = this.props;
        // Получить пользователей
        this.props.getUsers(currentPage, pageSize);
    }

    // Перелистывание юзеров
    onPageChanged = item => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(item);
        this.props.getUsers(item, pageSize);
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
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, { follow, setCurrentPage, getUsers }),
    withAuthRedirect,
)(UsersContainer);