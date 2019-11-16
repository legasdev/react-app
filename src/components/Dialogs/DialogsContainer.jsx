import { addMsgCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

// Работа с данными диалогов
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        msgs: state.dialogsPage.msgs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMsgCreator: (msg) => {
            dispatch(addMsgCreator(msg));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
