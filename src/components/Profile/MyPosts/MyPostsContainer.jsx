import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';

const 
    mapStateToProps = (state) => {
        return {
            postsData: state.profilePage.postsData
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {
            addPost: newPostText => {
                dispatch(addPostActionCreator(newPostText));
            },
        };
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;