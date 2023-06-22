import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import Select from "react-select";
import "./Navbar.css";
import Home from "./Home";
import { GamesContext } from "../contex/Contex";

const SearchPage = () => {
  const { selectOptions } = useContext(GamesContext);
  const [search1, setSearch1] = useState("");

  // console.log(current);
  return (
    <>
      <Select
        className="basic-single"
        onChange={(search1) => {
          {
            setSearch1(search1.value);
          }
          // {
          //   setCurrent(1);
          // }
        }}
        options={selectOptions}
        placeholder={"Select Your Plattfrom"}
        isSearchable={false}
        defaultValue={selectOptions[0]}
      />
      {/* <Select
        className="basic-single"
        onChange={(genre) => setWSe(genre.value)}
        options={gernOptions}
        placeholder={"Select Your genre"}
        isSearchable={false}
        defaultValue={gernOptions[0]}
      /> */}
      <h1>Our Game Für {search1 || "all Plattfrom"}</h1>
      <Home showfilter={search1 || ""} />
    </>
  );
};

export default SearchPage;
