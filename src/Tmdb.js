const API_KEY = 'e2917b918d72f580babe40b7497ee38f'
const API_BASE = 'https://api.themoviedb.org/3'

/**
 *  - originais da netflix
 *  - recomendados (trending)
 *  - em alta (top rated)
 *  - ação
 *  - comédia
 *  - terror
 *  - romance
 *  - documentário
 */

const baseFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await baseFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await baseFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await baseFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            }
            ,
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await baseFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await baseFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await baseFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await baseFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}
    }
}