import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail.jsx';
import { removeFavorite } from '../redux/actions/userDataActions.js';

const FavoritesPage = ({ favorites, removeFavorite }) => {
  let thumbnails = favorites.map(fav => {
    return (
      <div>
        <button
          onClick={() => {
            console.log(removeFavorite);
            removeFavorite(fav);
          }}
        >
          X
        </button>
        <Thumbnail src={fav.petID} id={fav.id} />
      </div>
    );
  });
  return (
    <div>{thumbnails.length ? <div>{thumbnails}</div> : <h3>No animals favorited yet</h3>}</div>
  );
};

const mapStateToProps = ({ userData: { favorites } }) => ({ favorites });

export default connect(
  mapStateToProps,
  { removeFavorite }
)(FavoritesPage);
