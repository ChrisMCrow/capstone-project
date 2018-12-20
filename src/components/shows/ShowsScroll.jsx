import React from 'react';
import PropTypes from 'prop-types';
import { discoverGenre } from './../../actions';
import constants from './../../constants';
const { c } = constants;

function ShowsScroll(props) {

  function handlePageTurn(direction) {
    let newPage = props.media.page + direction;
    if (newPage > 0) {
      props.dispatch(discoverGenre(props.media.filterQuery, newPage));
    }
  }

  return (
    <nav className='shows-scroll'>
      {props.media.filterQuery ? (
        <div>
          <img onClick={() => handlePageTurn(-1)} src={c.LEFT_ARROW} alt='left arrow' />
          <img onClick={() => handlePageTurn(1)} src={c.RIGHT_ARROW} alt='right arrow' />
          <p className='text-muted'>{props.media.page}</p>
        </div>
      ) : (
        <div style={{visibility: 'hidden'}}>
          <img src={c.LEFT_ARROW} alt='left arrow' />
          <img src={c.RIGHT_ARROW} alt='right arrow' />
          <p className='text-muted'>1</p>
        </div>
      )}
    </nav>
  );
}

ShowsScroll.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsScroll;