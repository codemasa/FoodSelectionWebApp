import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const FormDiv = styled.div
`
  background-color: #807443;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const ConfirmButton = styled.button
`
  margin-top: 2em;

`;
const Form = styled.form
`
  margin-top: 2em;

`;

const EmailField = styled.input
`
 margin-right: 1em;
`;
const ErrorSpan = styled.span
`
  margin-left: 1em;
  color: #AF2332;
`;

const required = value => value ? undefined : 'Required'

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
      <EmailField {...input} placeholder={label} type={type}/>
      {touched && ((error && <ErrorSpan>{error}</ErrorSpan>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let FormComponent = props => {
  const { handleSubmit } = props;
  return (
      <Form onSubmit={handleSubmit}>
        <FormDiv>

          <Field name="email" type="email"
            component={renderField} label="Email"
            validate={[email,required]}
            warn={aol}
            />
        </FormDiv>

        <ConfirmButton type="submit"> Confirm and send email </ConfirmButton>
      </Form>
  )
};

FormComponent = reduxForm({
  // a unique name for the form
  form: 'basketItem',
  reviewForm: 'review'
})(FormComponent);

export default FormComponent;
