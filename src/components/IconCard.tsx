// NPM Modules
import React from 'react';

interface IconCardProps {
  pageName?: string;
  iconType?: string;
}

export default class IconCard extends React.Component<IconCardProps> {
  render() {
    const { pageName = '', iconType = '' } = this.props; // Default values are handled here

    return (
      <div className='card icon-card'>
        <h3>{pageName}</h3>
        <svg>
          <use xlinkHref={`/icon-sprite.svg#icon-${iconType}`}></use>
        </svg>
      </div>
    );
  }
}
