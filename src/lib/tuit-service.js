import axios from 'axios';

class TuitService {
  constructor() {
    this.tuit = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL
    })
  }

  createTuit(body) {
    return this.api.post('/profile/admin', body)
      .then(({data}) => data)
  }

}

const tuitService = new TuitService();

export default tuitService;
