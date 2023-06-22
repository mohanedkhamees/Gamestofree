import React, { useEffect, useState } from "react";
import { GamesContext } from "./Contex";

const GameStore = ({ children }) => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  const items = 12;
  // const [games, setGames] = useState([]);
  // const [search, setSearch] = useState([]);

  // Page Number in Pagtione

  const startIndex = (current - 1) * items;
  const endIndex = current + items;

  // how many game will loading in one page

  const GamePerPage = data.slice(current, endIndex);
  // Options Label for Selecter
  const selectOptions = [
    { value: "", label: "All" },
    { value: "PC ", label: "PC" },
    { value: "Web", label: "Web" },
    { value: "Shooter", label: "Shooter" },
    { value: "Fighting", label: "Fighting" },
  ];
  const gernOptions = [
    { value: "", label: "All" },
    { value: { search: "genre", genre: "Shooter" }, label: "Shooter" },
    { value: "Shooter", label: "Shooter" },
  ];

  useEffect(() => {
    async function getGames() {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5e000e98b7msh4fbab319ea6fe76p1bd34ejsn86e93191990a",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    getGames();
  }, []);

  return (
    <GamesContext.Provider
      value={{
        items,
        data,
        current,
        GamePerPage,
        setCurrent,
        setData,
        endIndex,
        selectOptions,
        gernOptions,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GameStore;
