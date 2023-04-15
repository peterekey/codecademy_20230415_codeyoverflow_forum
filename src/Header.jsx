import React from 'react';

function Header (props) {
    const headers = []
    props.comments.forEach(comment => {
        headers.push(
            <>
                <img src={comment.profileImg}/>
                <h1>{comment.username}</h1>
                <br/>
            </>
        )
    })

    return <>{headers}</>
}

export { Header }