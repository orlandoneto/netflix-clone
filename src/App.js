import React, { useEffect, useState } from 'react'

import './App.css'
import FeaturedMovie from './components/FeaturedMovie'
import MovieRow from './components/MovieRow'
import Tmdb from './Tmdb'

export default () => {
    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)

    useEffect(() => {
        const loadAll = async () => {
            // Carregando toda a lista de movies
            let list = await Tmdb.getHomeList()
            setMovieList(list)
            console.log(list)

            // Pegando somente a row com slug === originals
            let originals = list.filter(i => i.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length))
            let chosen = originals[0].items.results[randomChosen]
            let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
           setFeaturedData(choseInfo)
        }

        loadAll()
    }, [])

    return (
        <div className="page" >
            { featuredData &&
                <FeaturedMovie item={featuredData} />
            }

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow
                        key={key}
                        title={item.title}
                        items={item.items}
                    />
                ))}
            </section>
        </div>
    )
}