import { Backdrop, ModalContent } from 'components/Modal/Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root ');

export class Modal extends Component {
  componentDidMount() {
    console.log('вызвали componentDidMoun');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('вызвали componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      console.log('нажали ESC, модалка должна закрыться');

      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('кликнули в Backdrop');
    // console.log('currentTarget:', e.currentTarget);
    // console.log('target:', e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src="" alt="" />
          <h1>Modal Window</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            ex atque facilis alias assumenda at nemo voluptates facere sequi
            molestias quidem voluptate, ipsam nostrum pariatur, sint quasi. Sed
            eveniet illo commodi et quia, quisquam dolorem exercitationem est
            assumenda neque possimus consequuntur natus. Nam vero ipsam magnam
            commodi tempore alias culpa.
          </p>
          {this.props.children}
        </ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
