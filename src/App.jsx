import { Container } from 'App.styled';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';
import { Loading } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';
import { Component } from 'react';
import * as API from './API/Api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    activeImg: '',
  };

  async componentDidUpdate(prevProps, prevState) {
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
        console.log(data.hits);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
        }));
      }
    } catch (error) {
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
