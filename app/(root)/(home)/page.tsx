import { ReadingPanel } from '@/components/devotion/ReadingPanel';
import DevotionForm from '@/components/devotion/DevotionForm';
import { getTodayTabs } from '@/lib/dbRequest';
import ModalDevotion from '@/components/devotion/ModalDevotion';

const Page = async () => {
  const tabs = await getTodayTabs('fr');

  return (
    <main className='max-w-6xl mx-auto '>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-1 lg:gap-12 lg:items-start'>
        <ReadingPanel tabs={tabs} />

        <ModalDevotion />
        <aside className='hidden lg:block sticky top-10 self-start'>
          <div className='bg-base-100/50 border border-base-content/10 rounded-2xl p-6 shadow-sm'>
            <DevotionForm />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Page;
