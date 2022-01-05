import React from 'react';
import { CollectionCard } from '../CollectionCard';
import '../../css/Punklist.css';

export const Punklist = ({ punklistData, setSelectedPunk }) => {
  return (
    <div className='punkList'>
      {punklistData.map((punk) => {
        return (
          <div
            key={punk.token_id}
            onClick={() => {
              setSelectedPunk(punk.token_id);
            }}
          >
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        );
      })}
    </div>
  );
};
