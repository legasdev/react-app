import React from 'react';
import { Field } from 'redux-form';

import s from './FormsControls.module.css';

export const FieldComponent = Component => ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;

    return (
        <div className={s.formsControl + ' ' + (hasError ? s.error : '')}>
            <Component {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const createField = (placeholder, name, type, validators, component, text = '') => (
    <div>
        <Field placeholder={placeholder} type={type} component={component}
                name={name} validate={validators} />{text}
    </div>
);

// export const FormControls = ({input, meta, ...props}) => {

//     const hasError =  meta.touched && meta.error;

//     return (
//         <>
//         <div className={s.formsControl + ' ' + (hasError ? s.error : '')}>
//             {props.child}
//         </div>
//         {
//            hasError && <span>{meta.error}</span>
//         }
//         </>
//     );
// }

// // Textarea с полем для ошибки
// export const Textarea = ({input, meta, ...props}) => <FormControls {...props}><textarea {...input} {...props} /></FormControls>;

// // Input с полем для ошибки
// export const Input = ({input, meta, ...props}) => {
//     return (
//         <FormControls {...props}><input {...input} {...props} /></FormControls>
//     );
// } 