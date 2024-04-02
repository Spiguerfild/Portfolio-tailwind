import React from 'react';

import './styles.css';

export const Experiences = () => {
  return (
    <div className="px-16 mt-44 mb-20">


      <div className='flex flex-row justify-between mb-20'>
        <p className={`text-4xl font-bold text-accent font-inter leading-snug`}>7+ Anos de experiência <br /> trabalhando</p>

        <div className='flex flex-col'>
          <p className="text-2xl font-bold text-primary font-inter leading-10"> ——— Serviços</p>
          <p className="text-neutral w-10/12">
            Descubra os melhores serviços que eu ofereço aqui para você
          </p>
        </div>
      </div>

      <div className='flex flex-row gap-4 h-auto'
      // style={{ height: '340px' }}
      >

        <div className="card  rounded-none border-b-8 border-primary w-1/3 bg-neutral flex flex-col items-start">
          {/* icons */}
          {/* t1 */}
          {/* sub-t2 */}
        </div>

        <div className="card  rounded-none border-b-8 border-primary w-1/3 bg-neutral  flex flex-col items-start">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card rounded-none border-b-8 border-primary w-1/3 bg-neutral flex flex-col items-start">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}