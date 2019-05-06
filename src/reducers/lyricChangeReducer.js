import constants from './../constants';
const { initialState, types, songList } = constants;
import v4 from 'uuid/v4';

const lyricChangeReducer = (state = initialState.songsById, action) => {
  let newSongsByIdEntry;
  let newSongsByIdStateSlice;
  let newState;
  let newId = v4();
  console.log(action);
  switch (action.type) {
  case types.NEXT_LYRIC:
    const newArrayPosition = state[action.currentSongId].arrayPosition + 1;
    newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
      arrayPosition: newArrayPosition
    });
    newSongsByIdStateSlice = Object.assign({}, state, {
      [action.currentSongId]: newSongsByIdEntry
    });
    return newSongsByIdStateSlice;
  case types.RESTART_SONG:
    newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
      arrayPosition: 0
    });
    newSongsByIdStateSlice = Object.assign({}, state, {
      [action.currentSongId]: newSongsByIdEntry
    });
    return newSongsByIdStateSlice;
    case types.REQUEST_SONG:
      newSongsByIdEntry = {
        isFetching: true,
        title: action.title,
        songId: action.songId
      };
      newSongsByIdStateSlice = Object.assign({}, state, {
        [action.songId]: newSongsByIdEntry
      })
      return newSongsByIdStateSlice;
    case types.RECEIVE_SONG:
      newSongsByIdEntry = Object.assign({}, state[action.songId], {
        isFetching: false,
        receivedAt: action.receivedAt,
        title: action.title,
        artist: action.artist,
        songArray: action.songArray,
        arrayPosition: 0,
        songId: action.songId
      });
      newSongsByIdStateSlice = Object.assign({}, state, {
        [action.songId]: newSongsByIdEntry
      });
      return newSongsByIdStateSlice;
  default:
    return state;
  }
};

export default lyricChangeReducer;



// case types.HELLO_THERE:
// let arr = {title: 'sldkfj', artist: 'lakdsjf', songId: 1,
// arrayPosition: 0};
// newState = Object.assign({[newId]: arr}, state)
// console.log(newState)
// return newState;
