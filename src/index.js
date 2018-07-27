import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Constants from './consts';
import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from  './components/video_detail';
const YOUTUBE_API_KEY = 'AIzaSyC_X0wdGv0rECiYL4B5mwKyaYWvvKfe5Po';



// Downwards data flow. Parent component fetches data.
// Index is most parent component.




class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };


        YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, videos => {
            // Note in ES6, {videos: videos} is same as {videos}
            this.setState({ videos });
        });



    }

    // Passing data like this is called props
    // Every time we change videos, videolist gets the new one too
    render() {
        return (
          <div>
            <SearchBar />
            <VideoDetail video = {this.state.videos[0]}/>
            <VideoList videos = {this.state.videos}/>

          </div>
        );
    }



}

// Take this components generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
