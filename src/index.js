import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'Lodash'
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

        this.state = { videos: [],
             selectedVideo : null
         };

         this.videoSearch('Surfboards');






    }

    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term: term}, videos => {
            // Note in ES6, {videos: videos} is same as {videos}
            this.setState({
                videos: videos,
                selectedVideo : videos[0]
            });
        });
    }

    // Passing data like this is called props
    // Every time we change videos, videolist gets the new one too
    render() {
        const videoSearch = _.debounce((term)=> {this,videoSearch(term)}, 300)

        return (
          <div>
            <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
                videos = {this.state.videos}
            />
          </div>
        );
    }



}

// Take this components generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
