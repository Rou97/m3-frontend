import axios from 'axios';

class TuitService {
  constructor() {
    this.tuit = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  getAllByUser(username) {
    return this.tuit.get(`/profile/${username}`)
      .then(({data}) => data)
  }

  createTuit(body) {
    return this.tuit.post('/profile/:username', body)
      .then(({data}) => data)
  }

  deleteTuit(id) {
    console.log('iidd', id)
    return this.tuit.delete(`/profile/:username/${id}`)
      .then(({data}) => data)
  }

  // getTuitsByUser(username) {
  //   return this.tuit.get(`/profile/${username}/line`)
  //     .then(({data}) => data)
  // }

  getTuitsByFollowers(username) {
    return this.tuit.get(`profile/line/${username}`)
      .then(({data}) => data)
  }

}

const tuitService = new TuitService();

export default tuitService;
