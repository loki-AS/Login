import React, { useState } from 'react';
import './Form.scss';
import FormSignup from './FormSignup';
import Chart from './Chart'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
    <>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Chart />
        )}
    </>
  );
};

export default Form;