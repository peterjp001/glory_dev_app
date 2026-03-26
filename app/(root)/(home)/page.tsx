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
            <p className='text-3xl font-bold text-primary mb-4'>24hBible</p>

            <h1 className='text-5xl font-extrabold text-base-content mb-4 tracking-tight'>
              The Word, <span className='text-primary'>Every Day, Every Hour.</span>
            </h1>

            <p className='text-xl text-base-content/80 max-w-2xl mx-auto mb-8'>
              24hBible helps you stay locked in with God’s Word. Read the Bible on your schedule,
              build your own reading plans, and capture devotional notes that grow with your
              journey.
            </p>

            <Link href='/plan' className='btn btn-primary btn-lg shadow-xl hover:shadow-2xl'>
              Start Reading Now
            </Link>
          </div>
        </div>
      </section>

      {/* ✨ Features Section */}
      <section className='py-20 '>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-base-content mb-14'>
            Features That Keep You Connected
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <FeatureCard
              icon='⏰'
              title='Read on Your Schedule'
              description='Stay consistent with Scripture by reading at your own pace — anytime, anywhere.'
            />
            <FeatureCard
              icon='📖'
              title='One Year Bible Plans'
              description='Follow structured one-year reading plans to cover the entire Bible in a year.'
            />
            <FeatureCard
              icon='🗓️'
              title='Personal Bible Plans'
              description='Create and follow your own Bible reading plans that fit your daily routine and goals.'
            />
            <FeatureCard
              icon='📝'
              title='Devotional Notes'
              description='Write, organize, and reflect on your personal devotional notes as you study the Word.'
            />
          </div>
        </div>
      </section>

      {/* 🚀 Call-to-Action Section */}
      <section className='bg-primary text-primary-content py-20 px-6 sm:px-8 lg:px-12 text-center my-12 rounded-2xl mx-auto max-w-6xl shadow-2xl'>
        <h2 className='text-4xl font-extrabold mb-4'>Ready to Grow in Faith Daily?</h2>
        <p className='text-xl max-w-2xl mx-auto mb-8 opacity-90'>
          Access Scripture anytime, explore daily devotionals, and reflect on God’s Word — all
          designed to help you stay spiritually nourished every day.
        </p>
        <button className='btn btn-lg btn-secondary text-secondary-content shadow-xl hover:shadow-3xl'>
          Get Started now
        </button>
      </section>
    </>
  );
};

export default HomePage;
