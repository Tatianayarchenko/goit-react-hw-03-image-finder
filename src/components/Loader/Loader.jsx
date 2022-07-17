import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loading = () => (
  <Wrap>
    <ThreeDots />
  </Wrap>
);
