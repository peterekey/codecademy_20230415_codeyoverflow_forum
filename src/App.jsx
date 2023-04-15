import React from 'react';
import {comments} from './commentData'
import { Body } from './Body'
import { Header } from './Header'

function App() {

  return (
    <>
      <Header comments={comments} />
      <Body comments={comments} />
    </>
  )
}

export default App
