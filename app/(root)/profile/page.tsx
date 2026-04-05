import { BookOpen, CalendarDays, CheckCircle2, Edit3, Flame, Mail, MapPin } from 'lucide-react';

const stats = [
  { label: 'Jours consécutifs', value: '14', icon: Flame },
  { label: 'Lectures complétées', value: '87', icon: BookOpen },
  { label: 'Dévotions soumises', value: '32', icon: CheckCircle2 },
  { label: 'Membre depuis', value: '2024', icon: CalendarDays },
];

const recentReadings = [
  { ref: 'Genèse 1–3', date: "Aujourd'hui", done: true },
  { ref: 'Psaume 23', date: 'Hier', done: true },
  { ref: 'Jean 1–3', date: 'Il y a 2 jours', done: true },
  { ref: 'Romains 8', date: 'Il y a 3 jours', done: true },
  { ref: 'Matthieu 5–7', date: 'Il y a 4 jours', done: false },
];

const Page = () => (
  <div className='max-w-3xl mx-auto px-4 py-8 space-y-6'>
    {/* Hero card */}
    <div className='rounded-3xl overflow-hidden border border-base-content/8 shadow-sm bg-base-100'>
      {/* Banner */}
      <div className='h-28 bg-linear-to-br from-primary/20 via-primary/10 to-base-200 relative'>
        <button className='absolute top-3 right-3 btn btn-ghost btn-xs btn-circle bg-base-100/60 backdrop-blur-sm'>
          <Edit3 className='w-3.5 h-3.5' />
        </button>
      </div>

      {/* Avatar + identity */}
      <div className='px-6 pb-6'>
        <div className='-mt-10 mb-4 flex items-end justify-between'>
          <div className='w-20 h-20 rounded-2xl bg-primary/10 border-4 border-base-100 flex items-center justify-center shadow-sm'>
            <span className='font-serif text-3xl font-bold text-primary'>P</span>
          </div>
          <button className='btn btn-sm btn-outline rounded-xl gap-2 mb-1'>
            <Edit3 className='w-3.5 h-3.5' />
            Modifier
          </button>
        </div>

        <h1 className='font-serif text-2xl font-semibold text-base-content'>Peter Jean-Pierre</h1>

        <div className='mt-1.5 flex flex-wrap gap-x-4 gap-y-1'>
          <span className='flex items-center gap-1.5 text-xs text-base-content/40'>
            <Mail className='w-3.5 h-3.5' />
            peter@email.com
          </span>
          <span className='flex items-center gap-1.5 text-xs text-base-content/40'>
            <MapPin className='w-3.5 h-3.5' />
            Harrisburg, PA
          </span>
        </div>

        <p className='mt-3 text-sm text-base-content/60 leading-relaxed max-w-md'>
          Disciple de Christ. Passionné par la Parole et la présence de Dieu au quotidien.
        </p>
      </div>
    </div>

    {/* Stats row */}
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className='bg-base-100 border border-base-content/8 rounded-2xl p-4 flex flex-col gap-2 shadow-sm'
        >
          <Icon className='w-4 h-4 text-primary/60' />
          <p className='font-serif text-2xl font-bold text-base-content'>{value}</p>
          <p className='text-[11px] text-base-content/40 leading-tight'>{label}</p>
        </div>
      ))}
    </div>

    {/* Recent readings */}
    <div className='bg-base-100 border border-base-content/8 rounded-3xl p-6 shadow-sm'>
      <h2 className='font-serif text-base font-semibold text-base-content mb-4'>
        Lectures récentes
      </h2>
      <ul className='space-y-1'>
        {recentReadings.map(({ ref, date, done }) => (
          <li
            key={ref}
            className='flex items-center justify-between py-2.5 border-b border-base-content/5 last:border-0'
          >
            <div className='flex items-center gap-3'>
              <div
                className={`w-1.5 h-1.5 rounded-full ${done ? 'bg-primary' : 'bg-base-content/20'}`}
              />
              <span className='text-sm text-base-content/80 font-medium'>{ref}</span>
            </div>
            <span className='text-[11px] text-base-content/35'>{date}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Plan progress */}
    <div className='bg-base-100 border border-base-content/8 rounded-3xl p-6 shadow-sm space-y-3'>
      <div className='flex items-center justify-between'>
        <h2 className='font-serif text-base font-semibold text-base-content'>Plan annuel</h2>
        <span className='text-xs text-base-content/40 font-mono'>87 / 365</span>
      </div>
      <div className='h-1.5 w-full bg-base-200 rounded-full overflow-hidden'>
        <div
          className='h-full bg-primary rounded-full transition-all duration-500'
          style={{ width: `${(87 / 365) * 100}%` }}
        />
      </div>
      <p className='text-xs text-base-content/40'>24% complété · environ 278 jours restants</p>
    </div>
  </div>
);

export default Page;
