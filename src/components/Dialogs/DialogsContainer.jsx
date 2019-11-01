import { addMsgCreator, updateMsgTextCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

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
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
