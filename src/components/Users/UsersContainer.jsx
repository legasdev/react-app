import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);