import React from 'react';
import {comments} from './commentData'
import { Card } from './Card'

function App() {

  comments.map(comment => {
    <Card commentObject={comment}/>
  })  

  return (
    <>
    </>
  )
}

export default App
