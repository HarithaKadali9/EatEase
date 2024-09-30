import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '', 
    phonenumber: '', 
    password: '', 
    confirmpassword: ''
  });
  const [errors, setErrors] = useState({
    username: '', 
    phonenumber: '', 
    password: '', 
    confirmpassword: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const validateInput = (name, value) => {
    let error = '';
    
    if (name === 'username') {
      const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailregex.test(value)) error = 'Please enter a valid email address';
    } 
    else if (name === 'phonenumber') {
      if (value.length !== 10) error = 'Phone number should have 10 digits';
      else if (!/^[0-9]+$/.test(value)) error = 'Phone number should only contain digits';
    } 
    else if (name === 'password') {
      if (value.length < 8) error = 'Password should be at least 8 characters long';
      else if (!/[a-z]/.test(value)) error = 'Password should contain at least one lowercase letter';
      else if (!/[A-Z]/.test(value)) error = 'Password should contain at least one uppercase letter';
      else if (!/[0-9]/.test(value)) error = 'Password should contain at least one digit';
      else if (!/[!@#$%^&*]/.test(value)) error = 'Password should contain at least one special symbol';
    } 
    else if (name === 'confirmpassword') {
      if (value !== formData.password) error = 'Passwords do not match';
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.username && !errors.phonenumber && !errors.password && !errors.confirmpassword && 
        formData.username && formData.phonenumber && formData.password && formData.confirmpassword) {
      console.log("UserData Submitted");
      setSubmitted(true);
    }
  };

  return (
    <div className='bg-food-image-3 signup flex justify-center items-center p-12 text-white min-h-screen' id='signup'>
      <form className='w-full max-w-lg mx-4 mb-4 border-4 border-yellow-500 p-8 bg-primary-color rounded shadow-lg' onSubmit={handleSubmit}>
        <h2 className='text-3xl text-white text-center mb-6'>Signup</h2>
        
        <div className='mb-6'>
          <label className='block text-white mb-2'>Enter Email:</label>
          <input 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='email' 
            name='username'
            onChange={handleInputChange}
            placeholder='Enter email' 
            value={formData.username}
          />
          {errors.username && <p className='text-red-500 text-sm mt-1'>{errors.username}</p>}
        </div>
        
        <div className='mb-6'>
          <label className='block text-white mb-2'>Enter Phone number:</label>
          <input 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='text' 
            name='phonenumber'
            onChange={handleInputChange}
            placeholder='Phone number' 
            value={formData.phonenumber}
          /> 
          {errors.phonenumber && <p className='text-red-500 text-sm mt-1'>{errors.phonenumber}</p>}
        </div>
        
        <div className='mb-6'>
          <label className='block text-white mb-2'>Enter Password:</label>
          <input 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='password' 
            name='password'
            onChange={handleInputChange}
            placeholder='Enter password' 
            value={formData.password}
          /> 
          {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
        </div>
        
        <div className='mb-6'>
          <label className='block text-white mb-2'>Confirm Password:</label>
          <input 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='password' 
            name='confirmpassword'
            onChange={handleInputChange}
            placeholder='Re-enter password' 
            value={formData.confirmpassword}
          />
          {errors.confirmpassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmpassword}</p>}
        </div>
        
        <div className='mb-6 flex justify-center'>
          <button 
            className='px-6 py-2 text-white border border-white rounded hover:bg-white hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type='submit' 
            disabled={Object.values(errors).some(error => error) || 
                      Object.values(formData).some(field => !field)}
          >
            Submit
          </button>
          {submitted && <p className='text-green-500 mt-4 text-center'>User data submitted successfully!</p>}
        </div>

        <div className='text-center'>
          <a href='#' className='text-white hover:underline'>Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
