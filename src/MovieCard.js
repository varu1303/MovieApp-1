import React from "react";

class MovieCard extends React.Component {
  render(props){
    const {Title,Poster,Plot,imdbrating} = this.props.movie;
    //console.log(movie)
    return(
      <>
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={Poster}/>
        </div>

        <div className="right">
          <div className="title">{Title}</div>
          <div className="plot">{Plot}</div>
          <div className="footer">
          <div className='rating'>{imdbrating}</div>
            <button className="favourite-btn">Favorite</button>
          </div>
        </div>
      </div>
          
      </>
      
    );
  }

}

export default MovieCard;
