import React from 'react'
import { Header } from './Header'
import { Body } from './Body'

export function Card(props) {
    return (
        <div>
            Hello
            <Header 
                profileImg={props.commentObject.profileImg}
                username={props.commentObject.username}
            />
            <Body />
        </div>
    )
}