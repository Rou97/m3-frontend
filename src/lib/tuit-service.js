import axios from 'axios';

class TuitService {
  constructor() {
    this.tuit = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  getAll() {
    return this.tuit.get('/profile/:username')
      .then(({data}) => data)
  }

  createTuit(body) {
    return this.tuit.post('/profile/:username', body)
      .then(({data}) => data)
  }

}

const tuitService = new TuitService();

export default tuitService;