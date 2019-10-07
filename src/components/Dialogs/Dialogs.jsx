import React from 'react';

import s from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

// Сама страница
const Dialogs = ({ dialogsData, msgs }) => {

    const 
        drawDataUser = dialogsData.map( ({ key, userName }) => <DialogItem id={key} userName={userName} />),
        drawDataMsg = msgs.map( ({ key, msg }) => <Message id={key} msg={msg} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {drawDataUser}
            </div>

            <div className={s.messages}>
                {drawDataMsg}
            </div>
        </div>
    );
}

export default Dialogs;