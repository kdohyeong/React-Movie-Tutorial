import React from 'react';
import PropTypes from 'prop-types';  //yarn add prop-types

// class Movie extends Component {

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired   //타입검사
//   }
  
//   render() {   
//     return (
//       <div>
//           <MoviePoster poster={this.props.poster}></MoviePoster>
//       </div>
//     );
//   }
//   }


function Movie({title, poster,genres,synopsis}){          //function에서는 this.props 필요없음
  return (                                  //이미 props를 쓰니깐
    <div className="Movie">
      <div className="Movie__Columns">                            
    <MoviePoster poster={poster} alt={title}/>
      </div>  
        <div className="Movie__Columns">  
        <h1>{title}</h1>
        </div>
        <div className="Movie__Genres">
           {genres.map((genre,index) => <MovieGenres genre={genre} key={index}/>)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}

        </p>
    </div>
  )
}

Movie.propsTypes={
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsys: PropTypes.string.isRequired
}

  // class MoviePoster extends Component{
  //   static propTypes = {
  //   poster: PropTypes.string.isRequired   //타입검사
  //   }
    
  //   render(){
  //       return(
  //           <img src ={this.props.poster}></img>
  //       );
  //   }
             //이런 state없는 멍청한 컴포넌트는 그냥 function으로 대체

  function MoviePoster({poster, alt}){
    return ( 
    <img src ={poster} alt={alt} title={alt} className="Movie__poster"/>
      )
  }

  function MovieGenres({genre}){
    return (
      <span className="Movie__Genres" >{genre}</span>
    )
  }


  MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
  }

export default Movie