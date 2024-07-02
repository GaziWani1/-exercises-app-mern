import React from 'react';
import { exercises } from '../constants';
import Card from './Card';

const Home = () => {
  return (
    <section className='px-10 md:px-20 '>
      <h1 className=' my-5 text-3xl font-semibold text-blue-400'>
        Patient Name : Bhavitha
      </h1>
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center'>
        {exercises.map((e) => (
          <React.Fragment key={e.id}>
            <Card name={e.name} imageUrl={e.imageUrl} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Home;
