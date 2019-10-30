import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

/**
 * 
 * @param {Object} dispatch 
 */
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);