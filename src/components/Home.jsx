import ReactPaginate from "react-paginate";
import { GamesContext } from "../contex/Contex";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

const Home = ({ showfilter, textfilter }) => {
  const { items, data, setCurrent, endIndex, current, setData } =
    useContext(GamesContext);
  const id = useParams();

  const games1 = data.filter(function (game) {
    return game.platform.includes(showfilter || " ");
  });
  const games2 = games1.filter(function (game) {
    return game.title.includes(textfilter || "");
  });
  const NbPage = Math.ceil(games2.length / items);

  const GamePerPage = games2.slice(current, endIndex);

  useLayoutEffect(() => {}, [showfilter, textfilter]);

  const handlePageClick = (event) => {
    const newCurrent = (event.selected * items) % games1.length;

    setCurrent(newCurrent);
  };
  return (
    <>
      <div className="div_root">
        {!showfilter && <h1>Our Free Games</h1>}
        <div className="main">
          <ul className="cards">
            {GamePerPage.map((game) => (
              <li key={game.id} className="cards_item">
                <Link to={`/game/${game.id}`}>
                  <div className="card">
                    <div className="card_image">
                      <img src={game.thumbnail} />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{game.title.slice(0, 15)}</h2>
                      <p className="card_text">
                        {game.short_description.slice(0, 70)}
                      </p>
                      <button
                        className="btn card_btn"
                        onClick={() => {
                          game.game_url;
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <ReactPaginate
            breakLabel="..."
            nextLabel={"Next →"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={NbPage}
            previousLabel={"← Previous"}
            renderOnZeroPageCount={null}
            containerClassName="pagination1"
            pageClassName="page-num"
            activeClassName="active"
            previousClassName="page-num"
            nextClassName="page-num"
            breakClassName="page-num"
            disabledClassName="page-num_disable"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
