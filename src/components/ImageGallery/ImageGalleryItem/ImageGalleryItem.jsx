import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, onClick }) => (
  <GalleryItem>
    <Image src={src.webformatURL} alt={src.tags} onClick={onClick} />
  </GalleryItem>
);
