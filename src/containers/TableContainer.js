// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Component
function TableContainer({ characters }) {
  return (
    <div
      className={classNames('table')}
    >
      table here<br />
      {characters[0].name}
    </div>
  );
}

TableContainer.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      char_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      portrayed: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      occupation: PropTypes.arrayOf(PropTypes.string.isRequired),
      appearance: PropTypes.arrayOf(PropTypes.number.isRequired),
      better_call_saul_appearance: PropTypes.arrayOf(PropTypes.number.isRequired),
    }).isRequired,
  ).isRequired,
};
TableContainer.defaultProps = {
  
};
export default React.memo(TableContainer);
