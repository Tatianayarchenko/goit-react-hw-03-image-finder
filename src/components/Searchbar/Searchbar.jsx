import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  SearchFormButton,
  HeaderSearchbar,
  SearchForm,
  Input,
  SearchSvg,
} from './Searchbar.styled';

const initialValues = {
  searchQuery: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter a request.');
    }
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <HeaderSearchbar className="searchbar">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm className="form">
          <SearchFormButton type="submit" className="button">
            <SearchSvg />
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            name="searchQuery"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </HeaderSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
