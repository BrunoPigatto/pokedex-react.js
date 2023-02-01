import React, { useState } from "react";
import { searchPokemon } from "../api";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokémon" onChange={onChangeHandler} />
        <button className="searchbar-btn" onClick={onButtonClickHandler}>
          Buscar
        </button>
        {pokemon ? (
          <div>
            <div>Nome: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
          </div>
        ) : (
          <p>Nenhum pokémon foi encontrado!</p>
        )}
      </div>
    </div>
  );
}
