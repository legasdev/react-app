import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';

const 
    mapStateToProps = (state) => {
        return {
            newPostText: state.profilePage.newPostText,
            postsData: state.profilePage.postsData
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator());
            },
            updateNewPostText: (text) => {
                dispatch(updatePostTextActionCreator(text));
            }
        };
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;