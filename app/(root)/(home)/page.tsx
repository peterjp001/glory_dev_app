import { ReadingPanel } from '@/components/devotion/ReadingPanel';
import DevotionForm from '@/components/devotion/DevotionForm';
import ModalDevotion from '@/components/devotion/ModalDevotion';

const page = () => {
  return (
    <div>
      {/* Header */}
      <div className='flex flex-row justify-between gap-1 mb-1'>
        <div className='animate-fade-in-scale'>
          <span className='font-mono text-xs font-medium tracking-widest uppercase text-base-content/40'>
            Vendredi 3 avril 2026
          </span>
          <h1 className='font-serif text-2xl font-medium leading-tight text-base-content'>
            Lecture du jour
          </h1>
        </div>

        {/* Mobile only */}
        <div className='flex items-center lg:hidden'>
          <ModalDevotion />
        </div>
      </div>

      {/* Desktop: two-column grid */}
      <div className='mt-3 lg:grid lg:grid-cols-[3fr_2fr] lg:gap-8 lg:items-start'>
        <ReadingPanel />

        {/* Desktop only */}
        <div className='sticky top-6 bg-base-100  border border-base-content/20 rounded-md p-5  shadow-md hidden lg:block'>
          <DevotionForm />
        </div>
      </div>
    </div>
  );
};

export default page;
