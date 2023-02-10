// Обход и обработка полуенных данных фльмов
import {Movie} from './Movie'

function Movies (props) {
    const {movies = []} = props

    return <div className='movies'>
        {movies.length ? movies.map(movie => ( 
            <Movie key={movie.imdbId} {...movie}/>
        )) : <h4>Nothing found...</h4>
    }
    </div>
}

export {Movies}