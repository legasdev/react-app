import React from 'react';

import s from './MyPosts.module.css';

import Post from './Post/Post';

export default function MyPosts(props) {

    const 
        newPostElement = React.createRef();

    const onAddPostUi = () => {
        props.addPost();
    }
    
    const onPostChange = () => {
        const text = newPostElement.current.value; 
        props.updateNewPostText(text);
    }

    return (
        <section className={s.posts}>
            <h2>Посты</h2>
            <div className={s.add_post}>
                <textarea 
                    className={s.textarea} 
                    name="addNewPost" 
                    ref={ newPostElement } 
                    value={ props.newPostText }
                    onChange={ onPostChange }
                />
                <button 
                    className={s.button} 
                    onClick={ onAddPostUi }>
                        Добавить пост
                </button>
            </div>
            <div className={s.post_wrapper}>
                { DrawDataPost(props.postsData) }
            </div>
        </section>
    );
}

// Обработка данных для постов
function DrawDataPost(array) {
    return array.map( ({ key, post, likes }) => <Post id={key} key={key} msg={post} likes={likes} /> );
}