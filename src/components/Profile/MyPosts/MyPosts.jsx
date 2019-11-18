import React from 'react';
import { reduxForm, Field } from 'redux-form';

import s from './MyPosts.module.css';

import Post from './Post/Post';

import { FieldComponent } from './../../common/FormsControls/FormsControls';
import { requiredField, maxLength } from './../../../utils/validators/validators';

const
    required = requiredField('Давай больше букв!'),
    maxLength40 = maxLength(40),
    Textarea = FieldComponent('textarea');

const PostMsgForm = props => {
    const { handleSubmit } = props;
    return (
        <form className={s.add_post} onSubmit={handleSubmit}>
            <Field 
                className={s.textarea}
                component={Textarea}
                validate={[required, maxLength40]}
                name={'addNewPost'}
            />
            <button className={s.button}>
                Добавить пост
            </button>
        </form>
    );
}

const PostMsgFormRedux = reduxForm({form: 'postMsgForm'})(PostMsgForm);

const MyPosts = props => {

    const onSubmit = values => {
        props.addPost(values.addNewPost);
    };

    return (
        <section className={s.posts}>
            <h2>Посты</h2>
            <PostMsgFormRedux onSubmit={onSubmit} />
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

export default MyPosts;