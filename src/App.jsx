// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/Container.styled';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';
import { Loading } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';
import { Component } from 'react';
import * as API from './api/api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    activeImg: null,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.fetchImages(this.state.searchQuery, this.state.page);
    }
  }

  setActiveImg = imageUrl => {
    this.setState({
      activeImg: imageUrl,
    });
  };

  fetchImages = async (searchQuery, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLoading: false,
      }));
      // if (data.totalHits === 0) {
      //   return toast.error(
      //     'Sorry, there are no images matching your search query. Please try again.'
      //   );
      // }
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  handleSubmit = async searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
    });
    this.fetchImages(searchQuery, 1);
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loading />}
        {this.state.searchQuery && (
          <ImageGallery
            items={this.state.images}
            onClick={this.toggleModal}
            setImageModal={this.setActiveImg}
          />
        )}
        {this.state.error && (
          <p>Something went wrong, please try again or reload the page.</p>
        )}
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}

        {this.state.activeImg && (
          <Modal
            onClose={() => {
              this.setActiveImg(null);
            }}
          >
            <img src={this.state.activeImg} alt="" />
          </Modal>
        )}
        {/* <ToastContainer /> */}
      </Container>
    );
  }
}
