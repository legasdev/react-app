import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import { setAuthUserData } from './../../redux/auth-reducer';

import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        Axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(res => {
                if (!res.data.resultCode) {
                    const {id, email, login} = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
                
            });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);