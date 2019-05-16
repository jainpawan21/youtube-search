import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term =>{

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videos: response.data.items });
    console.log(response);
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video });
  }
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}
