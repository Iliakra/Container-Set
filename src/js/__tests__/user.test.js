/* eslint-disable no-undef */
import Team, { Character } from '../app';

const group = new Team();
const Ben = new Character('Ben', 'Trey');
const Peter = new Character('Peter', 'Bowl');
const Nic = new Character('Nic', 'Worg');

test('adding new player to Team if he was not there before', () => {
  group.add(Ben);
  const received = [...group.members];
  const expected = [{ name: 'Ben', type: 'Trey' }];
  expect(received).toEqual(expected);
});

test('method add throws an error', () => {
  expect(() => {
    group.add(Ben);
  }).toThrow(new Error('Игрок уже включен в команду!'));
});

test('adding different amount of players to the Team', () => {
  group.addAll(Ben, Peter, Nic, Nic);
  const received = [...group.members];
  const expected = [{ name: 'Ben', type: 'Trey' },
    { name: 'Peter', type: 'Bowl' }, { name: 'Nic', type: 'Worg' }];
  expect(received).toEqual(expected);
});

test('converting Set to massive', () => {
  const received = group.toArray();
  const expected = [{ name: 'Ben', type: 'Trey' },
    { name: 'Peter', type: 'Bowl' }, { name: 'Nic', type: 'Worg' }];
  expect(received).toEqual(expected);
});
