import React from 'react';

import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            });
    }

    activateEditStatus = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditStatus = () => {
        this.setState({
            editMode: false,
        });

        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = e => {
        this.setState({ status: e.currentTarget.value });
    }

    render() {
        return (
            <div className={s.description}>
                {
                    !this.state.editMode
                        ? <span onDoubleClick={ this.activateEditStatus }>{this.props.status || '------'}</span>
                        : <input type="text" onChange={this.onStatusChange} onBlur={this.deactivateEditStatus} autoFocus={true} value={this.state.status} />
                }
            </div>
        );
    }
}

export default ProfileStatus;