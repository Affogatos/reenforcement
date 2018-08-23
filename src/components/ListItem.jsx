import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail.jsx';

export default ({ media, id, name }) => {
  let thumbnail = media.photos.photo
    .slice(3, 4)
    .map(x => <Thumbnail src={x['$t']} id={id['$t']} />);
  return (
    <div>
      <h3>{name['$t']}</h3>
      {thumbnail}
    </div>
  );
};
