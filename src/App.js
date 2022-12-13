import React from "react";
import MovieCard from "./MovieCard";
/**
 const data = [
    {
      Title: 'The Avengers',
      
      Plot:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      
      imdbRating: '8.0',
      
    },
    {
      Title: 'The Dark Knight',
      
      Plot:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      
      imdbRating: '9.0',
      
    },
    {
      Title: 'Iron Man',
     
      Plot:
        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
      
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      
      imdbRating: '7.9',
      
    }]*/

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data : [
        {
          Title: 'The Avengers',
          
          Plot:
            "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          
          imdbRating: '8.0',
          
        },
        {
          Title: 'The Dark Knight',
          
          Plot:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
          
          imdbRating: '9.0',
          
        },
        {
          Title: 'Iron Man',
         
          Plot:
            'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
          
          imdbRating: '7.9',
          
        }],
        qty: 0
    }
  }
  render(){
    const data = this.state.data;
    return(
      <div className="main">

        {data.map((movie, index) => (
          <MovieCard movie={movie} key ={index}/>
        ))}

        {/* {data.map((movie, index) => (
          <MovieCard title ={movie.Title} 
                      plot= {movie.Plot} 
                      rating ={movie.imdbRating} 
                      img = {movie.Poster}
                      key ={index}/>
        ))} */}
        
        {/* <MovieCard title ={data[0].Title} plot= {data[0].Plot} rating ={data[0].imdbRating} img = {data[0].Poster}/>
        <MovieCard title ={data[1].Title} plot= {data[1].Plot} rating ={data[1].imdbRating} img = {data[1].Poster}/> */}
        
      </div>
    );
  }

}

export default App;
