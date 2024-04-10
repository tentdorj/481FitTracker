import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic here
    alert('Login successful!');
    // Redirect or do other actions as needed
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return React.createElement('div', {
    className: "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat",
    style: { backgroundImage: "url('picture/background.png')" }
  }, [
    React.createElement('h1', {
      className: "text-3xl font-extrabold text-gray-900 text-center mb-8",
      key: "h1"
    }, 'Log In'),
    React.createElement('form', {
      onSubmit: handleSubmit,
      className: "bg-white bg-opacity-80 rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto w-full max-w-sm",
      key: "form"
    }, [
      React.createElement('div', {
        className: "mb-4",
        key: "div-username"
      }, [
        React.createElement('label', {
          htmlFor: "username",
          className: "block text-sm font-medium text-gray-700",
          key: "label-username"
        }, 'Username:'),
        React.createElement('input', {
          id: "username",
          name: "username",
          type: "text",
          autoComplete: "username",
          required: true,
          onChange: handleInputChange,
          className: "appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          key: "input-username"
        })
      ]),
      React.createElement('div', {
        className: "mb-6",
        key: "div-password"
      }, [
        React.createElement('label', {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          key: "label-password"
        }, 'Password:'),
        React.createElement('input', {
          id: "password",
          name: "password",
          type: showPassword ? 'text' : 'password',
          autoComplete: "current-password",
          required: true,
          onChange: handleInputChange,
          className: "appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          key: "input-password"
        })
      ]),
      React.createElement('div', {
        className: "mb-6",
        key: "div-showPassword"
      }, [
        React.createElement('input', {
          type: "checkbox",
          id: "viewPassword",
          onChange: togglePasswordVisibility,
          className: "mr-2",
          key: "input-viewPassword"
        }),
        React.createElement('label', {
          htmlFor: "viewPassword",
          className: "text-sm font-medium text-gray-700 cursor-pointer",
          key: "label-viewPassword"
        }, 'Show Password')
      ]),
      React.createElement('button', {
        type: "submit",
        className: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full",
        key: "button"
      }, 'Log In')
    ]),
    React.createElement('a', {
      href: "signup",
      className: "text-center text-sm text-gray-700 hover:text-gray-900",
      key: "link-signup"
    }, "Don't have an account? Sign Up"),
    React.createElement('a', {
      href: "forgot_password",
      className: "text-center text-sm text-gray-700 hover:text-gray-900 mt-2",
      key: "link-forgotPassword"
    }, "Forgot Password?")
  ]);
};

export default Login;
