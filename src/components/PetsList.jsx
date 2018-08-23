import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem.jsx';

const PetsList = ({ pets }) => {
  const list = pets.map(pet => <ListItem key={pet.id} {...pet} />);
  return <div>{list}</div>;
};
const mapStateToProps = ({ petSearch }, ownProps) => ({
  pets: petSearch.searchResults,
});
export default connect(mapStateToProps)(PetsList);
