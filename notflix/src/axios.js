import axios from "axios";

//base url to make request to the movie DB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    //https://api.themoviedb.org/3/movie/550?api_key=03fc9282a56154ae274f298640f07ced
});

export default instance;