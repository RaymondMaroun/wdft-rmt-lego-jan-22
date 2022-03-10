// src/components/MovieCard.js

function MovieCard(props) {
  const { movie, clickToDelete } = props;
  console.log(props);
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {/* Keep the button commented out for now */}
      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
