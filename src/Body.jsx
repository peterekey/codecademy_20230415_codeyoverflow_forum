import React from 'react';

function Body (props) {

    const commentsArray = []
    props.comments.forEach(comment => commentsArray.push(<p key={comment.comment}>{comment.comment}</p>))

    return (
        <>
            {commentsArray}
        </>
    )
}

export { Body }