import React from "react";

class MovieCard extends React.Component {
  render(){
    return(
      <>
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'/>
        </div>

        <div className="right">
          <div className="title">The Avengers</div>
          <div className="plot">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</div>
          <div className="footer">
          <div className='rating'>8.0</div>
            <button class="favourite-btn">Favorite</button>
          </div>
        </div>
      </div>

      <div className="movie-card">
        <div className="left">
          <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'/>
        </div>

        <div className="right">
          <div className="title">The Avengers</div>
          <div className="plot">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</div>
          <div className="footer">
          <div className='rating'>8.0</div>
            <button class="favourite-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="movie-card">
        <div className="left">
          <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'/>
        </div>

        <div className="right">
          <div className="title">The Avengers</div>
          <div className="plot">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</div>
          <div className="footer">
          <div className='rating'>8.0</div>
            <button class="favourite-btn">Favorite</button>
          </div>
        </div>
      </div>
      </>
      
    );
  }

}

export default MovieCard;
