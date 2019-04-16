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
  position: relative;
  justify-content: flex;

`
const SearchBar = styled.input
`
  width 40vw;
  font-size: 20px;
  padding: 1rem;
  padding-left: 4rem;

`
const SearchIcon = styled(Icon)
`
  position: absolute;
  padding-top: .8em;
  padding-left: 1em;
  color: #ABABAB;
`


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
