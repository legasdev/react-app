import { addMsgCreator, updateMsgTextCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';

// Работа с данными диалогов
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        msgs: state.dialogsPage.msgs,
        textArea: state.dialogsPage.textArea,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMsgCreator: () => {
            dispatch(addMsgCreator());
        },
        updateMsgTextCreator: (text) => {
            dispatch(updateMsgTextCreator(text));
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;