import React from 'react';
import { reduxForm, Field } from 'redux-form';

import s from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import { requiredField, maxLength } from '../../utils/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength10 = maxLength(10);

// Форма диалога
const DialogForm = props => {
    const { handleSubmit } = props;
    return (
        <form 
            onSubmit={handleSubmit}
            className={s.add_msg}>
            <Field 
                className={s.textarea}
                component={Textarea}
                name={'newMsgBody'}
                validate={ [requiredField, maxLength10] }
            />
            
            <button className={s.button}>
                    Отправить
            </button>
        </form>
    );
};

const AddMsgFormRedux = reduxForm({form: 'addMsgForm'})(DialogForm);

// Сама страница
const Dialogs = (props) => {

    const onSubmit = values => {
        props.addMsgCreator(values.newMsgBody);
    };

    const 
        drawDataUser = props.dialogsData.map( ({ key, userName }) => <DialogItem id={key} key={key} userName={userName} />),
        drawDataMsg = props.msgs.map( ({ key, msg }) => <Message id={key} msg={msg} key={key} />);
        
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {drawDataUser}
            </div>

            <div className={s.messages}>
                {drawDataMsg}
                <AddMsgFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default Dialogs;