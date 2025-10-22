import React from 'react'
import ContactButtons from './ui/ContactButtons';

const Homepage = () => {
  return (
    <div>
      <h1
        id="homepage"
        className="pt-42 pb-20 flex items-center justify-center font-extrabold text-8xl text-zinc-100"
      >
        Amonrat
        <br />
        Pratoomchai
      </h1>
      <div className="flex items-center justify-center py-12">
        <ContactButtons />
        <p className='text-white'>amonrat9298@gmail.com</p>
      </div>
    </div>
  );
}

export default Homepage