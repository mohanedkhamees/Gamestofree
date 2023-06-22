import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import "./Home.css";

import { GamesContext } from "../contex/Contex";
const AddMovie = () => {
  const movies = [
    { id: 1, name: "mo1", age: 11 },
    { id: 2, name: "mo2", age: 12 },
    { id: 3, name: "mo3", age: 13 },
    { id: 4, name: "mo4", age: 14 },
  ];
  const { data, current, GamePerPage, NbPage, endIndex, setCurrent } =
    useContext(GamesContext);
  // const GamePerPage = useContext(GamesContext);
  console.log(data);
  console.log(GamePerPage);
  console.log(current);
  console.log(endIndex);
  return (
    <div>
      <h1>Our Games222 {current}</h1>
      <div className="main">
        <ul className="cards">
          {GamePerPage.map((game) => (
            <li key={game.id} className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={game.thumbnail} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{game.title.slice(0, 15)}</h2>
                  <p className="card_text">
                    {game.short_description.slice(0, 70)}
                  </p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={() => setCurrent(current + 1)}
        pageRangeDisplayed={3}
        pageCount={NbPage}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination1"
        pageClassName="page-num"
        activeClassName="active"
        previousClassName="page-num"
        nextClassName="page-num"
        breakClassName="page-num"
      />
    </div>
  );
};

export default AddMovie;
