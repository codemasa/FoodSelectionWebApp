import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
const changed = value =>
  value == 'chooseOption'
    ? 'Please select an option'
    : undefined

const renderMeal = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} placeholder={label} type={type}>
        <option value="chooseOption">-- Choose Option --</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderPortions = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} placeholder={label} type={type}>
        <option value="chooseOption">-- Choose Option --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


let FormComponent = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <br/>Meal:<br/>
      <Field name="meal" component="select" validate={[required, changed]} component={renderMeal}/>
      <br/>How many portions?<br/>
      <Field name="portions" component="select" validate={[required, changed]} component={renderPortions}/>
      <br/>
      Instructions (optional):<br/>
      <Field name="instructions" component="textarea" rows={4} cols={50} placeholder="Special Instructions"/>
      <br/><br/>
      <button type="submit">Add to basket</button>
    </form>
  )
};

FormComponent = reduxForm({
  // a unique name for the form
  form: 'basketItem',
  reviewForm: 'review'
})(FormComponent);

export default FormComponent;
