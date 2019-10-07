import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { addPost, updateNewPostText } from './redux/state';

export const renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>, 
    document.getElementById('root'));
}