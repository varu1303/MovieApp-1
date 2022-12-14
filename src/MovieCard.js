import React from "react";

class MovieCard extends React.Component {
    
  render(){
    const {Title,Poster,Plot,imdbRating,price,fav,stars} = this.props.movie;
    //console.log(this.props)
    return(
      <>
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

          <img className="str-btn" 
                alt="Subtract" 
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                onClick={()=> this.props.onDecStars(this.props.movie)}/>

          <img className="stars" 
                alt="stars" 
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" />
          
          <img className="str-btn" 
                alt="add" 
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                onClick={()=> this.props.onIncStars(this.props.movie)}/>

          <span className="starCount">{stars}</span>
             
          </span>

            <button  className={fav?"unfavourite-btn":"favourite-btn"} 
                        onClick={() => this.props.onClickFav(this.props.movie)}>{fav? "UnFavourite":"Favorite"}
            </button>

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
          
      </>
      
    );
  }

}

export default MovieCard;
