import React from 'react'
import { Button, Col, Container, Form, Row, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useForm from './useForm'
import validateInfo from './validateInfo'
import './Form.scss'
import img1 from './img/background.png';

function FormSignup({submitForm}) {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo)

  return (
      <>
          <Container className="mt-5">
              <Row>
                  <Col lg={6} md={10} sm={12} >
                  <img src={img1}  className="w-100 pad pad2"/>
                  <div className="img-text">
                      <h1 className="heading">Choose a date range</h1>
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='pad2' >
                  <Form onSubmit={handleSubmit} className="my__form">
                  <h1 className="heading" >Create an account</h1>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email" className="change">Your email address</Form.Label>
                    <Form.Control 
                   type='text' 
                   name='email' 
                   id='email'
                   value={values.email} 
                   onChange={handleChange}
                   />
                   {errors.email && <p className="err">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="password" className="change">Your password</Form.Label>
                    <Form.Control 
                   type='password' 
                   name='password' 
                   id='password'
                   value={values.password} 
                   onChange={handleChange}
                   />
                   {errors.password && <p className="err">{errors.password}</p>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="password2" className="change">Confirm your password</Form.Label>
                    <Form.Control 
                   type='password' 
                   name='password2' 
                   id='password2'
                   value={values.password2} 
                   onChange={handleChange}
                   />
                   {errors.password2 && <p>{errors.password2}</p>}
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="username" className="change">Your full name</Form.Label>
                    <Form.Control 
                   type='username' 
                   name='username' 
                   id='username'
                   value={values.username} 
                   onChange={handleChange}
                   />
                   {errors.username && <p>{errors.username}</p>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="phoneNumber" className="change">Your phone number</Form.Label>
                    <Form.Control 
                   type='phoneNumber' 
                   name='phoneNumber' 
                   id='phoneNumber'
                   value={values.phoneNumber} 
                   onChange={handleChange}
                   />
                   {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                    onChange={handleChange}
                    type="checkbox" 
                    name='checkbox'
                    value="yes"
                    id='checkbox'
                    label="I read and agree Terms and Conditions"
                   />
                    {errors.checkbox && <p>{errors.checkbox}</p>}
                </Form.Group>

                <Button variant="primary btn-block" type="submit" size="lg">Create account</Button>

                  </Form>
                  </Col>
              </Row>
          </Container>
      </>
  )
}

export default FormSignup