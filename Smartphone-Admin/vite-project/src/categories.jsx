import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';

const Categories = () => {
  return (
    <main className='main-container'>
      <div className='main-tittle'>
        <h3>CATEGORIES</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Category 1</h3>
            <BsGrid3X3GapFill className='card-icon'/>
          </div>
          <p>Description or details about Category 1.</p>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Category 2</h3>
            <BsGrid3X3GapFill className='card-icon'/>
          </div>
          <p>Description or details about Category 2.</p>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Category 3</h3>
            <BsGrid3X3GapFill className='card-icon'/>
          </div>
          <p>Description or details about Category 3.</p>
        </div>
      </div>
    </main>
  );
};

export default Categories;
