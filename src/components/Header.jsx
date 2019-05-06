import React from 'react';
import SongSearch from './SongSearch';
import {connect} from 'react-redux';
import {hello} from './../actions';

function Header({dispatch}){
  return (
    <div>
      <h1>Singer</h1>
      <em>Search for a song:</em>
      <SongSearch />
      <button onClick={e => {
          e.preventDefault()
          dispatch(hello())
        }}></button>
    </div>
  );
}

export default connect()(Header);
