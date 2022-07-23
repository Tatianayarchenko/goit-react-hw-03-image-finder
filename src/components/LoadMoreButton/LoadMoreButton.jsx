import PropTypes from 'prop-types';
import { LoadMore } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick, children }) => (
  <LoadMore type="button" onClick={onClick}>
    {children}
  </LoadMore>
);

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
