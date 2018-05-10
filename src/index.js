
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from "./components/video_detail";



// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
// const App = function(){
//   return <button>Click Me</button>;
// }
class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      videos:[],
      selectedVideo: null
    };
    // YTSearch({key: API_KEY, term: "surfboards"}, function(data){
    //   this.setState({ videos: data });
    //   console.log(data);
    // });
    this.videoSearch("node.js")
    
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({ 
        videos: data,
        selectedVideo: data[0]
      });
      console.log(data);
    });

  }
  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onSelectedVideo = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} 
        />

      </div>
    );

  }

}

ReactDOM.render(<App />, document.querySelector('.container'));