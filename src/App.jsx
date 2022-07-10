import { ImageGallery } from 'components/ImageGallery';
import { Loading } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';
import { Component } from 'react';
import * as API from './API/Api';

export class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
    isLoading: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  //   async componentDidUpdate(values) {
  //          try {
  //        this.setState({ isLoading: true });
  //        const image = await API.getImages(values);
  //        console.log(image);
  //        this.setState(state => ({
  //          searchQuery: [...state.searchQuery, image],
  //          isLoading: false,
  //        }));
  //      } catch (error) {
  //        console.log(error);
  //      }
  //    }
  // }
  getImage = async values => {
    try {
      this.setState({ isLoading: true });
      const image = await API.getImages(values);
      console.log(image);
      this.setState(state => ({
        searchQuery: [...state.searchQuery, image],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getImage} />
        {this.state.isLoading && <Loading>Loading...</Loading>}
        {/* <ImageGallery items={this.state.searchQuery} /> */}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
