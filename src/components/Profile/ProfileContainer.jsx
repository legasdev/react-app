import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Profile from './Profile';

import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId || this.props.loggingId || 2;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile 
                {...this.props} 
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggingId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);