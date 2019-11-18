import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../redux/auth-reducer';

import { FieldComponent } from './../common/FormsControls/FormsControls';
import { requiredField, maxLength } from './../../utils/validators/validators';
import { compose } from 'redux';
import { withProfileRedirect } from '../../hoc/WithAuthRedirect';

const 
    maxLength20 = maxLength(20),
    errorText = requiredField('need more symbols'),
    Input = FieldComponent('input');

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field 
                    placeholder={'Логин'}
                    name={'email'}
                    component={Input}
                    validate={[ errorText, maxLength20 ]}
                />
            </div>
            <div>
                <Field 
                    placeholder={'Пароль'}
                    type={'password'}
                    component={Input}
                    name={'password'}
                    validate={[ errorText, maxLength20 ]}
                /> 
            </div>
            <div>
                <Field 
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={'input'}
                />Запомнить
            </div>
            <div>
                <button type={'submit'}>Войти</button>
            </div>
        </form>
    );
}

const LoginFormRedux = reduxForm({
    form: 'login',
})(LoginForm);

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