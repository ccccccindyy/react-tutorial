import React from "react";


export const Book = ({title = "t", author =" a", pages = 55, freeBookmark}) => {

    return (
        <section>
            <h1>{title}</h1>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>Free bookmark Today: {freeBookmark ? 'yes' : 'no'}</p>
        </section>
    )
    }