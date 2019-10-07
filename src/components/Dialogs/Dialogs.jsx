import React from 'react';

import s from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

// Сама страница
const Dialogs = ({ dialogsData, msgs }) => {

    const 
        drawDataUser = dialogsData.map( ({ key, userName }) => <DialogItem id={key} userName={userName} />),
        drawDataMsg = msgs.map( ({ key, msg }) => <Message id={key} msg={msg} />);

    const
        newMsgElement = React.createRef(),
        addMsg = () => {
            alert(newMsgElement.current.value);
        };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {drawDataUser}
            </div>

            <div className={s.messages}>
                {drawDataMsg}
                <div className={s.add_msg}>
                    <textarea 
                        className={s.textarea} 
                        name="addNewPost" 
                        ref={newMsgElement}>
                    </textarea>
                    <button 
                        className={s.button} 
                        onClick={ addMsg }>
                            Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;