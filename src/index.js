
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from "./components/video_detail";
const API_KEY;

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
    const videoSearch = _.debounce((term)=>{ this.videoSearch(term) },3000);
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