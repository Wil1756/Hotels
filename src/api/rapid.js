import axios from 'axios';

export default axios.create({
    baseURL: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    headers: {
        Authorization:"Bearer 3b91e956afmsh4754913b2752e9cp16693djsn054b72c9b12d",
    },
});