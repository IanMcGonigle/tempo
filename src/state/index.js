import {
  atom,
} from 'recoil';

export const teamsState = atom({
  key: 'teamsState',
  default: [],
});

export const teamDetailState = atom({
  key: 'teamDetailState',
  default: {},
});
