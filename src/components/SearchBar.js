import { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  // ****
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term); // onSubmit function is in App.js component, and we pass here as a prop  ( <SearchBar onSubmit={this.onSearchSubmit} /> )
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// we want to use controlled components in React, so we set the state

// ****
/* we need to use arrow function here => one of the special features of Arrow functions is that they automatically bind the value of this for all the code inside the function.
- another way (old way) is to bind the value of this==> 
this.onFormSubmit = this.onFormSubmit.bind(this)
- or we can use arrow function directly in the form 
<form onSubmit={(e)=>this.onFormSubmit(e)} className='ui form'>

So the arrow function is going to automatically make sure that the value of this is always equal to our instance of the search bar.
*/
