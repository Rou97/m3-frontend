import axios from 'axios';

class SearchService {
  constructor() {
    this.tuit = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  getPage(user) {
    console.log('service', user);
    return this.tuit.get(`/search?user=${user}`)
      .then(({data}) => data)
  }

}

const searchService = new SearchService();

export default searchService;