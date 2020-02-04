/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */

export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error('Игрок уже включен в команду!');
    }
    this.members.add(newMember);
  }

  addAll(...newMembers) {
    for (const value of newMembers) {
      this.members.add(value);
    }
  }

  toArray() {
    return [...this.members];
  }
}
