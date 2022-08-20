// == Import
import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Component
function TableContainer({ characters }) {
  return (
    <div
      className={classNames('table')}
    >
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Character
            </Table.HeaderCell>
            <Table.HeaderCell>
              Occupation
            </Table.HeaderCell>
            <Table.HeaderCell>
              Status
            </Table.HeaderCell>
            <Table.HeaderCell>
              Category
            </Table.HeaderCell>
            <Table.HeaderCell>
              Portrayed by
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {characters.map((character) => (
            <Table.Row key={character.id}>
              <Table.Cell>
                <Header as="H4" image>
                  <Image src={character.img} rounded size="mini" />
                </Header>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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

export default React.memo(TableContainer);
