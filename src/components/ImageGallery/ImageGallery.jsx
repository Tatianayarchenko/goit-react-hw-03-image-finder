import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ items, setImageModal, onClick }) => (
  <ImageGalleryList>
    {items.map(item => (
      <ImageGalleryItem
        key={item.id}
        src={item}
        onClick={() => {
          setImageModal(item.largeImageURL);
          onClick();
        }}
      />
    ))}
  </ImageGalleryList>
);

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  setImageModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
