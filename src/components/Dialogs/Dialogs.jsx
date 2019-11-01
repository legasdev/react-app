import React from 'react';

import s from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

// Сама страница
const Dialogs = (props) => {

    const 
        drawDataUser = props.dialogsData.map( ({ key, userName }) => <DialogItem id={key} key={key} userName={userName} />),
        drawDataMsg = props.msgs.map( ({ key, msg }) => <Message id={key} msg={msg} key={key} />);

    const
        newMsgElement = React.createRef(),
        addMsg = () => {
            props.addMsgCreator();
        },
        onChangeText = () => {
            const text = newMsgElement.current.value;
            props.updateMsgTextCreator(text);
        }
        
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
                        ref={ newMsgElement }
                        value={ props.textArea }
                        onChange={ onChangeText }>
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