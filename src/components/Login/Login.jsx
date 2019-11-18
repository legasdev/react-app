import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { FieldComponent } from './../common/FormsControls/FormsControls';
import { requiredField, maxLength } from './../../utils/validators/validators';

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
                    name={'login'}
                    component={Input}
                    validate={[ errorText, maxLength20 ]}
                />
            </div>
            <div>
                <Field 
                    placeholder={'Пароль'} 
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
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <h1>Логин</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    );
}

export default Login;