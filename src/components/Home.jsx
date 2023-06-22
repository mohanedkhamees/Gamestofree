import ReactPaginate from "react-paginate";
import { GamesContext } from "../contex/Contex";
import "./Home.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

const Home = ({ showfilter }) => {
  const { items, data, setCurrent, endIndex, current, setData } =
    useContext(GamesContext);
  // const [filterGame, setFilterGame] = useState([]);
  const dddaattaa = "platform";

  const games1 = data.filter(function (game) {
    return game.platform.includes(showfilter || " ");
  });
  // console.log("genre", wSe.genre, "search", wSe.search);
  // const games1 = data.filter(function (game) {
  //   return String(game.platform | game.genre).includes(showfilter || " ");
  // // });
  // const games1 = data.filter((game) =>
  //   toString(seearch).includes(showfilter || " ")
  // );
  const NbPage = Math.ceil(games1.length / items);

  // // how many game will loading in one page

  const GamePerPage = games1.slice(current, endIndex);
  // // const fechdata = () => {

  //   setFilterGame(games1);
  // };
  // console.log("data", seearch);
  useLayoutEffect(() => {
    // setCurrent(0);
    // // setData(games1);
    // setFilterGame(games1);
    // setFilterGame(...data);
    // setFilterGame(
    //   data.filter(function (game) {
    //     return String(game.platform).includes(showfilter || " ");
    //   })
    // );
  }, [showfilter]);

  const handlePageClick = (event) => {
    const newCurrent = (event.selected * items) % games1.length;

    setCurrent(newCurrent);
  };
  return (
    <div className="main">
      <h1>Our Games</h1>
      <ul className="cards">
        {GamePerPage.map((game) => (
          <li key={game.id} className="cards_item">
            <div className="card">
              <div className="card_image">
                <Link to={game.game_url}>
                  <img src={game.thumbnail} />
                </Link>
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
  );
};
export default Home;
