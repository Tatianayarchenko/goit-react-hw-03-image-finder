import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ImSearch } from 'react-icons/im';
import styled from 'styled-components';
import { SearchFormButton, HeaderSearchbar } from './Searchbar.styled';

let schema = yup.object().shape({
  searchQuery: yup.string().required(),
});

const initialValues = {
  searchQuery: '',
};

const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const SearchSvg = styled(ImSearch)`
  width: 20px;
  height: 20px;
`;

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    onSubmit(values).then(() => setSubmitting(false));
    resetForm();
  };

  return (
    <HeaderSearchbar className="searchbar">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <SearchForm className="form">
            <SearchFormButton
              type="submit"
              className="button"
              disabled={isSubmitting}
            >
              <SearchSvg />
              {/* <SearchFormButtonLabel className="button-label">
              Search
            </SearchFormButtonLabel> */}
            </SearchFormButton>

            <Input
              type="text"
              autoComplete="off"
              name="searchQuery"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage name="searchQuery" />
          </SearchForm>
        )}
      </Formik>
    </HeaderSearchbar>
  );
};
