import React, { useEffect, useState } from "react";
import "./GameCard.css";
import { Link, useParams } from "react-router-dom";

const GameCard = () => {
  const [gameDetail, setGameDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getGameDetails() {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
        setGameDetail(result);
      } catch (error) {
        console.error(error);
      }
    }

    getGameDetails();
  }, []);

  return (
    <div id="game-card-list">
      <div
        className="game-card"
        style={{
          backgroundImage: `url(${gameDetail.thumbnail})`,
        }}
      >
        <div class="game-card__overlay"></div>
        <div class="game-card__share"></div>
        <div class="game-card__content">
          <div class="game-card__header">
            <h1 class="game-card__title">{gameDetail.title}</h1>
            <h4 class="game-card__info">Gerne : {gameDetail.genre}</h4>
          </div>
          <p class="game-card__desc">
            {gameDetail.description && gameDetail.description.slice(0, 150)}
          </p>

          <Link to={gameDetail.game_url}>
            <button class="btn btn-outline game-card__button" type="button">
              Download It Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
