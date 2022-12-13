import React from "react";

class MovieCard extends React.Component {
    constructor(){
        super();
        this.state = {
            qty:0
        }

    }

    addLikes() {

        this.state.qty += this.state.qty

        console.log("Added")
                
    }
  render(props){
    const {Title,Poster,Plot,imdbRating} = this.props.movie;
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
          <div className='rating'>{imdbRating}</div>
            <button className="favourite-btn" onClick={this.addLikes}>like</button>
          </div>
        </div>
      </div>
          
      </>
      
    );
  }

}

export default MovieCard;
