import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field 
                    placeholder={'Логин'}
                    name={'login'}
                    component={'input'}
                />
            </div>
            <div>
                <Field 
                    placeholder={'Пароль'} 
                    name={'password'}
                    component={'input'}
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