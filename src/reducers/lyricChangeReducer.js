import constants from './../constants';
const { initialState, types, songList } = constants;
import v4 from 'uuid/v4';

const lyricChangeReducer = (state = initialState.songsById, action) => {
  let newSongsByIdEntry;
  let newSongsByIdStateSlice;
  let newState;
  let newId = v4();
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
      return newSongsByIdStateSlice
    case types.HELLO_THERE:
      let arr = {title: 'sldkfj', artist: 'lakdsjf', songId: 1,
        arrayPosition: 0};
        newState = Object.assign({[newId]: arr}, state)
        let stuff = Object.keys(newState);
        let id = []
        for (let i=0; i < stuff.length; i++){
          id.push(stuff[i]);
        }
        id.forEach(function(el){
          console.log(el)
          if (el === stuff[3]){
            console.log(el)
          }
        })
        // console.log(state)
        // console.log(these)
        // console.log(id)
        // console.log(stuff)
      return newState;
  default:
    return state;
  }
};

export default lyricChangeReducer;
