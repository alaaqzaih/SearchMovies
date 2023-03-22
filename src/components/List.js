import React from "react";
import './List.scss'
import Detail from "./Detail";
import { useState } from "react";

const List = (props) => {
    const [detailbool, setdetailbool] = useState(false);
    const [imval, setimval] = useState();

    function showDetail(i) {
        setdetailbool(true);
        setimval(i);
      }
      function funsetdetailbool() {
        setdetailbool(false);
      }
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {props.movie.map((movie) => {
            return (
              <div key={movie.imdbID} onClick={() => showDetail(movie.imdbID)}>
                <div className="col">
                <img className="moviePoster" src={movie.Poster} alt="poster" />
                  <h5> {movie.Title}</h5>
                   </div>
              </div>
            );
          })}
              {detailbool ? (
          <Detail imval={imval} funsetdetailbool={funsetdetailbool} />
        ) : null}
        </div>
      </div>
    </div>
  );
};

export default List;
