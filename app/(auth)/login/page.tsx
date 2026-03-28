import Logo24h from '@/components/global/24hLogo';
import React from 'react';

const pages = () => {
  return (
    <div className='min-h-screen  flex items-center justify-center  p-4'>
      <div className='w-full max-w-md p-8 space-y-6  bg-base-100  bg-linear-to-br from-base-200 to-base-300 z-20 rounded-lg shadow-xl'>
        <div className='flex justify-center mb-6'>
          <Logo24h />
        </div>
        <form className='space-y-4'>
          {/* Email Input */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-base-content mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='you@example.com'
              className='w-full px-4 py-2 border border-base-content/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content'
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-base-content mb-1'>
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              className='w-full px-4 py-2 border border-base-content/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-2 px-4 bg-primary text-primary-content rounded-md font-semibold hover:bg-primary/90 transition-colors'
          >
            Login
          </button>
        </form>
        {/* Footer Links */}
        <div className='text-center text-sm text-base-content/70'>
          <p>
            Don&apos;t have an account?
            <a href='#' className='text-primary font-medium hover:underline'>
              Sign up
            </a>
          </p>
          <p>
            <a href='#' className='text-primary font-medium hover:underline'>
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default pages;
