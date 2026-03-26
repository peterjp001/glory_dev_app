import React from 'react';
interface BiblePlan {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const biblePlans: BiblePlan[] = [
  {
    id: 1,
    title: 'Through the Bible in One Year',
    description:
      'Read the entire Bible in one year with daily passages from the Old and New Testaments.',
    duration: '365 days',
  },
  {
    id: 2,
    title: 'The Life of Jesus',
    description:
      'Follow the life and teachings of Jesus Christ through the four Gospels — Matthew, Mark, Luke, and John.',
    duration: '90 days',
  },
  {
    id: 3,
    title: 'Psalms and Proverbs',
    description: 'Grow in wisdom and worship through a focused reading of Psalms and Proverbs.',
    duration: '60 days',
  },
  {
    id: 4,
    title: 'New Testament in 90 Days',
    description:
      'Read the entire New Testament in just 3 months — a focused journey through the life-changing message of Christ.',
    duration: '90 days',
  },
];
const ListPlans = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
      {biblePlans.map((plan) => (
        <div
          key={plan.id}
          className='card bg-base-200 shadow-sm border-b-4 border-transparent hover:border-primary transition duration-300'
        >
          <div className='card-body'>
            <h2 className='card-title text-primary mb-2'>{plan.title}</h2>
            <p className='text-base-content/80 mb-4'>{plan.description}</p>
            <div className='flex justify-between items-center mt-auto'>
              <span className='text-sm font-semibold text-primary'>{plan.duration}</span>
              <button className='btn btn-sm btn-primary'>Start Plan</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListPlans;
