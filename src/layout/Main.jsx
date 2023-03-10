// Отрисовка элементов страницы

import React, {useState, useEffect} from "react"
import {Movies} from '../components/Movies' // Фильмы 
import {Preloader} from '../components/Preloader' // Прелоадер
import {Search} from '../components/Search' // Поиск 

const API_KEY = process.env.REACT_APP_API_KEY

function Main () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

     // Функция для поиска фильмов
     const searchMovies = (str, type = 'all') => {
        setLoading(true)

        fetch(`http://www.omdbapi.com/?apikey=5f0e324b&&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false)
                setMovies(data.Search)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=5f0e324b&&s=matrix`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    return <main className='container content'>
        <Search searchMovies={searchMovies}/>  {/* Поиск */}
        {
        loading ? (
         <Preloader /> // Прелоадер
         ) : <Movies movies={movies}/> // фльмы на странице
        }
            
    </main>
}

export {Main}
