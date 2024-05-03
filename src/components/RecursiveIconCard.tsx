import React from 'react';
import { Card } from '@/utils/card.interface'; // Ensure this import is correct

interface RecursiveIconCardProps {
  card: Card;
}

export default class RecursiveIconCard extends React.Component<RecursiveIconCardProps> {
  render() {
    const { card } = this.props;

    return (
      <div className='card-container'>
        <div className='card icon-card'>
          <h3>{card.title}</h3>
          <svg>
            <use xlinkHref={`/icon-sprite.svg#icon-${card.icon}`}></use>
          </svg>
        </div>
        {/* Check and render children recursively */}
        {card.children && (
          <div className='children'>
            {card.children.map((child, index) => (
              <RecursiveIconCard key={index} card={child} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
