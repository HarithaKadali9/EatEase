import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usererror, setUserNameError] = useState('');
  const [passworderror, setPasswordError] = useState('');

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.length < 5 || value.length > 15) {
      setUserNameError('Username should be between 5 and 15 characters long');
    } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setUserNameError('Username should only contain alphabets and numbers');
    } else {
      setUserNameError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError('Password should contain at least one uppercase letter');
    } else if (!/[a-z]/.test(value)) {
      setPasswordError('Password should contain at least one lowercase letter');
    } else if (!/[0-9]/.test(value)) {
      setPasswordError('Password should contain at least one digit');
    } else if (!/[!@#$%^&*]/.test(value)) {
      setPasswordError('Password should contain at least one special character');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usererror && !passworderror && username && password) {
      console.log('userdata submitted');
    }
  };

  return (
    <div className='flex bg-food-image-3 items-center justify-center min-h-screen bg-gray-100'>
      <form 
        className='bg-primary-color w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg' 
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl font-bold text-center text-white'>Login</h2>
        <div className='flex flex-col'>
          <label className='mb-2  text-white'>Enter Username:</label>
          <input 
            className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='text' 
            value={username} 
            onChange={handleUsername} 
            placeholder='Enter username'
          />
          {usererror && <p className='mt-1 text-sm text-red-500'>{usererror}</p>}
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 text-white'>Enter Password:</label>
          <input 
            className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='password' 
            value={password}
            onChange={handlePassword}
            placeholder='Enter password'
          />
          {passworderror && <p className='mt-1 text-sm text-red-500'>{passworderror}</p>}
        </div>
        <div className='flex items-center justify-between'>
          <button 
            className='w-full p-2 text-white rounded hover:bg-white hover:text-orange-600 border focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50' 
            type='submit' 
            disabled={!!usererror || !!passworderror}
          >
            Submit
          </button>
        </div>
        <a href='#' className='block mt-4 text-sm text-center text-white hover:underline'>
          Forgot password?
        </a>
      </form>
    </div>
  );
}

export default Login;
