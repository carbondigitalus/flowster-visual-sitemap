export function Icon({ type = '' }) {
  return (
    <div className='card icon-card'>
      <h3>Slug:</h3>
      <p>{type}</p>
      <svg>
        <use xlinkHref={`/icon-sprite.svg#icon-${type}`}></use>
      </svg>
    </div>
  );
}
