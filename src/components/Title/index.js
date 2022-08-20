// == Import
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import './styles.scss';

// == Composant
function Title({ title }) {
  return (
    <div className="title">
      <Header as="h1">{title}</Header>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

// == Export
export default React.memo(Title);
