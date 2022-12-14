import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  constructor(){
    super();
    this.state = {

        movies : [
            {
              Title: 'The Avengers',
              
              Plot:
                "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
              
              Poster:
                'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
              
              imdbRating: '8.0',

              price: 99,
    
              stars: 0,

              fav: false
              
            },
            {
              Title: 'The Dark Knight',
              
              Plot:
                'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
              
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
              
              imdbRating: '9.0',

              price: 199,
    
              stars: 0,

              fav: false
              
            },
            {
              Title: 'Iron Man',
             
              Plot:
                'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
              
              Poster:
                'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
              
              imdbRating: '7.9',

              price: 139,
    
              stars: 0,

              fav: false
              
            }]
      
    }
    //this.addStars = this.addStars.bind(this);
    
 
  }

 
  handleAddStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    // this.state.stars += 0.5;
    // this.setState({
    //   stars: this.state.stars +0.5
    // })
    if(movies[movieId].stars <5){
        movies[movieId].stars += 0.5
    }

    this.setState({
        movies: movies
    });
    
    // this.setState({
    //       stars: this.state.stars +0.5
    //     })
    // this.setState({
    //   stars: this.state.stars +
    // })
    
    //console.log("stars added", this.state.stars);
  }

  handleDecStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars > 0){
        movies[movieId].stars -= 0.5;
    }

    this.setState({
        movies:movies
    })
    // this.setState((prevState) => 
    // {
      
    //   return {
        
    //     stars:prevState.stars-0.5
    //     }
    // });
    
 
  }

  handleToggleFav = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
        movies: movies
    })
    // this.setState((prevState) => {
    //   return{
    //     fav : !prevState.fav
    //   }
    // })
  }

  
  render(){
    console.log("Rerendering after setsate")
    //const {Title,Plot,Poster,imdbRating,stars,fav,price} = this.state;
    const movies = this.state.movies;
   
    return(
     <>

         {movies.map((movie, index) => (
          <MovieCard 
                movie={movie} 
                key ={index} 
                onIncStars = {this.handleAddStars}
                onDecStars = {this.handleDecStars}
                onClickFav = {this.handleToggleFav}/>
        ))} 

        {/* {movies.map((movie, index) => (
          <MovieCard title ={movie.Title} 
                      plot= {movie.Plot} 
                      rating ={movie.imdbRating} 
                      img = {movie.Poster}
                      key ={index}/>
        ))} */}
        
        {/* <MovieCard title ={movies[0].Title} plot= {movies[0].Plot} rating ={movies[0].imdbRating} img = {movies[0].Poster}/>
        <MovieCard title ={movies[1].Title} plot= {movies[1].Plot} rating ={movies[1].imdbRating} img = {movies[1].Poster}/> */}
        
      </>
    );
  }

}

export default MovieList;
