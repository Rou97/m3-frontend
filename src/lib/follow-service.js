import axios from 'axios';

class FollowService {
  constructor() {
    this.tuit = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  follow() {
    console.log('entra en follow');
    return this.tuit.get('/follow')
      .then(({data}) => data)
  }

}

const followService = new FollowService();

export default followService;
