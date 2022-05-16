import { useState, useEffect } from 'react';

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '', 
    phoneNumber:'',
    checkbox: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;