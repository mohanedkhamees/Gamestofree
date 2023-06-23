import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import Select from "react-select";
import "./Navbar.css";
import Home from "./Home";
import { GamesContext } from "../contex/Contex";

const SearchPage = () => {
  const { selectOptions } = useContext(GamesContext);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  return (
    <>
      <div className="container_select">
        <div className="selet-container">
          <label>Plattform</label>
          <Select
            className="basic-single"
            onChange={(search1) => {
              {
                setSearch1(search1.value);
              }
            }}
            options={selectOptions}
            placeholder={"Select Your Plattfrom"}
            isSearchable={false}
            defaultValue={selectOptions[0]}
          />
        </div>

        <div className="selet-container">
          <label>Game Search</label>
          <input
            className="input_search"
            placeholder="Search For Your Game"
            onChange={(e) => setSearch2(e.target.value)}
          ></input>
        </div>
      </div>
      <h1>Our Game Für {search1 || search2 || "all Plattfrom"}</h1>
      <br></br>
      <Home showfilter={search1 || ""} textfilter={search2 || ""} />
    </>
  );
};

export default SearchPage;
