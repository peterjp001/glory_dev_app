import { ReadingPanel } from '@/components/devotion/ReadingPanel';
import DevotionForm from '@/components/devotion/DevotionForm';
import ModalDevotion from '@/components/devotion/ModalDevotion';
import { getTodayTabs } from '@/lib/dbRequest';

const page = async () => {
  const tabs = await getTodayTabs('fr');

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='sticky top-0 z-20 bg-base-100/80 backdrop-blur-md border-b border-base-content/5 mb-6'>
        <div className='flex items-center justify-between py-4'>
          <h1 className='font-serif text-xl font-semibold text-base-content flex items-baseline gap-3'>
            Lecture du jour
            <span className='font-mono text-[12px] font-medium tracking-tighter uppercase text-base-content/60 hidden sm:inline'>
              —&nbsp;
              {new Date().toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </h1>
          <div className='lg:hidden'>
            <ModalDevotion />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8 lg:gap-12 lg:items-start px-0 sm:px-6'>
        <div className='max-w-3xl'>
          <ReadingPanel tabs={tabs} />
        </div>

        <div className='sticky top-24 hidden lg:block'>
          <div className='bg-base-100/50 border border-base-content/10 rounded-2xl p-6 shadow-sm'>
            <DevotionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
