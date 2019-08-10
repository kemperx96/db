class Users {
  constructor () {
     this.users = [];
  }

  addUser (rank, guild, username, gender) {
    const user = { rank, guild, username, gender};
    this.users.push(user);
    return user;
  }

  removeUser (username) {
    const user = this.getUser(username);

    if (user) {
      this.users = this.users.filter((user) => user.username != username);
    }
    return user;
  }

  getUser (username) {
    return this.users.filter((user) => user.username === username)[0];
  }

  getUserList (username) {
    const users = this.users.filter((user) => user);
    const namesArray = users.map((user) => user);

    return namesArray;
  }
}

module.exports = { Users };
