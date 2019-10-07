import React from 'react';

import s from './Message.module.css';

const Message = ({ id, msg }) => {
    return (
        <div className={s.msg} data-id={id}>{msg}</div>
    );
}

export default Message;