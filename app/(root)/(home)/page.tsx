import { ReadingPanel } from '@/components/devotion/ReadingPanel';
import DevotionForm from '@/components/devotion/DevotionForm';
import { getTodayTabs } from '@/lib/dbRequest';
import ModalDevotion from '@/components/devotion/ModalDevotion';

const Page = async () => {
  const tabs = await getTodayTabs('fr');

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='mb-2'>
        <p className='text-xs font-semibold tracking-widest uppercase text-primary mb-1'>
          {new Date().toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          })}
        </p>
        <h1 className='text-2xl font-bold text-base-content'>Lecture du jour</h1>
      </div>{' '}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-1 lg:gap-12 lg:items-start'>
        <ReadingPanel tabs={tabs} />

        <ModalDevotion />
        <aside className='hidden lg:block sticky top-10 self-start'>
          <div className='bg-base-100/50 border border-base-content/10 rounded-2xl p-6 shadow-sm'>
            <DevotionForm />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Page;
