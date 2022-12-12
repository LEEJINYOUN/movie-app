/* eslint-disable */
import "../css/modal.css";
import React from "react";

function modal({ movies, modalChange, modalClose }) {
  return [
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[0].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[0].title}</span>
            <span className="TitleEn">({movies[0].original_title})</span>
            <span className="modalDate">
              개봉: {movies[0].release_date} , 평점: {movies[0].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[0].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[1].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[1].title}</span>
            <span className="TitleEn">({movies[1].original_title})</span>
            <span className="modalDate">
              개봉: {movies[1].release_date} , 평점: {movies[1].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[1].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[2].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[2].title}</span>
            <span className="TitleEn">({movies[2].original_title})</span>
            <span className="modalDate">
              개봉: {movies[2].release_date} , 평점: {movies[2].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[2].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[3].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[3].title}</span>
            <span className="TitleEn">({movies[3].original_title})</span>
            <span className="modalDate">
              개봉: {movies[3].release_date} , 평점: {movies[3].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[3].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[4].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[4].title}</span>
            <span className="TitleEn">({movies[4].original_title})</span>
            <span className="modalDate">
              개봉: {movies[4].release_date} , 평점: {movies[4].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[4].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[5].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[5].title}</span>
            <span className="TitleEn">({movies[5].original_title})</span>
            <span className="modalDate">
              개봉: {movies[5].release_date} , 평점: {movies[5].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[5].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[6].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[6].title}</span>
            <span className="TitleEn">({movies[6].original_title})</span>
            <span className="modalDate">
              개봉: {movies[6].release_date} , 평점: {movies[6].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[6].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[7].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[7].title}</span>
            <span className="TitleEn">({movies[7].original_title})</span>
            <span className="modalDate">
              개봉: {movies[7].release_date} , 평점: {movies[7].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[7].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[8].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[8].title}</span>
            <span className="TitleEn">({movies[8].original_title})</span>
            <span className="modalDate">
              개봉: {movies[8].release_date} , 평점: {movies[8].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[8].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[9].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[9].title}</span>
            <span className="TitleEn">({movies[9].original_title})</span>
            <span className="modalDate">
              개봉: {movies[9].release_date} , 평점: {movies[9].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[9].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[10].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[10].title}</span>
            <span className="TitleEn">({movies[10].original_title})</span>
            <span className="modalDate">
              개봉: {movies[10].release_date} , 평점: {movies[10].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[10].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[11].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[11].title}</span>
            <span className="TitleEn">({movies[11].original_title})</span>
            <span className="modalDate">
              개봉: {movies[11].release_date} , 평점: {movies[11].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[11].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[12].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[12].title}</span>
            <span className="TitleEn">({movies[12].original_title})</span>
            <span className="modalDate">
              개봉: {movies[12].release_date} , 평점: {movies[12].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[12].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[13].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[13].title}</span>
            <span className="TitleEn">({movies[13].original_title})</span>
            <span className="modalDate">
              개봉: {movies[13].release_date} , 평점: {movies[13].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[13].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[14].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[14].title}</span>
            <span className="TitleEn">({movies[14].original_title})</span>
            <span className="modalDate">
              개봉: {movies[14].release_date} , 평점: {movies[14].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[14].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[15].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[15].title}</span>
            <span className="TitleEn">({movies[15].original_title})</span>
            <span className="modalDate">
              개봉: {movies[15].release_date} , 평점: {movies[15].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[15].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[16].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[16].title}</span>
            <span className="TitleEn">({movies[16].original_title})</span>
            <span className="modalDate">
              개봉: {movies[16].release_date} , 평점: {movies[16].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[16].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[17].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[17].title}</span>
            <span className="TitleEn">({movies[17].original_title})</span>
            <span className="modalDate">
              개봉: {movies[17].release_date} , 평점: {movies[17].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[17].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[18].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[18].title}</span>
            <span className="TitleEn">({movies[18].original_title})</span>
            <span className="modalDate">
              개봉: {movies[18].release_date} , 평점: {movies[18].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[18].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="moreModalContainer">
      <div className="moreModal">
        <div className="modalLeft">
          <img
            src={`https://image.tmdb.org/t/p/w1280/` + movies[19].backdrop_path}
            alt="영화포스터"
          />
        </div>
        <div className="modalRight">
          <div className="modalTop">
            <span className="TitleKr">{movies[19].title}</span>
            <span className="TitleEn">({movies[19].original_title})</span>
            <span className="modalDate">
              개봉: {movies[19].release_date} , 평점: {movies[19].vote_average}
            </span>
          </div>

          <span className="modalMiddle">{movies[19].overview}</span>
          <div className="modalBotton">
            <button className="CloseBtn" onClick={modalClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
  ][modalChange];
}

export default modal;
