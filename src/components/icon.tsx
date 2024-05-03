// NPM Modules
import React from 'react';

interface CompProps {
  type: string;
}

export default class Icon extends React.Component<CompProps> {
  render() {
    return (
      <div className='card icon-card'>
        <h3>Slug:</h3>
        <p>{this.props.type}</p>
        <svg>
          <use xlinkHref={`/icon-sprite.svg#icon-${this.props.type}`}></use>
        </svg>
      </div>
    );
  }
}
