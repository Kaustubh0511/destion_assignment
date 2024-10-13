import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const signupSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const handleSignup = async (values) => {
    try {
      const response = await axios.post('/api/signup', values);
      localStorage.setItem('token', response.data.token);  // Store JWT
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Formik
          initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={signupSchema}
          onSubmit={handleSignup}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username</label>
                <Field
                  name="username"
                  type="text"
                  className="mt-1 p-2 border w-full rounded-md"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="mt-1 p-2 border w-full rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="mt-1 p-2 border w-full rounded-md"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="mt-1 p-2 border w-full rounded-md"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
