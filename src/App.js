import React, { Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state={}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => { //매개변수를 index불러와서 
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        /> //key를 index로 사용하는거는 느림.
    })
    return movies
  }

  _getMovies = async () => { //async를 안쓰면 await작동안함.
    const movies = await this._callApi() //await는 callApi가 성공이 아니라 끝날때까지 기다림. 결과값을 movies 넣음.
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download count') //fetch가 성공하면 then으로 이동 //ajax기능
    .then(response => response.json()) //매개변수의 이름은 상관없음.
    .then(json => json.data.movies) //화살표 표시는 자동으로 return이됨. 
    .catch(err => console.log(err)) 
  }

  render(){
    const {movies} = this.state;
      return (
        <div className={movies ? "App" : "App-loading"}>
          {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
