import React from 'react';

interface BiblePlan {
  id: number;
  title: string;
  description: string;
  duration: string;
  order: 'default' | 'odd';
}

const biblePlans: BiblePlan[] = [
  {
    id: 1,
    title: 'À travers la Bible en un an',
    description:
      'Lisez toute la Bible en un an avec des passages quotidiens des Testaments Ancien et Nouveau.',
    duration: '365 jours',
    order: 'default',
  },
  {
    id: 2,
    title: 'Les Évangiles en 90 jours',
    description:
      'Suivez la vie et les enseignements de Jésus-Christ à travers les quatre Évangiles Matthieu, Marc, Luc et Jean.',
    duration: '90 jours',
    order: 'odd',
  },
  {
    id: 3,
    title: 'Psaumes et Proverbes en 60 jours',
    description:
      'Plongez dans la sagesse et la louange de la Bible avec les Psaumes et les Proverbes en seulement 2 mois.',
    duration: '60 jours',
    order: 'odd',
  },
  {
    id: 4,
    title: 'Nouveau Testament en 90 jours',
    description:
      'Lisez tout le Nouveau Testament en seulement 3 mois un voyage concentré à travers le message transformateur de Christ.',
    duration: '90 jours',
    order: 'odd',
  },
];

const PlanCard = ({ plan }: { plan: BiblePlan }) => {
  const isFeatured = plan.order === 'default';

  return (
    <div
      className={`group relative flex flex-col rounded-2xl p-6 transition-all duration-300 cursor-pointer h-full
        ${
          isFeatured
            ? 'bg-primary text-primary-content shadow-xl shadow-primary/30 scale-[1.02]'
            : 'bg-base-200 hover:bg-base-300 hover:shadow-lg hover:-translate-y-1'
        }`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <span className='absolute -top-3 left-6 bg-base-100 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-widest uppercase'>
          ✦ Disponible
        </span>
      )}

      {/* Duration pill */}
      <span
        className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4
          ${isFeatured ? 'bg-primary-content/20 text-primary-content' : 'bg-primary/10 text-primary'}`}
      >
        {plan.duration}
      </span>

      {/* Title */}
      <h2
        className={`text-lg font-bold leading-snug mb-3 ${isFeatured ? 'text-primary-content' : 'text-base-content'}`}
      >
        {plan.title}
      </h2>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed flex-1 mb-6 ${isFeatured ? 'text-primary-content/80' : 'text-base-content/60'}`}
      >
        {plan.description}
      </p>

      {/* CTA */}
      {plan.order === 'default' && (
        <button
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
          ${
            isFeatured
              ? 'bg-primary-content text-primary hover:opacity-90'
              : 'border border-primary/30 text-primary hover:bg-primary hover:text-primary-content'
          }`}
        >
          Commencer →
        </button>
      )}
    </div>
  );
};

const ListPlans = () => {
  return (
    <div className='py-2 px-4'>
      {/* Header */}
      <div className='text-center mb-12'>
        <p className='text-primary text-sm font-semibold tracking-widest uppercase mb-2'>
          Nos Plans
        </p>
        <h1 className='text-3xl font-bold text-base-content'>Choisissez votre parcours</h1>
        <p className='text-base-content/50 mt-2 text-sm max-w-md mx-auto'>
          Des plans adaptés à chaque rythme, pour grandir dans la Parole chaque jour.
        </p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start'>
        {biblePlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default ListPlans;
