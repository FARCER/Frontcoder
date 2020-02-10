const URL = 'https://api.github.com/';
const USER_PER_PAGE = 20;

export class Api {

  async loadUsers(value, page) {
    return await fetch(`${URL}search/users?q=${value}&per_page=${USER_PER_PAGE}&page=${page}`).then(res => res)
  }

}