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
            <p className='text-sm font-semibold text-base-content/50 tracking-widest uppercase mb-2'>
              24hBible — Glory Devotional App
            </p>

            <h1 className='text-5xl font-extrabold text-base-content mb-4 tracking-tight'>
              La Parole, <span className='text-primary'>Chaque Jour. Chaque Heure.</span>
            </h1>

            <p className='text-xl text-base-content/80 max-w-2xl mx-auto mb-8'>
              Bienvenue dans l&apos;espace dévotionnel du
              <span className='font-semibold text-primary ml-0.5'>Tabernacle de Gloire</span>. Suivez votre
              plan de lecture annuel, soumettez vos dévotions et progressez spirituellement
              ensemble, au sein de votre communauté de foi.
            </p>

            <Link href='/plan' className='btn btn-primary btn-lg shadow-xl hover:shadow-2xl'>
              Commencer la lecture
            </Link>
          </div>
        </div>
      </section>

      {/* ✨ Features Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-base-content mb-14'>
            Tout ce qu&apos;il vous faut pour grandir dans la Parole
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <FeatureCard
              icon='📅'
              title='Plan de lecture annuel'
              description='Suivez un plan de lecture structuré sur un an — chaque jour, la portion de Scripture prévue vous attend.'
            />
            <FeatureCard
              icon='📖'
              title='Lecture guidée au quotidien'
              description='Accédez chaque jour à vos passages du jour, lisez à votre rythme et marquez vos lectures comme complètes.'
            />
            <FeatureCard
              icon='✍️'
              title='Dévotions personnelles'
              description='Rédigez et soumettez vos notes dévotionnelles après chaque lecture pour ancrer la Parole dans votre vie.'
            />
            <FeatureCard
              icon='📊'
              title='Suivi de progression'
              description="Visualisez votre avancement, maintenez votre série de lectures et restez motivé tout au long de l'année."
            />
            <FeatureCard
              icon='🌍'
              title='Multilingue'
              description="L'application est conçue pour servir la communauté TG en français, anglais, créole haïtien et espagnol."
            />
            <FeatureCard
              icon='🏛️'
              title='Communauté TG'
              description='Conçu pour les membres et leaders de Tabernacle de Gloire — ensemble dans la Parole.'
            />
          </div>
        </div>
      </section>

      {/* 🚀 Call-to-Action Section */}
      <section className='bg-primary text-primary-content py-20 px-6 sm:px-8 lg:px-12 text-center my-12 rounded-2xl mx-auto max-w-6xl shadow-2xl'>
        <h2 className='text-4xl font-extrabold mb-4'>
          Prêt à vous engager dans la Parole chaque jour ?
        </h2>
        <p className='text-xl max-w-2xl mx-auto mb-8 opacity-90'>
          Rejoignez la communauté de Tabernacle de Gloire dans ce parcours spirituel collectif.
          Lisez, méditez, progressez — un jour à la fois.
        </p>
        <Link
          href='/plan'
          className='btn btn-lg btn-secondary text-secondary-content shadow-xl hover:shadow-3xl'
        >
          Commencer maintenant
        </Link>
      </section>
    </>
  );
};

export default HomePage;
