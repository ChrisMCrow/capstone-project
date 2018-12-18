import React from 'react';
import PropTypes from 'prop-types';

function ShowComponent(props) {
  const { name, poster_path } = props.show;
  let img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return(
    <div className='show-container'>
      <style jsx>{`
        .show-container {
          text-align: center;
        }
        .poster {
          width: 80%;
          min-width: 70px;
        }
      `}</style>
      <img className='poster' src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}

ShowComponent.propTypes = {
  show: PropTypes.object
}

export default ShowComponent;