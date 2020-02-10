export class Search {

  setCurrentPage(pageNumber) {
    this.currentPage = pageNumber;
  }

  setUsersCount(count) {
    this.usersCount = count;
  }

  constructor(view, api, log) {
    this.view = view;
    this.api = api;
    this.log = log;

    this.view.searchInput.addEventListener('keyup', this.debounce(this.loadUsers.bind(this), 500));
    this.view.loadMoreBtn.addEventListener('click', this.loadMoreUsers.bind(this));
    this.currentPage = 1;
    this.usersCount = 0;

  }

  loadUsers() {
    this.setCurrentPage(1);
    this.view.setCounterMessage('');
    if (this.view.searchInput.value) {
      this.clearUsers();
      this.usersRequest(this.view.searchInput.value);
    } else {
      this.clearUsers();
      this.view.toggleLoadMoreBtn(false);
    }
  }

  loadMoreUsers() {
    this.setCurrentPage(this.currentPage + 1);
    this.usersRequest(this.view.searchInput.value);
  }

  async usersRequest(searchValue) {
    let totalCount;
    let users;
    let message;
    try {
      await this.api.loadUsers(searchValue, this.currentPage).then((res) => {
        res.json().then(res => {
          users = res.items;
          totalCount = res.total_count;
          message = this.log.counterMessage(totalCount);
          this.setUsersCount(this.usersCount + res.items.length);
          this.view.setCounterMessage(message);
          this.view.toggleLoadMoreBtn(totalCount > 20 && this.usersCount !== totalCount);
          users.forEach(user => this.view.createUser(user))
        })
      })
    } catch (e) {
      console.log('Error: ' + e);
    }

  }

  clearUsers() {
    this.view.usersList.innerHTML = '';
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

}