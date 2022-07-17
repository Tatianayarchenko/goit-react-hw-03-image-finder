import PropTypes from 'prop-types';

import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, onClick }) => (
  <GalleryItem>
    <Image src={src.webformatURL} alt={src.tags} onClick={onClick} />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
