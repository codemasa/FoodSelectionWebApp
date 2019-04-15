import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {search} from 'react-icons-kit/icomoon/search';

const FormDiv = styled.div
`

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
const Search = styled.span
`
  background-color: #FFFFFF
  position: relative;
  justify-content: flex;

`
const SearchBar = styled.input
`
  font-size: 20px;
  padding: 1rem;
  padding-left: 4rem;
  float:left;
`
const SearchIcon = styled(Icon)
`
  position: absolute;
  padding-top: .8em;
  padding-left: 1em;
  color: #ABABAB;
`

const required = value => value ? undefined : 'Required'

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Search>
      <SearchIcon icon={search}/>
      <SearchBar {...input} placeholder={label} type={type}/>
    </Search>
  </div>
)

let FormComponent = props => {
  const { handleSubmit } = props;
  return (
      <Search onSubmit={handleSubmit}>

          <Field name="search" type="input"
            component={renderField} label="Search"
            />
      </Search>
  )
};

FormComponent = reduxForm({
  // a unique name for the form
  form: 'basketItem',
  reviewForm: 'review'
})(FormComponent);

export default FormComponent;
