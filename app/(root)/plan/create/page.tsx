'use client';
import React from 'react';

const Page = () => {
  return (
    <div className='min-h-screen bg-base-100 py-16 px-6 sm:px-10 lg:px-20'>
      {/* ✨ Header Section */}
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h1 className='text-4xl font-bold text-primary mb-3'>Create Your Custom Plan</h1>
        <p className='text-base-content/70 text-lg'>
          Build a personalized Bible reading plan that fits your schedule and spiritual goals.
        </p>
      </div>

      {/* 📖 Form Section */}
      <form className='max-w-3xl mx-auto bg-base-200 rounded-2xl shadow-lg p-8 space-y-6'>
        {/* Plan Title */}
        <div>
          <label className='label'>
            <span className='label-text font-semibold'>Plan Title</span>
          </label>
          <input
            type='text'
            placeholder='e.g. My 30-Day Faith Journey'
            className='input input-bordered w-full'
          />
        </div>

        {/* Description */}
        <div>
          <label className='label'>
            <span className='label-text font-semibold'>Description</span>
          </label>
          <textarea
            placeholder='Write a short description for your plan...'
            className='textarea textarea-bordered w-full min-h-[120px]'
          ></textarea>
        </div>

        {/* Duration */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div>
            <label className='label'>
              <span className='label-text font-semibold'>Duration (Days)</span>
            </label>
            <input
              type='number'
              min={1}
              placeholder='e.g. 30'
              className='input input-bordered w-full'
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text font-semibold'>Start Date</span>
            </label>
            <input type='date' className='input input-bordered w-full' />
          </div>
        </div>

        {/* Reading Sections */}
        <div>
          <label className='label'>
            <span className='label-text font-semibold'>Books / Chapters to Include</span>
          </label>
          <select defaultValue='default' className='select select-bordered w-full'>
            <option value='default' disabled>
              Choose a book or section
            </option>
            <option value='genesis'>Genesis</option>
            <option value='exodus'>Exodus</option>
            <option value='psalms'>Psalms</option>
            <option value='matthew'>Matthew</option>
            <option value='john'>John</option>
          </select>
          <p className='text-sm text-base-content/70 mt-2'>
            You’ll be able to add multiple sections later.
          </p>
        </div>

        {/* Buttons */}
        <div className='flex justify-end gap-4 pt-6'>
          <button type='button' className='btn btn-ghost'>
            Cancel
          </button>
          <button type='submit' className='btn btn-primary'>
            Save Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
