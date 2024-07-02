import React from 'react';

const Card = ({ name, imageUrl }) => {
  return (
    <div className='relative h-[300px] max-w-[300px]  rounded-lg flex items-center justify-center'>
      <img
        className='h-[300px] w-[300px] -z-2 rounded-lg absolute border-sky-500 border-[3px]'
        src={imageUrl}
        alt={name}
      />
      <h1 className=' mx-4 place-self-start left-1 absolute top-3 text-white text-4xl font-semibold'>
        {name}
      </h1>
      <button className='  absolute bottom-2  border-blue-400 border-2 rounded-lg font-semibold px-6 md:px-10 py-3 text-white text-xl'>
        Start Assessment
      </button>
    </div>
  );
};

export default Card;
