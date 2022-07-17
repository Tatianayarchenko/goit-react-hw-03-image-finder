import { Container } from 'components/Container.styled';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';
import { Loading } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';
import { Component } from 'react';
import * as API from './api/Api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    activeImg: '',
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      if (
        prevState.searchQuery !== this.state.searchQuery ||
        prevState.page !== this.state.page
      ) {
        this.setState({ isLoading: true });
        const data = await API.getImages(
          this.state.searchQuery,
          this.state.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
        }));
      }
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setActiveImg = imageUrl => {
    this.setState({
      activeImg: imageUrl,
    });
  };

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
    });
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

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.activeImg} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}
