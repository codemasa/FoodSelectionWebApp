import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const ConfirmButton = styled.button
`
`;
let FormComponent = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email"
        component={renderField} label="Email"
        validate={email}
        warn={aol}
        />
      <ConfirmButton type="submit"> Confirm and send email </ConfirmButton>
    </form>
  )
};

FormComponent = reduxForm({
  // a unique name for the form
  form: 'basketItem',
  reviewForm: 'review'
})(FormComponent);

export default FormComponent;
