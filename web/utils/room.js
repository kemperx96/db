class Rooms {
  constructor () {
     this.rooms = [];
  }

  addUser (username) {
    const user = {username};
    this.rooms.push(user);
    return user;
  }

  removeUser (username) {
    const user = this.getUser(username);

    if (user) {
      this.rooms = this.rooms.filter((user) => user.username != username);
    }
    return user;
  }

  getUser (username) {
    return this.rooms.filter((user) => user.username === username)[0];
  }

  getUserList (username) {
    const rooms = this.rooms.filter((user) => user);
    const namesArray = rooms.map((user) => user);

    return namesArray;
  }
}

module.exports = { Rooms };
