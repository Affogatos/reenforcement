import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';

import Thumbnail from './Thumbnail.jsx';
import { addFavorite, removeFavorite } from '../redux/actions/userDataActions.js';
import parseData from '../redux/utils/getAnimalDetailsFromJSON.js';
class PetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let petInfo = parseData(this.props.petInfo);
    let {
      description,
      age,
      name,
      size,
      sex,
      animal,
      id,
      option,
      mix,
      breed,
      phone,
      state,
      email,
      city,
      zip,
      fax,
      address1,
      shelterId,
      shelterPetId,
    } = petInfo;
    let thumbnails = this.props.petInfo.media.photos.photo
      .filter(x => x['@size'] === 'x')
      .map((x, i) => {
        if (i === 0) petInfo.petID = x['$t'];
        return <Thumbnail src={x['$t']} />;
      });
    console.log('petinfavorites: ', this.props);
    return (
      <div>
        <Carousel framePadding={'0px'} dragging={true} initialSlideHeight={300} autoplay={true}>
          {thumbnails}
        </Carousel>
        {this.props.petInFavorites ? (
          <button onClick={() => this.props.removeFavorite(petInfo)}>Remove from favorites</button>
        ) : (
          <button onClick={() => this.props.addFavorite(petInfo)}>Add to favorites</button>
        )}
        {description && <p>{description}</p>}
        <ul>
          {name && <li>{`name: ${name}`}</li>}
          {animal && <li>{`animal: ${animal}`}</li>}
          {breed &&
            breed.length && (
              <li>
                {`breed:`} {breed}
              </li>
            )}
          {mix && <li>{`mix: ${mix}`}</li>}
          {size && <li>{`size: ${size}`}</li>}
          {age && <li>{`age: ${age}`}</li>}
          {sex && <li>{`sex: ${sex}`}</li>}
          {option &&
            option.length && (
              <li>
                {`Additonal info:`} {option}
              </li>
            )}
          <li>
            <div>
              <ul>
                {phone && <li>{`Phone: ${phone}`}</li>}
                {email && <li>{`Email: ${email}`}</li>}
                {fax && <li>{`Fax: ${fax}`}</li>}
                {(address1 || city || state || zip) && (
                  <li>
                    {`Address: ${address1} ${city}, ${state} ${zip}`.replace(/undefined\,/, '')}
                  </li>
                )}
                {shelterId && <li>Shelter ID: {shelterId}</li>}
                {shelterPetId && <li>Animal ID: {shelterPetId}</li>}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ petSearch, userData }, ownProps) => {
  let url = ownProps.match.params.id;
  let petInfo = petSearch.searchResults.filter(x => x.id['$t'] === url)[0];
  let petInFavorites = userData.favorites.some(x => x.id === url);
  return {
    petInfo,
    petInFavorites,
  };
};
export default connect(
  mapStateToProps,
  { addFavorite, removeFavorite }
)(PetDetails);
