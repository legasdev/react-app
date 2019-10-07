// Список доступных диалогов
import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './DialogItem.module.css';

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

export default DialogItem;