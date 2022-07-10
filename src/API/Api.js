import axios from 'axios';

// import { Component } from 'react';

const API_KEY = '27599819-5f2242c0de29668fb10ee249b';
const BASE_URL = 'pixabay.com/api';

// export class ImageInfo extends Component {
//   componentDidMount(prevProps, prevState) {
//     if (prevProps.ImageInfo !== this.props.ImageInfo) {
//       console.log('prevProps.ImageInfo:', prevProps.ImageInfo);
//       console.log('this.props.ImageInfo:', this.props.ImageInfo);
//       console.log('изменилась картинка');
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>ImageTitle</h1>
//       </div>
//     );
//   }
// }

axios.defaults.baseURL = `https://${BASE_URL}/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = async values => {
  const response = await axios(
    `https://${BASE_URL}/?key=${API_KEY}&q=${values.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
  );
  console.log(response);
  return response.data;
};

//

// export class PixabayService extends Component {
//   //   constructor() {
//   //     this.searchQuery = '';
//   //     this.page = 1;
//   //   }

//   state = {
//     searchQuery: '',
//     page: 1,
//   };

//   async fetchImages() {
//     const response = await axios(
//       `https://${BASE_URL}/?key=${API_KEY}&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.page}`
//     );

//     this.incrementPage();
//     return response.data;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
