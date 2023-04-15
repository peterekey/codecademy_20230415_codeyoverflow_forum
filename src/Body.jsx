import React from 'react';

export function Body (props) {

    const commentsArray = []
    props.comments.forEach(comment => commentsArray.push(<p key={comment.comment}>{comment.comment}</p>))

    return (
        <>
            {commentsArray}
        </>
    )
}