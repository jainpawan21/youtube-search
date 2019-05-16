import axios from 'axios';

const KEY = 'AIzaSyDJ4LBmMXU4AEcHDkg_g6SaD53GMwBI-h0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
