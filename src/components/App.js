import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import { ImageList } from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// calling the api directly (without making the unplash.js file)
// onSearchSubmit = term => {
//   axios.get('https://api.unsplash.com/search/photos', {  /****/
//     params: { query: term },
//     headers: {
//       Authorization: 'Client-ID 2lW_p8Opi2qYREcu_Ld6Fcg76zcpknkOfhKjjwkZyZU',
//     },
//   }).then(response=>{ images: response.data.results });

//
// };

// /****/ https://api.unsplash.com/search/photos?query=cars
