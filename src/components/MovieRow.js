import React from 'react'
import './MovieRow.css'
import Tmdb from '../Tmdb'

function MovieRow(props) {
    const { title, items } = props

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow--item" key={key}>
                            <img
                                src={Tmdb.baseImgFetch('/w300', item.poster_path)}
                                alt={items.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow
