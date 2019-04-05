import axios from 'axios';

class FollowService {
  constructor() {
    this.tuit = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  follow(userFoundId) {
    return this.tuit.post(`/profile/${userFoundId}/follow`)
      .then(({data}) => data)
  }

  getFollows() {
    return this.tuit.get(`/profile/followers`)
      .then(({data}) => data)
  }

  // isfollowing(userFoundId) {
  //   return this.tuit.get(`/profile/${userFoundId}/isFollowing`)
  //     .then(({data}) => data)
  // }

}

const followService = new FollowService();

export default followService;
