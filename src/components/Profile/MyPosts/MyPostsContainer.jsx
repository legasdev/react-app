import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';

export default function MyPostsContainer(props) {

    const
        state = props.store.getState().profilePage;

    const onAddPostUi = () => {
        props.store.dispatch(addPostActionCreator()); 
    }
    
    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text)); 
    }

    return (<MyPosts
            addPost={onAddPostUi}
            updateNewPostText={onPostChange}
            newPostText={state.newPostText}
            postsData={state.postsData}
        />);
}