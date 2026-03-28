'use client';
import Link from 'next/link';
import React from 'react';

// ✅ Reusable FeatureCard component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className='card bg-base-200 shadow-xl border-b-4 border-transparent hover:border-primary transition duration-300'>
    <div className='card-body items-center text-center'>
      <div className='text-4xl text-primary mb-2'>{icon}</div>
      <h3 className='card-title text-base-content'>{title}</h3>
      <p className='text-base-content/80'>{description}</p>
    </div>
  </div>
);

// ✅ Main Page Component
const HomePage = () => {
  return (
    <>
      {/* 🌟 Hero Section */}
      <section className='hero bg-base-200 py-16'>
        <div className='hero-content text-center'>
          <div className='max-w-4xl'>
            <h1 className='text-5xl font-extrabold text-base-content mb-4 tracking-tight'>
              The Word, <span className='text-primary'>Every Day, Every Hour.</span>
            </h1>

            <p className='text-xl text-base-content/80 max-w-2xl mx-auto mb-8'>
              24hBible keeps you rooted in God&apos;s Word. Follow your daily reading plan, reflect
              through devotional notes, and grow deeper in your walk with Christ one day at a time.
            </p>

            <Link href='/plan' className='btn btn-primary btn-lg shadow-xl hover:shadow-2xl'>
              Start Reading Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
