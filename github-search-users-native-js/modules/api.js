const URL = 'https://api.github.com';
const USERS_PER_PAGE = 20;

export class Api {
  constructor() {
  }


  async searchUsers(inpValue, page) {
    return await fetch(`${URL}/search/users?q=${inpValue}&per_page=${USERS_PER_PAGE}&page=${page}`).then((res) => res.json())
  }

  searchUserData(user) {
    const urls = [
      `${URL}/users/${user}/followers`,
      `${URL}/users/${user}/following`,
      `${URL}/users/${user}/repos`
    ];

    const requests = urls.map(url => fetch(url));
    return Promise.all(requests)
      .then(responses => Promise.all(responses.map(resp => resp.json())));
  }

}
