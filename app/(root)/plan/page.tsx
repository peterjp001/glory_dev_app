'use client';
import ListPlans from '@/components/ListPlans';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='py-1'>
      {/* 🌿 Hero Section */}
      <section className='mb-8 max-w-6xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 bg-base-200 rounded-lg border border-base-300 p-4 shadow-sm'>
          {/* 🕊️ Title */}
          <h1 className='text-2xl sm:text-3xl font-semibold text-primary'>Bible Reading Plans</h1>

          {/* ✨ Action Button */}
          <Link
            href='/plan/create'
            className='btn btn-primary btn-sm sm:btn-md font-medium shadow hover:shadow-md transition-all duration-200'
          >
            Create Custom Plan
          </Link>
        </div>
      </section>

      {/* 📖 List Plans */}
      <ListPlans />
    </div>
  );
};

export default Page;
