import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';

// Список доступных диалогов
const DialogItem = ({ id, userName }) => {
    return (
        <div>
            <NavLink 
                to={`/dialogs/${id}`} 
                className={s.dialog} 
                activeClassName={s.active}
            >
                {userName}
            </NavLink>
        </div>
    );
}

const Message = ({ msg }) => {
    return (
        <div className={s.msg}>{msg}</div>
    );
}

// Сама страница
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id="1" userName="User 1" />
                <DialogItem id="2" userName="User 2" />
                <DialogItem id="3" userName="User 3" />
                <DialogItem id="4" userName="User 4" />
                <DialogItem id="5" userName="User 5" />
            </div>

            <div className={s.messages}>
                <Message msg="Сообщение 1" />
                <Message msg="Сообщение 2" />
                <Message msg="Сообщение 3" />
                <Message msg="Сообщение 4" />
            </div>
        </div>
    );
}

export default Dialogs;