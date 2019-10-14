import React from 'react';
import { addMsgCreator, updateMsgTextCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

// Работа с данными диалогов
const DialogsContainer = (props) => {

    const 
        state = props.store.getState().dialogsPage;

    const
        addMsg = () => {
            props.store.dispatch(addMsgCreator());
        },
        onChangeText = (text) => {
            props.store.dispatch(updateMsgTextCreator(text));
        }
    return (<Dialogs 
                addMsgCreator={addMsg} 
                updateMsgTextCreator={onChangeText} 
                dialogsData={state.dialogsData}
                msgs={state.msgs}
                textArea={state.textArea}
            />);
}

export default DialogsContainer;