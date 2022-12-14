import React from "react";
import MovieCard from "./MovieCard";
/**
 * data : [
        {
          Title: 'The Avengers',
          
          Plot:
            "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          
          imdbRating: '8.0',

          stars: 0
          
        },
        {
          Title: 'The Dark Knight',
          
          Plot:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
          
          imdbRating: '9.0',

          stars: 0
          
        },
        {
          Title: 'Iron Man',
         
          Plot:
            'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
          
          imdbRating: '7.9',

          stars: 0
          
        }],
 */

class MovieList extends React.Component {
  constructor(){
    super();
    this.state = {

      Title: 'Iron Man',
         
          Plot:
            'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
          
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
          
          imdbRating: '7.9',
          price: 99,

          stars: 0.0,
          fav: false
      
    }
    //this.addStars = this.addStars.bind(this);
    this.testing();
 
  }

  testing() {

    const promise = new Promise((res,rej) => {
        setTimeout(() => {
            res("done");
        },3000);

    });

    promise.then(() => {
        this.setState({
            stars: this.state.stars + 2
        }, () => {
            console.log("Stars in Callback:", this.state)

        })
        this.setState({
            stars: this.state.stars + 3
        }, () => {
            console.log("Stars in Callback:", this.state)

        })
        this.setState({
            stars: this.state.stars + 4
        }, () => {
            console.log("Stars in Callback:", this.state)

        })

        console.log("Stars:", this.state)

        

  })
}
  addStars = ()=>{

    // this.state.stars += 0.5;
    // this.setState({
    //   stars: this.state.stars +0.5
    // })
    if(this.state.stars >=5){
        return;
    }

    this.setState((prevState) => 
    {
     
      return {
        
        stars:prevState.stars+0.5
        }
    });
    this.setState((prevState) => 
    {
     
      return {
        
        stars:prevState.stars+1
        }
    });
    this.setState((prevState) => 
    {
     
      return {
        
        stars:prevState.stars+2
        }
    });
    this.setState((prevState) => 
    {
     
      return {
        
        stars:prevState.stars+0.5
        }
    });
    // this.setState({
    //       stars: this.state.stars +0.5
    //     })
    // this.setState({
    //   stars: this.state.stars +
    // })
    
    console.log("stars added", this.state.stars);
  }

  decStars = ()=>{

    if(this.state.stars <= 0){
        return;
    }
    this.setState((prevState) => 
    {
      
      return {
        
        stars:prevState.stars-0.5
        }
    });
    
 
  }

  toggleFav = ()=> {
    this.setState((prevState) => {
      return{
        fav : !prevState.fav
      }
    })
  }

  
  render(){
    console.log("Rerendering after setsate")
    const {Title,Plot,Poster,imdbRating,stars,fav,price} = this.state;
   
    return(
      <div className="main">
        <div className="movie-card">
        <div className="left">
          <img alt="poster" src={Poster}/>
        </div>

        <div className="right">
          <div className="title">{Title}</div>
          <div className="plot">{Plot}</div>
          <div className="price">Rs: {price}</div>

          <div className="footer">
          <div className='rating'>Ratings: {imdbRating}</div>

          <span className="star-dis">          
          <img className="str-btn" alt="Subtract" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={this.decStars}/>
          <img className="stars" alt="stars" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" />
          
          <img className="str-btn" alt="add" src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" onClick={this.addStars}/>
          <span className="starCount">{stars}</span>
             
          </span>

            <button  className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.toggleFav}>{fav? "UnFavourite":"Favorite"}</button>
            <button className="cart-btn" >Buy</button>
          </div>
        </div>
      </div>



        {/* {data.map((movie, index) => (
          <MovieCard movie={movie} key ={index}/>
        ))} */}

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

export default MovieList;
