import React from 'react'
import './FeaturedMovie.css'
import Tmdb from '../Tmdb'

export default function FeaturedMovie({ item }) {
    const cssFeatured = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Tmdb.baseImgFetch('/original', item.backdrop_path)})`
    }

    return (
        <section
            className="featured"
            style={cssFeatured}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--yaer">2020</div>
                        <div className="featured--seasons">{item.number_of_seasons}</div>

                    </div>
                </div>
            </div>
        </section>
    )
}