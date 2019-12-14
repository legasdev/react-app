import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../redux/auth-reducer';

import { FieldComponent, createField } from './../common/FormsControls/FormsControls';
import { requiredField, maxLength } from './../../utils/validators/validators';
import { compose } from 'redux';
import { withProfileRedirect } from '../../hoc/WithAuthRedirect';

import s from './../common/FormsControls/FormsControls.module.css';

const 
    maxLength20 = maxLength(20),
    errorText = requiredField('need more symbols'),
    Input = FieldComponent('input');

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={ handleSubmit }>
            {createField('Логин', 'email', 'text', [ errorText, maxLength20 ], Input)}
            {createField('Пароль', 'password', 'password', [ errorText, maxLength20 ], Input)}
            {createField(null, 'rememberMe', 'checkbox', [], Input, 'Запомнить')}
            {
                error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button type={'submit'}>Войти</button>
            </div>
        </form>
    );
}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

const Login = props => {
    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe);
    }

    return (
        <div>
            <h1>Логин</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    );
}

export default compose(
    connect(null, {login}),
    withProfileRedirect
)(Login);