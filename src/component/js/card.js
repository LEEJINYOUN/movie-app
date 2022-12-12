/* eslint-disable */
import "../css/card.css";
import React, { useState } from "react";

function card({ movies, Modal }) {
  const [modal, setModal] = useState(false);
  const [modalChange, setModalChange] = useState(0);
  const modalClose = () => {
    setModal(!modal);
  };
  return (
    <section className="cardContainer">
      {movies.map((item, key) => {
        return (
          <div className="card" key={key}>
            <div className="cardLeft">
              <img
                src={`https://image.tmdb.org/t/p/w1280/` + item.poster_path}
                alt="영화포스터"
              />
            </div>
            <div className="cardRight">
              <span className="cardTitleKr">{item.title}</span>
              <span className="cardButton">
                <button
                  className="moreBtn"
                  onClick={() => {
                    setModal(!modal);
                    setModalChange(key);
                  }}
                >
                  상세정보
                </button>
              </span>
            </div>
            {modal == true ? (
              <Modal
                movies={movies}
                modalChange={modalChange}
                modalClose={modalClose}
              />
            ) : null}
          </div>
        );
      })}
    </section>
  );
}

export default card;
