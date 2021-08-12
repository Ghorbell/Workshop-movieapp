import React from 'react'
import Cart from './Cart'

const List = ({films}) => {
    return (
        <div className="movie-list">
            {films.map(
            (elmt) => <Cart movie={elmt}/>
         )}   
        </div>
    )
}

export default List
