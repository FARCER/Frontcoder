export class View {
  constructor(api) {
    this.api = api;
    this.app = document.getElementById('app');

    this.title = this.createElement('h1', 'title');
    this.title.textContent = 'Github Search users';


    this.searchBlock = this.createElement('div', 'search');
    this.searchForm = this.createElement('form', 'form');
    this.searchInput = this.createElement('input', 'input');
    this.searchInput.placeholder = 'Write user name...';
    this.counter = this.createElement('span', 'counter');
    this.searchForm.append(this.searchInput);
    this.searchBlock.append(this.searchForm);
    this.searchBlock.append(this.counter);

    this.main = this.createElement('div', 'main');

    this.users = this.createElement('div', 'users');
    this.usersList = this.createElement('ul', 'users-list');
    this.userLoadMoreBtn = this.createElement('button', 'button');
    this.userLoadMoreBtn.textContent = 'Load More';
    this.userLoadMoreBtn.style.display = 'none';
    this.users.append(this.usersList);
    this.users.append(this.userLoadMoreBtn);

    this.userInfo = this.createElement('div', 'user-info');

    this.main.append(this.users);
    this.main.append(this.userInfo);

    this.app.append(this.title);
    this.app.append(this.searchBlock);
    this.app.append(this.main);

  }

  createElement(elTag, elClass) {
    const element = document.createElement(elTag);
    if (elClass) element.classList.add(elClass);
    return element;
  }

  createPrevUser(userData) {
    const userPrev = this.createElement('li', 'user-small');
    userPrev.addEventListener('click', () => this.showUserData(userData));

    userPrev.innerHTML = `<img src="${userData.avatar_url}" alt="${userData.login}">
                          <span>${userData.login}</span>`;

    this.usersList.append(userPrev);

  }

  showUserData(userData) {
    const user = this.createElement('div', 'user');

    this.userInfo.innerHTML = '';
    this.api.searchUserData(userData.login)
      .then(data => {
        const [followers, following, repos] = data;
        const followersList = this.createUserDataBlock(followers, 'Followers');
        const followingList = this.createUserDataBlock(following, 'Following');
        const reposList = this.createUserDataBlock(repos, 'Repos');

        user.innerHTML = `<img src="${userData.avatar_url}" alt="${userData.login}">
                      <h2>${userData.login}</h2>
${followersList}
${followingList}
${reposList}`;

        console.log(data);
      });

    this.userInfo.append(user);
  }

  createUserDataBlock(list, title) {
    const block = this.createElement('div', 'block');
    const blockTitle = this.createElement('h2', 'title');
    const blockList = this.createElement('ul', 'block-list');

    blockTitle.textContent = title;

    list.forEach(item => {
      blockList.innerHTML += `<li class="block-list-item">
<a href="${item.html_url}" target="_blank">${item.login ? item.login : item.name}</a>
</li>`
    });

    block.append(blockTitle);
    block.append(blockList);

    return block.innerHTML;
  }

  toggleViewUserLoadMoreBtn(isShow) {
    this.userLoadMoreBtn.style.display = isShow ? 'inline-block' : 'none';
  }

  showCountMessage(message) {
    this.counter.textContent = message;
  }

  clearList() {
    this.usersList.innerHTML = '';
    this.counter.textContent = '';
    this.toggleViewUserLoadMoreBtn(false);
  }


}
