import React from 'react';
import {comments} from './commentData'
import { Body } from './Body';

function App() {

  return (
    <>
      <Body comments={comments}/>
    </>
  )
}

export default App
