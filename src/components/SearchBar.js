import React, { Component }  from 'react';


// const SearchBar = () => {
//   return <input />;
// }
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ""};
  }
  render(){
    return (
      <div>
        <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })}/>
        <p>Value of the input: {this.state.term}</p>
      </div>
    )

  }
  // onInputChange(event){ //event can be name to banaba
  //   console.log(event);
  // }
}
export default SearchBar