// import React, { Component } from 'react'; //클래스일때
import React from 'react'; //function일때
import PropTypes from 'prop-types';
import './Movie.css'
import LinesEllipsis from 'react-lines-ellipsis' //library 다운 (긴 텍스트를 ...으로 표현)

function Movie({title, poster, genres, synopsis}){ //function은 props가 필요없음. 바로 사용하니깐 class는 class안에 this가 있어서 사용함.
    return(
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1> 
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters' 
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster ({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"></img>
    )
}

function MovieGenres({genre}){ //컴포넌트를 사용하는쪽에서 이름이 똑같아야함. 
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}

// class Movie extends Component{

//     static propType = {
//         title : PropTypes.string.isRequired,
//         poster : PropTypes.string.isRequired
//     }

//     render(){
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}></MoviePoster>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{

//     static propType = {
//         poster : PropTypes.string.isRequired
//     }

//     render(){
//         return (
//             <img src={this.props.poster}></img>
//         )
//     }
// }

export default Movie;